'use client'

import { useEffect, useState } from 'react'

interface ConsentPreferences {
  visitorData: boolean
  timestamp: number
}

export default function ConditionalTracking() {
  const [hasConsent, setHasConsent] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

    // Check if user has given consent for visitor data collection
    const consentData = localStorage.getItem('trueflow-consent')

    if (consentData) {
      try {
        const preferences: ConsentPreferences = JSON.parse(consentData)
        setHasConsent(preferences.visitorData === true)
      } catch (e) {
        console.error('Error parsing consent data:', e)
        setHasConsent(false)
      }
    }
  }, [])

  useEffect(() => {
    // Only load tracking if consent is given
    if (isClient && hasConsent) {
      // Create and inject the PxGrabber script
      const script = document.createElement('script')
      script.id = 'px-grabber'
      script.type = 'text/javascript'
      script.innerHTML = `
        (function(doc, tag, id){
          var js = doc.getElementsByTagName(tag)[0];
          if (doc.getElementById(id)) {return;}
          js = doc.createElement(tag);
          js.id = id;
          js.src = "https://leadhacker.aipreneurs.com/px.min.js";
          js.type = "text/javascript";
          doc.head.appendChild(js);
          js.onload = function() {pxfired();};
        }(document, 'script', 'px-grabber'));

        function pxfired() {
          PxGrabber.setOptions({
            Label: "86197454|" + window.location.href,
          });
          PxGrabber.render();
        }
      `

      // Only add if not already present
      if (!document.getElementById('px-grabber')) {
        document.head.appendChild(script)
      }

      // Cleanup function to remove script if component unmounts
      return () => {
        const existingScript = document.getElementById('px-grabber')
        if (existingScript) {
          existingScript.remove()
        }
      }
    }
  }, [isClient, hasConsent])

  // This component doesn't render anything visible
  return null
}
