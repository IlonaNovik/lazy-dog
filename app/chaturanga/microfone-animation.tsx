"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Mic, MicOff } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MicrophoneAnimation() {
  const [isActive, setIsActive] = useState(true)
  const [waveAmplitude, setWaveAmplitude] = useState(0)
  const animationRef = useRef<NodeJS.Timeout | null>(null)

  // Simulate wave animation
  useEffect(() => {
    if (isActive) {
      // Start the animation loop
      animateWaves()
    } else {
      // Clear any existing animation
      if (animationRef.current) {
        clearTimeout(animationRef.current)
      }
      setWaveAmplitude(0)
    }

    return () => {
      if (animationRef.current) {
        clearTimeout(animationRef.current)
      }
    }
  }, [isActive])

  const animateWaves = () => {
    // Create a somewhat natural-looking wave pattern
    const newAmplitude = 0.2 + Math.random() * 0.8
    setWaveAmplitude(newAmplitude)

    // Continue the animation loop
    animationRef.current = setTimeout(animateWaves, 150)
  }

  const toggleActive = () => {
    setIsActive(!isActive)
  }

  // Generate wave bars
  const generateWaveBars = () => {
    const bars = []
    const barCount = 12

    for (let i = 0; i < barCount; i++) {
      // Calculate height based on position and amplitude
      const position = i / (barCount - 1)
      const distanceFromCenter = Math.abs(position - 0.5) * 2
      const heightMultiplier = 1 - distanceFromCenter * 0.8

      // Calculate delay for wave effect
      const delay = Math.abs(position - 0.5) * 0.1

      bars.push(
        <motion.div
          key={i}
          className="w-1 mx-0.5 rounded-full bg-primary"
          animate={{
            height: isActive ? `${Math.max(4, waveAmplitude * 60 * heightMultiplier)}px` : "4px",
          }}
          transition={{
            duration: 0.2,
            delay: delay,
            ease: "easeInOut",
          }}
        />,
      )
    }

    return bars
  }

  return (
    <div className="flex flex-col items-center justify-center gap-6 p-6">
      <div className="relative flex items-center justify-center w-24 h-24">
        <motion.div
          className="absolute inset-0 rounded-full bg-primary/10"
          animate={{
            scale: isActive ? [1, 1.2, 1] : 1,
          }}
          transition={{
            repeat: isActive ? Number.POSITIVE_INFINITY : 0,
            duration: 1.5,
            ease: "easeInOut",
          }}
        />
        <Button
          onClick={toggleActive}
          variant="outline"
          size="icon"
          className={`w-16 h-16 rounded-full ${isActive ? "bg-primary text-primary-foreground" : "bg-muted"}`}
        >
          {isActive ? <MicOff className="w-8 h-8" /> : <Mic className="w-8 h-8" />}
        </Button>
      </div>
    </div>
  )
}

