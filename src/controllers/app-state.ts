import { Connection, PublicKey } from "@solana/web3.js";
import { useState } from "react";
import { usePublicKey, useConnection } from "react-xnft";

export interface CorvusState {
    connection: Connection;
    publicKey: PublicKey;
    message: string;
}
export function useCovusState(): CorvusState {
    const connection = useConnection() as Connection;
    const publicKey = usePublicKey() as PublicKey;

    const [message, setMessage] = useState<string>("");

    return {
        connection,
        publicKey,
        message,
    };
}
