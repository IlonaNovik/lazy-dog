import { useConversation } from "@11labs/react";
import { useCallback, useEffect, useMemo, useState } from "react";

export const useVoiceAgent = () => {
    const {status, endSession, startSession} = useConversation({
        agentId: "0Ki4B3p6v5Wk2ugfi9DG", 
    });
    // const conversationId = await startSession({ agentId: "0Ki4B3p6v5Wk2ugfi9DG", });
    // console.log(status);

    // const [session, setSession] = useState<Conversation>();

    // const isOpen = useCallback(() => {
    //     console.log('isOpen', session?.isOpen());

    //     return session?.isOpen()
    // }, [session]);

    // const startSession = useCallback(async() => {

    // const session = await Conversation.startSession({
    //     agentId: "0Ki4B3p6v5Wk2ugfi9DG",
    //     onMessage: ({message, source}) => {
    //         console.log(message, source);
    //     },
    
    // });

    // setSession(session);
    // session.setVolume({volume: 2})
    // await navigator.mediaDevices.getUserMedia({ audio: true });
    // }, []);

    // const stopSession = useCallback(async() => {
    //     await session?.endSession();

    //     console.log("stop session", session);
    // },[session])

    // useEffect(() => {
    //     if(session){
    //         session.
    //     }
    // }, [session])

    return {
        status,
        endSession,
        startSession
    };
}