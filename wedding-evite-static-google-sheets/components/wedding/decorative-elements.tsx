"use client"

import { motion } from "framer-motion"

export function MandalaCorner({ className = "", rotate = 0 }: { className?: string; rotate?: number }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <defs>
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4AF37" />
          <stop offset="50%" stopColor="#F4E4BC" />
          <stop offset="100%" stopColor="#C9A227" />
        </linearGradient>
      </defs>
      <g fill="none" stroke="url(#goldGradient)" strokeWidth="1.5">
        {/* Outer decorative curves */}
        <path d="M0,0 Q50,30 100,0 Q70,50 100,100 Q50,70 0,100 Q30,50 0,0" opacity="0.8" />
        <path d="M10,10 Q50,35 90,10 Q65,50 90,90 Q50,65 10,90 Q35,50 10,10" opacity="0.6" />
        <path d="M20,20 Q50,40 80,20 Q60,50 80,80 Q50,60 20,80 Q40,50 20,20" opacity="0.4" />
        {/* Paisley elements */}
        <path d="M5,50 Q15,30 35,35 Q45,40 40,55 Q35,65 20,60 Q10,55 5,50" />
        <path d="M50,5 Q70,15 65,35 Q60,45 45,40 Q35,35 40,20 Q45,10 50,5" />
        {/* Lotus petals */}
        <ellipse cx="30" cy="30" rx="8" ry="15" transform="rotate(45, 30, 30)" opacity="0.5" />
        <ellipse cx="25" cy="25" rx="6" ry="12" transform="rotate(30, 25, 25)" opacity="0.3" />
      </g>
    </svg>
  )
}

function Sunflower({ size = 30, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" className={className}>
      {/* Petals */}
      {[...Array(12)].map((_, i) => (
        <ellipse
          key={i}
          cx="20"
          cy="8"
          rx="4"
          ry="8"
          fill="#F4C430"
          transform={`rotate(${i * 30} 20 20)`}
          opacity="0.9"
        />
      ))}
      {/* Center */}
      <circle cx="20" cy="20" r="8" fill="#8B4513" />
      <circle cx="20" cy="20" r="6" fill="#654321" />
      {/* Seeds pattern */}
      {[...Array(6)].map((_, i) => (
        <circle
          key={i}
          cx={18 + (i % 3) * 2}
          cy={18 + Math.floor(i / 3) * 2}
          r="0.8"
          fill="#2D1810"
        />
      ))}
    </svg>
  )
}

function Marigold({ size = 25, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" className={className}>
      {/* Outer petals */}
      {[...Array(16)].map((_, i) => (
        <ellipse
          key={i}
          cx="20"
          cy="6"
          rx="3"
          ry="6"
          fill="#FF8C00"
          transform={`rotate(${i * 22.5} 20 20)`}
          opacity="0.85"
        />
      ))}
      {/* Inner petals */}
      {[...Array(12)].map((_, i) => (
        <ellipse
          key={i}
          cx="20"
          cy="10"
          rx="2.5"
          ry="5"
          fill="#FFD700"
          transform={`rotate(${i * 30 + 15} 20 20)`}
          opacity="0.9"
        />
      ))}
      {/* Center */}
      <circle cx="20" cy="20" r="4" fill="#FF6600" />
    </svg>
  )
}

function Rose({ size = 22, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" className={className}>
      {/* Outer petals */}
      {[...Array(8)].map((_, i) => (
        <ellipse
          key={i}
          cx="20"
          cy="8"
          rx="5"
          ry="8"
          fill="#C41E3A"
          transform={`rotate(${i * 45} 20 20)`}
          opacity="0.8"
        />
      ))}
      {/* Inner petals */}
      {[...Array(6)].map((_, i) => (
        <ellipse
          key={i}
          cx="20"
          cy="12"
          rx="3"
          ry="5"
          fill="#E34234"
          transform={`rotate(${i * 60 + 30} 20 20)`}
          opacity="0.9"
        />
      ))}
      {/* Center */}
      <circle cx="20" cy="20" r="4" fill="#8B0000" />
    </svg>
  )
}

function Jasmine({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" className={className}>
      {/* Petals */}
      {[...Array(5)].map((_, i) => (
        <ellipse
          key={i}
          cx="20"
          cy="8"
          rx="5"
          ry="10"
          fill="#FFFEF0"
          transform={`rotate(${i * 72} 20 20)`}
          opacity="0.95"
        />
      ))}
      {/* Center */}
      <circle cx="20" cy="20" r="4" fill="#FFFACD" />
      <circle cx="20" cy="20" r="2" fill="#FFE4B5" />
    </svg>
  )
}

export function FloatingPetals() {
  const flowers = [
    { type: 'sunflower', component: Sunflower, size: 35 },
    { type: 'sunflower', component: Sunflower, size: 28 },
    { type: 'marigold', component: Marigold, size: 30 },
    { type: 'marigold', component: Marigold, size: 25 },
    { type: 'rose', component: Rose, size: 24 },
    { type: 'rose', component: Rose, size: 20 },
    { type: 'jasmine', component: Jasmine, size: 18 },
    { type: 'jasmine', component: Jasmine, size: 15 },
    { type: 'sunflower', component: Sunflower, size: 32 },
    { type: 'marigold', component: Marigold, size: 28 },
    { type: 'sunflower', component: Sunflower, size: 30 },
    { type: 'rose', component: Rose, size: 22 },
    { type: 'jasmine', component: Jasmine, size: 16 },
    { type: 'marigold', component: Marigold, size: 26 },
    { type: 'sunflower', component: Sunflower, size: 34 },
    { type: 'jasmine', component: Jasmine, size: 17 },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {flowers.map((flower, i) => {
        const FlowerComponent = flower.component
        return (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              x: `${(i * 6.25) % 100}vw`,
              y: -60,
              rotate: 0,
              opacity: 0.8
            }}
            animate={{
              y: '110vh',
              rotate: 360,
              opacity: [0.8, 1, 0.8]
            }}
            transition={{
              duration: 18 + Math.random() * 12,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "linear"
            }}
          >
            <FlowerComponent size={flower.size} />
          </motion.div>
        )
      })}
    </div>
  )
}

export function OrnamentalDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <div className="h-px w-16 bg-gradient-to-r from-transparent via-secondary to-transparent" />
      <svg width="40" height="20" viewBox="0 0 40 20" fill="none" className="text-secondary">
        <path
          d="M20 0L25 8L40 10L25 12L20 20L15 12L0 10L15 8L20 0Z"
          fill="currentColor"
        />
      </svg>
      <div className="h-px w-16 bg-gradient-to-r from-transparent via-secondary to-transparent" />
    </div>
  )
}

export function DiamondPattern({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 20" className={className} preserveAspectRatio="none">
      <pattern id="diamonds" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M10 0L20 10L10 20L0 10Z" fill="currentColor" opacity="0.15" />
      </pattern>
      <rect width="100%" height="100%" fill="url(#diamonds)" />
    </svg>
  )
}
