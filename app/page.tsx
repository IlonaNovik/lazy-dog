
'use client';

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useCallback } from "react"
import { useVoiceAgent } from "./voice-agent";

export default function Home() {

  const {isOpen, startSession, stopSession} = useVoiceAgent();

  const toggleSession = useCallback(() => {
    isOpen ? stopSession() : startSession();
    console.log('isOpen - toghle', isOpen);

  },[])
  
  return (
    <div className="flex flex-col min-h-screen bg-yoga-sand/30 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-noise opacity-30 mix-blend-soft-light pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-yoga-clay/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-yoga-sage/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>
      <Button onClick={toggleSession}>{isOpen ? 'STOP' : 'START'}</Button>
      <header className="relative z-10 py-6">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 overflow-visible">
              <div className="absolute inset-0 bg-yoga-clay rounded-full opacity-20 animate-pulse-slow"></div>
              <Image
                src="/logo.svg"
                alt="YogaAlign Logo"
                width={40}
                height={40}
                className="relative z-10"
              />
            </div>
            <span className="font-medium text-xl text-yoga-earth">
              YogaAlign
            </span>
          </div>


        </div>
      </header>

      <main className="flex-1 relative z-10">
      </main>
    </div>
  );
}
