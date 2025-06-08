import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

export const useSocket = () => {
    const [socket, setSocket] = useState<Socket | null>(null);
    const [isConnected, setIsConnected] = useState(false);

    useEffect(() => {
        if (socket) return;
        const socketConnection = io("http://localhost:3001", {
            reconnectionAttempts: 3,
        });

        setSocket(socketConnection);

        socketConnection.on("connect", () => {
            console.log("Connected to server");
            setIsConnected(true);
        });

        socketConnection.on("disconnect", () => {
            console.log("Disconnected from server");
        });

        socketConnection.on("error", (error) => {
            console.error("Socket error:", error);
        });
    }, []);

    return { socket, isConnected };
};
