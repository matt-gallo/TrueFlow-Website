'use client'

import { useState, useEffect } from 'react'
import { 
  Share2, 
  Twitter, 
  Linkedin, 
  Facebook, 
  Mail, 
  Link2, 
  Check,
  MessageCircle,
  Send
} from 'lucide-react'
import { useTheme } from '@/app/components/ThemeProvider'

interface SocialShareProps {
  title: string
  url?: string
  excerpt?: string
  className?: string
  variant?: 'inline' | 'floating' | 'compact'
}

export default function SocialShare({ 
  title, 
  url: providedUrl, 
  excerpt = '',
  className = '',
  variant = 'inline'
}: SocialShareProps) {
  const [showShareMenu, setShowShareMenu] = useState(false)
  const [copied, setCopied] = useState(false)
  const [shareUrl, setShareUrl] = useState('')
  const { isDarkMode } = useTheme()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setShareUrl(providedUrl || window.location.href)
    }
  }, [providedUrl])

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy link:', err)
    }
  }

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    reddit: `https://reddit.com/submit?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(title)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(`${title} ${shareUrl}`)}`,
    telegram: `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`,
    email: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`Check out this article: ${title}\n\n${excerpt}\n\nRead more: ${shareUrl}`)}`
  }

  const socialPlatforms = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: shareLinks.linkedin,
      hover: {
        dark: 'hover:bg-blue-600/20 hover:text-blue-400',
        light: 'hover:bg-blue-50 hover:text-blue-600'
      }
    },
    {
      name: 'Twitter',
      icon: Twitter,
      href: shareLinks.twitter,
      hover: {
        dark: 'hover:bg-sky-500/20 hover:text-sky-400',
        light: 'hover:bg-sky-50 hover:text-sky-600'
      }
    },
    {
      name: 'Facebook',
      icon: Facebook,
      href: shareLinks.facebook,
      hover: {
        dark: 'hover:bg-blue-500/20 hover:text-blue-400',
        light: 'hover:bg-blue-50 hover:text-blue-600'
      }
    },
    {
      name: 'Reddit',
      icon: MessageCircle,
      href: shareLinks.reddit,
      hover: {
        dark: 'hover:bg-orange-500/20 hover:text-orange-400',
        light: 'hover:bg-orange-50 hover:text-orange-600'
      }
    },
    {
      name: 'WhatsApp',
      icon: Send,
      href: shareLinks.whatsapp,
      hover: {
        dark: 'hover:bg-green-500/20 hover:text-green-400',
        light: 'hover:bg-green-50 hover:text-green-600'
      }
    },
    {
      name: 'Telegram',
      icon: Send,
      href: shareLinks.telegram,
      hover: {
        dark: 'hover:bg-sky-500/20 hover:text-sky-400',
        light: 'hover:bg-sky-50 hover:text-sky-600'
      }
    },
    {
      name: 'Email',
      icon: Mail,
      href: shareLinks.email,
      hover: {
        dark: 'hover:bg-purple-500/20 hover:text-purple-400',
        light: 'hover:bg-purple-50 hover:text-purple-600'
      }
    },
  ]

  if (variant === 'floating') {
    const containerClasses = isDarkMode
      ? 'bg-black/80 border-white/10 text-white'
      : 'bg-white border-gray-200 text-gray-700 shadow-xl shadow-gray-200/60'
    const buttonBaseClasses = isDarkMode
      ? 'bg-white/5 border border-white/10 text-white'
      : 'bg-gray-50 border border-gray-200 text-gray-600'
    const copyHoverClasses = isDarkMode ? 'hover:bg-white/10' : 'hover:bg-gray-100'

    return (
      <div className={`fixed right-8 top-1/2 -translate-y-1/2 z-40 ${className}`}>
        <div className={`flex flex-col gap-3 backdrop-blur-xl rounded-2xl p-3 ${containerClasses}`}>
          <div className={`text-xs font-medium tracking-wider uppercase text-center pb-2 border-b ${
            isDarkMode ? 'text-white/60 border-white/10' : 'text-gray-500 border-gray-200'
          }`}>
            Share
          </div>
          {socialPlatforms.slice(0, 5).map((platform) => (
            <a
              key={platform.name}
              href={platform.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300 ${buttonBaseClasses} ${platform.hover[isDarkMode ? 'dark' : 'light']}`}
              title={`Share on ${platform.name}`}
            >
              <platform.icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
            </a>
          ))}
          <button
            onClick={handleCopyLink}
            className={`group flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300 ${buttonBaseClasses} ${copyHoverClasses}`}
            title="Copy link"
          >
            {copied ? (
              <Check className={`h-4 w-4 ${isDarkMode ? 'text-green-400' : 'text-green-500'}`} />
            ) : (
              <Link2 className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
            )}
          </button>
        </div>
      </div>
    )
  }

  if (variant === 'compact') {
    const compactButtonBase = isDarkMode
      ? 'bg-white/5 border border-white/10 text-white'
      : 'bg-gray-50 border border-gray-200 text-gray-600'
    const compactHover = isDarkMode ? 'hover:bg-white/10' : 'hover:bg-gray-100'

    return (
      <div className={`flex items-center gap-2 ${className}`}>
        {socialPlatforms.slice(0, 4).map((platform) => (
          <a
            key={platform.name}
            href={platform.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex items-center justify-center w-9 h-9 rounded-lg transition-all duration-300 ${compactButtonBase} ${platform.hover[isDarkMode ? 'dark' : 'light']}`}
            title={`Share on ${platform.name}`}
          >
            <platform.icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
          </a>
        ))}
        <button
          onClick={handleCopyLink}
          className={`group flex items-center justify-center w-9 h-9 rounded-lg transition-all duration-300 ${compactButtonBase} ${compactHover}`}
          title="Copy link"
        >
          {copied ? (
            <Check className={`h-4 w-4 ${isDarkMode ? 'text-green-400' : 'text-green-500'}`} />
          ) : (
            <Link2 className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
          )}
        </button>
      </div>
    )
  }

  // Default inline variant
  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setShowShareMenu(!showShareMenu)}
        className={`flex items-center gap-2 transition-all duration-300 hover:scale-105 px-4 py-2 rounded-full ${
          isDarkMode
            ? 'text-white/70 hover:text-white hover:bg-white/10'
            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
        }`}
      >
        <Share2 className="h-4 w-4 hover:rotate-12 transition-transform duration-300" />
        Share
      </button>
      
      {showShareMenu && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setShowShareMenu(false)}
          />
          
          {/* Share Menu */}
          <div className={`absolute right-0 mt-2 rounded-xl border p-2 z-50 min-w-[220px] shadow-2xl ${
            isDarkMode
              ? 'bg-black/95 backdrop-blur-xl border-white/20'
              : 'bg-white border-gray-200 shadow-gray-300/50'
          }`}>
            <div className={`text-xs font-medium tracking-wider uppercase px-3 py-2 border-b mb-1 ${
              isDarkMode ? 'text-white/60 border-white/10' : 'text-gray-500 border-gray-200'
            }`}>
              Share this article
            </div>
            
            {socialPlatforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${
                  isDarkMode ? 'text-white/80' : 'text-gray-700'
                } ${platform.hover[isDarkMode ? 'dark' : 'light']}`}
                onClick={() => setShowShareMenu(false)}
              >
                <platform.icon className="h-4 w-4" />
                <span className="text-sm">{platform.name}</span>
              </a>
            ))}
            
            <div className={`mt-2 pt-2 border-t ${isDarkMode ? 'border-white/10' : 'border-gray-200'}`}>
              <button
                onClick={() => {
                  handleCopyLink()
                  setTimeout(() => setShowShareMenu(false), 1000)
                }}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 w-full ${
                  isDarkMode
                    ? 'text-white/80 hover:bg-white/10'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {copied ? (
                  <>
                    <Check className={`h-4 w-4 ${isDarkMode ? 'text-green-400' : 'text-green-500'}`} />
                    <span className={`text-sm ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>Copied!</span>
                  </>
                ) : (
                  <>
                    <Link2 className="h-4 w-4" />
                    <span className="text-sm">Copy link</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
