import { Conversation } from "@11labs/client";
import { useCallback, useEffect, useMemo, useState } from "react";

export const useVoiceAgent = () => {
    const [session, setSession] = useState<Conversation>();

    const isOpen = useMemo(() => {
        console.log('isOpen', session?.isOpen());

        return session?.isOpen()
    }, [session]);

    const startSession = useCallback(async() => {

    const session = await Conversation.startSession({
        agentId: "0Ki4B3p6v5Wk2ugfi9DG",
        onMessage: ({message, source}) => {
            console.log(message, source);
        },
    
    });

    setSession(session);
    session.setVolume({volume: 0})
    await navigator.mediaDevices.getUserMedia({ audio: true });
    }, []);

    const stopSession = useCallback(async() => {
        await session?.endSession();

        console.log("stop session", session);

    },[session])

    useEffect(() => {
        console.log('isOpen - useEffect', isOpen);
    }, [session])

    return {
        isOpen,
        stopSession,
        startSession
    };
}