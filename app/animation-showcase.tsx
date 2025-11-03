'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Pause, Settings, Info, ChevronRight, Zap, Move, MousePointer, Sparkles, Hash, Layers } from 'lucide-react';

// Import all animation components
import { 
  MagneticButton, 
  LiquidButton, 
  TextScramble, 
  RippleEffect, 
  GlowCard, 
  TiltCard, 
  BorderBeam, 
  ShimmerButton, 
  MorphingSVG, 
  ElasticButton 
} from './hover-effects';

import {
  OdometerNumber,
  CountUpOnScroll,
  MorphingNumber,
  ParticleNumber,
  AnimatedNumber,
  easings
} from './advanced-animations';

import {
  ParticleField
  // ConfettiCannon,
  // MatrixRain,
  // FireworkDisplay,
  // ParticleEmitter
} from './particle-systems';

import {
  MultiLayerParallax,
  ParallaxText
  // MouseParallax,
  // ScrollRotate,
  // ParallaxCard,
  // SplitParallax,
  // ZoomParallax,
  // HorizontalParallax,
  // ParallaxGallery,
  // InfiniteScroll
} from './parallax-effects';

import {
  FadeInUp,
  // FadeInDown,
  SlideInLeft,
  SlideInRight,
  ScaleIn,
  RotateIn,
  // SlideInUp,
  BlurIn
  // StaggerChildren
} from './scroll-animations';

// Animation Categories
const ANIMATION_CATEGORIES = [
  { id: 'numbers', name: 'Number Animations', icon: Hash },
  { id: 'hover', name: 'Hover Effects', icon: MousePointer },
  { id: 'particles', name: 'Particle Systems', icon: Sparkles },
  { id: 'parallax', name: 'Parallax Effects', icon: Layers },
  { id: 'scroll', name: 'Scroll Animations', icon: Move }
];

// Performance Monitor Component
const PerformanceMonitor: React.FC = () => {
  const [fps, setFps] = useState(60);
  const [memory, setMemory] = useState(0);
  const lastTimeRef = useRef(performance.now());
  const frameCountRef = useRef(0);

  useEffect(() => {
    let animationId: number;

    const updateStats = () => {
      const now = performance.now();
      frameCountRef.current++;

      if (now >= lastTimeRef.current + 1000) {
        setFps(Math.round((frameCountRef.current * 1000) / (now - lastTimeRef.current)));
        frameCountRef.current = 0;
        lastTimeRef.current = now;

        // Update memory if available
        if ('memory' in performance) {
          setMemory(Math.round((performance as any).memory.usedJSHeapSize / 1048576));
        }
      }

      animationId = requestAnimationFrame(updateStats);
    };

    animationId = requestAnimationFrame(updateStats);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="fixed top-4 right-4 bg-black/80 text-white p-3 rounded-lg text-sm font-mono z-50">
      <div>FPS: <span className={fps < 30 ? 'text-red-400' : fps < 50 ? 'text-yellow-400' : 'text-green-400'}>{fps}</span></div>
      {memory > 0 && <div>Memory: {memory}MB</div>}
    </div>
  );
};

// Animation Controls Component
interface AnimationControlsProps {
  onReset: () => void;
  isPaused: boolean;
  onPauseToggle: () => void;
  showPerformance: boolean;
  onPerformanceToggle: () => void;
}

const AnimationControls: React.FC<AnimationControlsProps> = ({
  onReset,
  isPaused,
  onPauseToggle,
  showPerformance,
  onPerformanceToggle
}) => {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full shadow-lg p-2 flex items-center gap-2 z-50">
      <button
        onClick={onPauseToggle}
        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        title={isPaused ? 'Play' : 'Pause'}
      >
        {isPaused ? <Play size={20} /> : <Pause size={20} />}
      </button>
      <button
        onClick={onReset}
        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        title="Reset Animations"
      >
        <Settings size={20} />
      </button>
      <button
        onClick={onPerformanceToggle}
        className={`p-2 rounded-full transition-colors ${
          showPerformance 
            ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400' 
            : 'hover:bg-gray-100 dark:hover:bg-gray-800'
        }`}
        title="Toggle Performance Monitor"
      >
        <Zap size={20} />
      </button>
    </div>
  );
};

