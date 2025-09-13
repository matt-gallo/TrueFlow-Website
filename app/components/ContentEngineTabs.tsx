'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ChevronRight, 
  FileText,
  Mic,
  Edit3,
  Eye,
  Calendar,
  Settings
} from 'lucide-react'

const tabs = [
  {
    id: 1,
    title: 'Choose Your Mode',
    icon: FileText,
    shortTitle: 'Setup',
    content: {
      heading: 'Start with Context',
      description: 'Choose between our guided AI questionnaire or upload your existing content for instant context.',
      features: [
        'Free-form question sets tailored to your industry',
        'Upload existing content, documents, or brand guidelines',
        'AI learns your voice and style from the start',
        'Smart templates for different business types'
      ],
      videoPlaceholder: '/videos/step1.mov' // Placeholder path
    }
  },
  {
    id: 2,
    title: 'Share Your Story',
    icon: Mic,
    shortTitle: 'Speak',
    content: {
      heading: 'Just Talk, We\'ll Listen',
      description: 'Simply speak or type about your business while our AI asks intelligent follow-up questions.',
      features: [
        'Natural conversation interface',
        'Voice or text input options',
        'AI-generated follow-up questions',
        'Captures expertise and nuance automatically'
      ],
      videoPlaceholder: '/videos/step2.mov'
    }
  },
  {
    id: 3,
    title: 'Review Transcripts',
    icon: Edit3,
    shortTitle: 'Edit',
    content: {
      heading: 'Perfect Your Message',
      description: 'Review AI-generated transcripts and make quick edits to ensure accuracy.',
      features: [
        'Clean, formatted transcripts',
        'Inline editing capabilities',
        'Highlight key talking points',
        'Save multiple versions'
      ],
      videoPlaceholder: '/videos/step3.mov'
    }
  },
  {
    id: 4,
    title: 'Content Audit',
    icon: Eye,
    shortTitle: 'Audit',
    content: {
      heading: 'Polish to Perfection',
      description: 'Review generated content with our built-in editor and custom theme options.',
      features: [
        'Professional content editor',
        'Brand voice consistency check',
        'SEO optimization tools',
        'Custom styling and themes'
      ],
      videoPlaceholder: '/videos/step4.mov'
    }
  },
  {
    id: 5,
    title: 'Build Calendar',
    icon: Calendar,
    shortTitle: 'Schedule',
    content: {
      heading: 'Strategic Content Planning',
      description: 'Organize all content into a strategic calendar with optimal posting times.',
      features: [
        'Drag-and-drop calendar interface',
        'Optimal timing recommendations',
        'Content category balancing',
        'Campaign planning tools'
      ],
      videoPlaceholder: '/videos/step5.mov'
    }
  },
  {
    id: 6,
    title: 'Manage & Adjust',
    icon: Settings,
    shortTitle: 'Manage',
    content: {
      heading: 'Stay Agile',
      description: 'Access your content calendar anytime to make quick edits and reschedule posts.',
      features: [
        'Real-time calendar updates',
        'Quick edit capabilities',
        'Bulk scheduling tools',
        'Performance tracking integration'
      ],
      videoPlaceholder: '/videos/step6.mov'
    }
  }
]

export default function ContentEngineTabs() {
  const [activeTab, setActiveTab] = useState(1)
  const currentTab = tabs.find(tab => tab.id === activeTab)

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Experience the Content Engine Workflow
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-white/70 max-w-3xl mx-auto"
          >
            Transform your expertise into weeks of content in just 6 simple steps
          </motion.p>
        </div>

        {/* Tab Navigation */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {tabs.map((tab, index) => {
              const Icon = tab.icon
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    relative px-4 py-3 rounded-lg font-medium transition-all duration-300
                    ${activeTab === tab.id 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-purple-500/25' 
                      : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white/80'
                    }
                  `}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex items-center gap-2">
                    <Icon className="w-5 h-5" />
                    <span className="hidden md:inline">{tab.title}</span>
                    <span className="md:hidden">{tab.shortTitle}</span>
                  </div>
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg -z-10"
                      transition={{ type: "spring", duration: 0.5 }}
                    />
                  )}
                  {index < tabs.length - 1 && (
                    <ChevronRight className="hidden lg:inline absolute -right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/30" />
                  )}
                </motion.button>
              )
            })}
          </div>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {currentTab && (
            <motion.div
              key={currentTab.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/10"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Left: Content */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg">
                      <currentTab.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-purple-400">
                      STEP {currentTab.id} OF 6
                    </span>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {currentTab.content.heading}
                  </h3>
                  
                  <p className="text-white/70 mb-6 text-lg">
                    {currentTab.content.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {currentTab.content.features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="mt-1">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" />
                        </div>
                        <span className="text-white/80">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Right: Video Placeholder */}
                <div className="relative">
                  <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-purple-900/30 to-blue-900/30 border border-white/10">
                    {/* Video Player for .mov files */}
                    <div className="aspect-video relative">
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // If video fails to load, show placeholder
                          e.currentTarget.style.display = 'none'
                          const placeholder = e.currentTarget.nextElementSibling
                          if (placeholder) {
                            placeholder.classList.remove('hidden')
                          }
                        }}
                      >
                        <source src={currentTab.content.videoPlaceholder} type="video/quicktime" />
                        <source src={currentTab.content.videoPlaceholder.replace('.mov', '.mp4')} type="video/mp4" />
                      </video>
                      
                      {/* Fallback placeholder if video doesn't exist */}
                      <div className="hidden absolute inset-0 flex items-center justify-center">
                        <div className="text-center p-8">
                          <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                            <currentTab.icon className="w-10 h-10 text-white" />
                          </div>
                          <p className="text-white/50 text-sm">
                            Video Preview Coming Soon
                          </p>
                          <p className="text-white/30 text-xs mt-2">
                            {currentTab.content.videoPlaceholder}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse animation-delay-1000" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress indicator */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {tabs.map((tab) => (
                      <div
                        key={tab.id}
                        className={`h-1 w-12 rounded-full transition-all duration-300 ${
                          tab.id <= activeTab 
                            ? 'bg-gradient-to-r from-blue-400 to-purple-400' 
                            : 'bg-white/20'
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={() => {
                      if (activeTab < 6) setActiveTab(activeTab + 1)
                      else setActiveTab(1)
                    }}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
                  >
                    {activeTab < 6 ? 'Next Step' : 'Start Over'}
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}