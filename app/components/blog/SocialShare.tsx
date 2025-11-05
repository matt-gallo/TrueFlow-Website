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
    { name: 'LinkedIn', icon: Linkedin, href: shareLinks.linkedin, color: 'hover:bg-blue-600/20 hover:text-blue-400' },
    { name: 'Twitter', icon: Twitter, href: shareLinks.twitter, color: 'hover:bg-sky-500/20 hover:text-sky-400' },
    { name: 'Facebook', icon: Facebook, href: shareLinks.facebook, color: 'hover:bg-blue-500/20 hover:text-blue-400' },
    { name: 'Reddit', icon: MessageCircle, href: shareLinks.reddit, color: 'hover:bg-orange-500/20 hover:text-orange-400' },
    { name: 'WhatsApp', icon: Send, href: shareLinks.whatsapp, color: 'hover:bg-green-500/20 hover:text-green-400' },
    { name: 'Telegram', icon: Send, href: shareLinks.telegram, color: 'hover:bg-sky-500/20 hover:text-sky-400' },
    { name: 'Email', icon: Mail, href: shareLinks.email, color: 'hover:bg-purple-500/20 hover:text-purple-400' },
  ]

  if (variant === 'floating') {
    return (
      <div className={`fixed right-8 top-1/2 -translate-y-1/2 z-40 ${className}`}>
        <div className="flex flex-col gap-3 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-3">
          <div className="text-xs text-white/60 font-medium tracking-wider uppercase text-center pb-2 border-b border-white/10">
            Share
          </div>
          {socialPlatforms.slice(0, 5).map((platform) => (
            <a
              key={platform.name}
              href={platform.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 transition-all duration-300 ${platform.color}`}
              title={`Share on ${platform.name}`}
            >
              <platform.icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
            </a>
          ))}
          <button
            onClick={handleCopyLink}
            className="group flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
            title="Copy link"
          >
            {copied ? (
              <Check className="h-4 w-4 text-green-400" />
            ) : (
              <Link2 className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
            )}
          </button>
        </div>
      </div>
    )
  }

  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        {socialPlatforms.slice(0, 4).map((platform) => (
          <a
            key={platform.name}
            href={platform.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 border border-white/10 transition-all duration-300 ${platform.color}`}
            title={`Share on ${platform.name}`}
          >
            <platform.icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
          </a>
        ))}
        <button
          onClick={handleCopyLink}
          className="group flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
          title="Copy link"
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-400" />
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
        className="flex items-center gap-2 text-white/70 hover:text-white transition-all duration-300 hover:scale-105 px-4 py-2 rounded-full hover:bg-white/10"
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
          <div className="absolute right-0 mt-2 bg-black/95 backdrop-blur-xl rounded-xl border border-white/20 p-2 z-50 min-w-[200px] shadow-2xl">
            <div className="text-xs text-white/60 font-medium tracking-wider uppercase px-3 py-2 border-b border-white/10 mb-1">
              Share this article
            </div>
            
            {socialPlatforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${platform.color}`}
                onClick={() => setShowShareMenu(false)}
              >
                <platform.icon className="h-4 w-4" />
                <span className="text-sm">{platform.name}</span>
              </a>
            ))}
            
            <div className="border-t border-white/10 mt-2 pt-2">
              <button
                onClick={() => {
                  handleCopyLink()
                  setTimeout(() => setShowShareMenu(false), 1000)
                }}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/10 transition-all duration-200 w-full"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-green-400" />
                    <span className="text-sm text-green-400">Copied!</span>
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