'use client'

import { useState } from 'react'
import { Share2, Copy, Check } from 'lucide-react'

interface ShareButtonProps {
  title: string
  path: string
}

export default function ShareButton({ title, path }: ShareButtonProps) {
  const [copied, setCopied] = useState(false)
  const [showModal, setShowModal] = useState(false)

  // For now, share the Railway URL directly
  // Later this can be updated when domain routing is fixed
  const shareUrl = `https://trueflow-landing-page-production.up.railway.app${path}`
  
  // Alternative: Create a short message with both links
  const shareMessage = `Check out: ${title}\n\nDirect link: ${shareUrl}\n\nOr visit TrueFlow AI and navigate to: ${path}`

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: `Check out this article from TrueFlow AI`,
          url: shareUrl,
        })
      } catch (err) {
        console.log('Error sharing:', err)
        setShowModal(true)
      }
    } else {
      setShowModal(true)
    }
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <>
      <button
        onClick={handleShare}
        className="flex items-center space-x-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
      >
        <Share2 className="h-4 w-4" />
        <span>Share</span>
      </button>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-xl p-6 max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">Share this article</h3>
            
            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-400 mb-2 block">Direct Link (works immediately):</label>
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={shareUrl}
                    readOnly
                    className="flex-1 px-3 py-2 bg-black/50 rounded-lg text-sm"
                  />
                  <button
                    onClick={copyToClipboard}
                    className="px-3 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <div className="text-sm text-gray-400">
                <p className="mb-2">Note: For the best experience, share the direct link above.</p>
                <p>The main domain (trueflow.ai) will support direct links to articles soon.</p>
              </div>

              <button
                onClick={() => setShowModal(false)}
                className="w-full px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}