"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useConversation } from "@11labs/react";
import Image from "next/image";
import { MicrophoneAnimation } from "../microphone-animation";

export default function Chaturanga() {
  const router = useRouter();
  const isFirstRender = useRef(true);

  const { startSession, status, endSession } = useConversation({
    agentId: "Z32ia3snE6dapfxi3aaM",
    onDisconnect: () => router.push("/chaturanga"),
    onMessage: (msg) => {
      if(msg.source === 'user') {
        if(msg.message.toLocaleLowerCase().includes('let\'s start')){
          endSession()
        }
      }
    },
  });

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      startSession();
    }
  }, []);

  return (
    <div className="bg-yoga-sand/30 h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-yoga-earth leading-tight mb-4">
        Chaturanga tutorial
      </h1>
      <Image 
        src="/chaturanga.gif"
        alt="Chaturanga Tutorial"
        width={500}
        height={100}
        className="rounded-md"
        />
      <MicrophoneAnimation status={status} onClose={async () => await endSession()} />
    </div>
  );
}