// Main Animation Showcase Component
export const AnimationShowcase: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [activeCategory, setActiveCategory] = useState('numbers');
  const [isPaused, setIsPaused] = useState(false);
  const [showPerformance, setShowPerformance] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  // Animation parameters state
  const [numberParams, setNumberParams] = useState({
    from: 0,
    to: 1000,
    duration: 2000,
    decimals: 0,
    easing: 'easeOutCubic'
  });

  const [hoverParams, setHoverParams] = useState({
    magneticStrength: 0.5,
    glowColor: '#3b82f6',
    tiltMax: 20
  });

  const [particleParams, setParticleParams] = useState({
    count: 100,
    speed: 1,
    size: 4
  });

  const handleReset = () => {
    setAnimationKey(prev => prev + 1);
  };

  const handlePauseToggle = () => {
    setIsPaused(!isPaused);
  };

  const handlePerformanceToggle = () => {
    setShowPerformance(!showPerformance);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-4 md:inset-8 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden z-40"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold">Animation Showcase</h2>
                  <p className="text-blue-100 mt-1">Explore and test all animation components</p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex h-[calc(100%-5rem)]">
              {/* Sidebar */}
              <div className="w-64 bg-gray-50 dark:bg-gray-800 p-4 overflow-y-auto">
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
                  Categories
                </h3>
                <nav className="space-y-2">
                  {ANIMATION_CATEGORIES.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                        activeCategory === category.id
                          ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400'
                          : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                    >
                      <category.icon size={20} />
                      <span className="text-sm font-medium">{category.name}</span>
                    </button>
                  ))}
                </nav>

                {/* Parameters Section */}
                <div className="mt-8">
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
                    Parameters
                  </h3>
                  <div className="space-y-4">
                    {activeCategory === 'numbers' && (
                      <>
                        <div>
                          <label className="text-xs font-medium text-gray-600 dark:text-gray-400">Duration (ms)</label>
                          <input
                            type="range"
                            min="500"
                            max="5000"
                            value={numberParams.duration}
                            onChange={(e) => setNumberParams({ ...numberParams, duration: Number(e.target.value) })}
                            className="w-full mt-1"
                          />
                          <span className="text-xs text-gray-500">{numberParams.duration}ms</span>
                        </div>
                        <div>
                          <label className="text-xs font-medium text-gray-600 dark:text-gray-400">Target Value</label>
                          <input
                            type="number"
                            value={numberParams.to}
                            onChange={(e) => setNumberParams({ ...numberParams, to: Number(e.target.value) })}
                            className="w-full mt-1 px-2 py-1 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-medium text-gray-600 dark:text-gray-400">Easing</label>
                          <select
                            value={numberParams.easing}
                            onChange={(e) => setNumberParams({ ...numberParams, easing: e.target.value })}
                            className="w-full mt-1 px-2 py-1 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700"
                          >
                            {Object.keys(easings).map(easing => (
                              <option key={easing} value={easing}>{easing}</option>
                            ))}
                          </select>
                        </div>
                      </>
                    )}

                    {activeCategory === 'hover' && (
                      <>
                        <div>
                          <label className="text-xs font-medium text-gray-600 dark:text-gray-400">Magnetic Strength</label>
                          <input
                            type="range"
                            min="0.1"
                            max="1"
                            step="0.1"
                            value={hoverParams.magneticStrength}
                            onChange={(e) => setHoverParams({ ...hoverParams, magneticStrength: Number(e.target.value) })}
                            className="w-full mt-1"
                          />
                          <span className="text-xs text-gray-500">{hoverParams.magneticStrength}</span>
                        </div>
                        <div>
                          <label className="text-xs font-medium text-gray-600 dark:text-gray-400">Glow Color</label>
                          <input
                            type="color"
                            value={hoverParams.glowColor}
                            onChange={(e) => setHoverParams({ ...hoverParams, glowColor: e.target.value })}
                            className="w-full mt-1 h-8 rounded"
                          />
                        </div>
                      </>
                    )}

                    {activeCategory === 'particles' && (
                      <>
                        <div>
                          <label className="text-xs font-medium text-gray-600 dark:text-gray-400">Particle Count</label>
                          <input
                            type="range"
                            min="10"
                            max="500"
                            value={particleParams.count}
                            onChange={(e) => setParticleParams({ ...particleParams, count: Number(e.target.value) })}
                            className="w-full mt-1"
                          />
                          <span className="text-xs text-gray-500">{particleParams.count}</span>
                        </div>
                        <div>
                          <label className="text-xs font-medium text-gray-600 dark:text-gray-400">Particle Size</label>
                          <input
                            type="range"
                            min="1"
                            max="10"
                            value={particleParams.size}
                            onChange={(e) => setParticleParams({ ...particleParams, size: Number(e.target.value) })}
                            className="w-full mt-1"
                          />
                          <span className="text-xs text-gray-500">{particleParams.size}px</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Content Area */}
              <div className="flex-1 overflow-y-auto p-8">
                <div key={animationKey} className="space-y-12">
                  {/* Number Animations */}
                  {activeCategory === 'numbers' && (
                    <>
                      <div className="space-y-6">
                        <h3 className="text-xl font-semibold">Odometer Number</h3>
                        <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg text-center">
                          <OdometerNumber
                            from={numberParams.from}
                            to={numberParams.to}
                            duration={numberParams.duration}
                            easing={easings[numberParams.easing as keyof typeof easings]}
                            prefix="$"
                            suffix=" USD"
                            decimals={2}
                            className="text-4xl font-bold"
                          />
                        </div>
                      </div>

                      <div className="space-y-6">
                        <h3 className="text-xl font-semibold">Morphing Number</h3>
                        <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg text-center">
                          <MorphingNumber
                            from={0}
                            to={numberParams.to}
                            duration={numberParams.duration}
                            easing={easings[numberParams.easing as keyof typeof easings]}
                            className="text-4xl font-bold text-blue-600"
                          />
                        </div>
                      </div>

                      <div className="space-y-6">
                        <h3 className="text-xl font-semibold">Particle Number</h3>
                        <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg text-center">
                          <ParticleNumber
                            from={0}
                            to={numberParams.to}
                            duration={numberParams.duration}
                            easing={easings[numberParams.easing as keyof typeof easings]}
                            prefix="+"
                            suffix=" Points"
                            className="text-4xl font-bold"
                            particleConfig={{
                              count: 30,
                              colors: ['#3B82F6', '#8B5CF6', '#EC4899', '#10B981'],
                              spread: 80
                            }}
                          />
                        </div>
                      </div>

                      <div className="space-y-6">
                        <h3 className="text-xl font-semibold">Count Up on Scroll</h3>
                        <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg text-center">
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Scroll down to trigger</p>
                          <div className="h-32" />
                          <CountUpOnScroll
                            from={0}
                            to={numberParams.to}
                            duration={numberParams.duration}
                            easing={easings[numberParams.easing as keyof typeof easings]}
                            decimals={0}
                            className="text-4xl font-bold text-green-600"
                          />
                        </div>
                      </div>
                    </>
                  )}

                  {/* Hover Effects */}
                  {activeCategory === 'hover' && (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold">Magnetic Button</h3>
                          <div className="flex justify-center p-8">
                            <MagneticButton
                              strength={hoverParams.magneticStrength}
                              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium"
                            >
                              Hover Me
                            </MagneticButton>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold">Liquid Button</h3>
                          <div className="flex justify-center p-8">
                            <LiquidButton
                              color={hoverParams.glowColor}
                              className="font-medium"
                            >
                              Hover for Liquid
                            </LiquidButton>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold">Text Scramble</h3>
                          <div className="flex justify-center p-8">
                            <TextScramble
                              text="HOVER TO SCRAMBLE"
                              className="text-2xl font-bold"
                            />
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold">Ripple Effect</h3>
                          <div className="flex justify-center p-8">
                            <RippleEffect
                              className="px-8 py-4 bg-purple-600 text-white rounded-lg font-medium cursor-pointer"
                            >
                              Click for Ripples
                            </RippleEffect>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold">Glow Card</h3>
                          <div className="flex justify-center p-8">
                            <GlowCard
                              glowColor={hoverParams.glowColor}
                              className="p-8 bg-gray-900 text-white"
                            >
                              <h4 className="text-xl font-bold mb-2">Glow Effect</h4>
                              <p>Move your cursor around</p>
                            </GlowCard>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold">Tilt Card</h3>
                          <div className="flex justify-center p-8">
                            <TiltCard
                              maxTilt={hoverParams.tiltMax}
                              className="p-8 bg-gradient-to-br from-pink-500 to-purple-600 text-white rounded-xl"
                            >
                              <h4 className="text-xl font-bold mb-2">3D Tilt</h4>
                              <p>Hover to see perspective</p>
                            </TiltCard>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold">Border Beam</h3>
                          <div className="flex justify-center p-8">
                            <BorderBeam
                              duration={3}
                              colorFrom="#3b82f6"
                              colorTo="#8b5cf6"
                              className="p-8"
                            >
                              <div className="px-8 py-4">
                                <h4 className="text-lg font-bold">Animated Border</h4>
                                <p className="text-sm text-gray-600">Watch the beam travel</p>
                              </div>
                            </BorderBeam>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold">Shimmer Button</h3>
                          <div className="flex justify-center p-8">
                            <ShimmerButton
                              className="px-8 py-4 bg-gray-800 text-white rounded-lg font-medium"
                            >
                              Shimmer Effect
                            </ShimmerButton>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold">Elastic Button</h3>
                          <div className="flex justify-center p-8">
                            <ElasticButton
                              className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium"
                            >
                              Elastic Physics
                            </ElasticButton>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold">Morphing SVG</h3>
                          <div className="flex justify-center p-8">
                            <MorphingSVG
                              defaultPath="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"
                              hoverPath="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                              size={48}
                              className="text-blue-600"
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  {/* Particle Systems */}
                  {activeCategory === 'particles' && (
                    <>
                      <div className="space-y-8">
                        <div>
                          <h3 className="text-xl font-semibold mb-4">Interactive Particle Field</h3>
                          <div className="bg-gray-900 rounded-lg overflow-hidden" style={{ height: '400px' }}>
                            <ParticleField
                              particleCount={particleParams.count}
                              color="#3b82f6"
                              interactive={true}
                            />
                          </div>
                        </div>

                        {/* Confetti Cannon - Component not available */}
                        <div>
                          <h3 className="text-xl font-semibold mb-4">Confetti Cannon (Coming Soon)</h3>
                          <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg text-center">
                            <button className="px-6 py-3 bg-gray-400 text-white rounded-lg font-medium cursor-not-allowed" disabled>
                              Fire Confetti! 🎉 (Coming Soon)
                            </button>
                          </div>
                        </div>

                        {/* Matrix Rain - Component not available */}
                        <div>
                          <h3 className="text-xl font-semibold mb-4">Matrix Rain (Coming Soon)</h3>
                          <div className="bg-black rounded-lg overflow-hidden flex items-center justify-center text-green-400" style={{ height: '400px' }}>
                            <p>Matrix Rain Effect - Coming Soon</p>
                          </div>
                        </div>

                        {/* Firework Display - Component not available */}
                        <div>
                          <h3 className="text-xl font-semibold mb-4">Firework Display (Coming Soon)</h3>
                          <div className="bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center text-white" style={{ height: '400px' }}>
                            <p>Firework Display Effect - Coming Soon</p>
                          </div>
                        </div>

                        {/* Custom Particle Emitter - Component not available */}
                        <div>
                          <h3 className="text-xl font-semibold mb-4">Custom Particle Emitter (Coming Soon)</h3>
                          <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg flex items-center justify-center">
                            <p className="text-gray-600 dark:text-gray-400">Custom Particle Emitter - Coming Soon</p>
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  {/* Parallax Effects */}
                  {activeCategory === 'parallax' && (
                    <>
                      <div className="space-y-12">
                        <div>
                          <h3 className="text-xl font-semibold mb-4">Multi-Layer Parallax</h3>
                          <MultiLayerParallax
                            layers={[
                              { content: <div className="bg-blue-500 opacity-20 h-96" />, speed: 0.2 },
                              { content: <div className="bg-purple-500 opacity-30 h-96 mt-12" />, speed: 0.5 },
                              { content: <div className="bg-pink-500 opacity-40 h-96 mt-24" />, speed: 0.8 }
                            ]}
                            className="h-96 bg-gray-100 dark:bg-gray-800 rounded-lg"
                          />
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-4">Parallax Text</h3>
                          <div className="bg-gray-900 p-8 rounded-lg overflow-hidden">
                            <ParallaxText baseVelocity={-5}>
                              SMOOTH SCROLLING TEXT • INFINITE LOOP • 
                            </ParallaxText>
                          </div>
                        </div>

                        {/* Mouse Parallax - Component not available */}
                        <div>
                          <h3 className="text-xl font-semibold mb-4">Mouse Parallax (Coming Soon)</h3>
                          <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-lg text-white text-center">
                            <h4 className="text-2xl font-bold">Mouse Parallax Effect</h4>
                            <p>Coming Soon - Will follow your cursor</p>
                          </div>
                        </div>

                        {/* Scroll Rotate - Component not available */}
                        <div>
                          <h3 className="text-xl font-semibold mb-4">Scroll Rotate (Coming Soon)</h3>
                          <div className="flex justify-center">
                            <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                              Coming Soon
                            </div>
                          </div>
                        </div>

                        {/* Zoom Parallax - Component not available */}
                        <div>
                          <h3 className="text-xl font-semibold mb-4">Zoom Parallax (Coming Soon)</h3>
                          <div className="w-full h-64 bg-gray-300 rounded-lg flex items-center justify-center">
                            <p className="text-gray-600">Zoom Parallax Effect - Coming Soon</p>
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  {/* Scroll Animations */}
                  {activeCategory === 'scroll' && (
                    <>
                      <div className="space-y-16">
                        <div>
                          <h3 className="text-xl font-semibold mb-8">Fade Animations</h3>
                          <div className="grid grid-cols-2 gap-8">
                            <FadeInUp>
                              <div className="bg-blue-100 dark:bg-blue-900 p-8 rounded-lg text-center">
                                <h4 className="font-bold">Fade In Up</h4>
                                <p className="text-sm mt-2">Scrolls up while fading in</p>
                              </div>
                            </FadeInUp>

                            {/* FadeInDown - Component not available */}
                            <div className="bg-green-100 dark:bg-green-900 p-8 rounded-lg text-center opacity-50">
                              <h4 className="font-bold">Fade In Down (Coming Soon)</h4>
                              <p className="text-sm mt-2">Will scroll down while fading in</p>
                            </div>

                            <SlideInLeft delay={0.4}>
                              <div className="bg-purple-100 dark:bg-purple-900 p-8 rounded-lg text-center">
                                <h4 className="font-bold">Slide In Left</h4>
                                <p className="text-sm mt-2">Slides from left</p>
                              </div>
                            </SlideInLeft>

                            <SlideInRight delay={0.6}>
                              <div className="bg-pink-100 dark:bg-pink-900 p-8 rounded-lg text-center">
                                <h4 className="font-bold">Slide In Right</h4>
                                <p className="text-sm mt-2">Slides from right</p>
                              </div>
                            </SlideInRight>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-8">Scale & Rotate</h3>
                          <div className="grid grid-cols-2 gap-8">
                            <ScaleIn>
                              <div className="bg-orange-100 dark:bg-orange-900 p-8 rounded-lg text-center">
                                <h4 className="font-bold">Scale In</h4>
                                <p className="text-sm mt-2">Grows from 0 to full size</p>
                              </div>
                            </ScaleIn>

                            <RotateIn delay={0.3}>
                              <div className="bg-teal-100 dark:bg-teal-900 p-8 rounded-lg text-center">
                                <h4 className="font-bold">Rotate In</h4>
                                <p className="text-sm mt-2">Rotates while appearing</p>
                              </div>
                            </RotateIn>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-8">Advanced Effects</h3>
                          <div className="space-y-8">
                            {/* SlideInUp - Component not available */}
                            <div className="bg-indigo-100 dark:bg-indigo-900 p-8 rounded-lg opacity-50">
                              <h4 className="font-bold text-lg">Slide In Up (Coming Soon)</h4>
                              <p className="mt-2">Will slide up from below the viewport with a smooth ease</p>
                            </div>

                            <BlurIn delay={0.3}>
                              <div className="bg-red-100 dark:bg-red-900 p-8 rounded-lg">
                                <h4 className="font-bold text-lg">Blur In</h4>
                                <p className="mt-2">Transitions from blurred to sharp focus</p>
                              </div>
                            </BlurIn>
                          </div>
                        </div>

                        {/* StaggerChildren - Component not available */}
                        <div>
                          <h3 className="text-xl font-semibold mb-8">Stagger Children (Coming Soon)</h3>
                          <div className="space-y-4">
                            {[1, 2, 3, 4, 5].map((item) => (
                              <div key={item} className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 rounded-lg opacity-50">
                                <h4 className="font-bold">Item {item}</h4>
                                <p className="text-sm mt-1">Staggered animation - Coming Soon</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Animation Controls */}
            <AnimationControls
              onReset={handleReset}
              isPaused={isPaused}
              onPauseToggle={handlePauseToggle}
              showPerformance={showPerformance}
              onPerformanceToggle={handlePerformanceToggle}
            />

            {/* Performance Monitor */}
            {showPerformance && <PerformanceMonitor />}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// Export a trigger button component for easy integration
export const AnimationShowcaseTrigger: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center gap-2 z-30"
      >
        <Sparkles size={20} />
        <span className="font-medium">Animation Showcase</span>
      </button>
      <AnimationShowcase isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default AnimationShowcase;