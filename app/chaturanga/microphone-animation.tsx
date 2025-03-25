"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Mic, MicOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Status } from "@11labs/react"

export function MicrophoneAnimation({status, onClose} : {status: Status, onClose: () => void}) {
  const [isActive, setIsActive] = useState(true);

  const toggleActive = () => {
    setIsActive(!isActive);
    onClose();
  }

  useEffect(() => {
    if(status === 'connected'){
      setIsActive(true);
    }

    if(status === 'disconnected') {
      setIsActive(false);
    }
  }, [status])

  return (
    <div className="flex flex-col items-center justify-center gap-6 p-6">
      <div className="relative flex items-center justify-center w-24 h-24">
        <motion.div
          onClick={toggleActive}
          className="absolute inset-0 rounded-full bg-yoga-earth/10"
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
          variant="outline"
          size="icon"
          className={`w-16 h-16 rounded-full ${isActive ? "bg-yoga-earth text-primary-foreground" : "bg-yoga-sand border-yoga-sand"}`}
        >
          {isActive ? <MicOff className="w-8 h-8" /> : <Mic className="w-8 h-8" />}
        </Button>
      </div>
    </div>
  )
}

