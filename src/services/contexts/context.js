import React from "react";
import io from 'socket.io-client';
import { WS_URL } from "../../config/constants";


const SocketContext = React.createContext()
const SocketProvider = ({ children }) => {
    const socket = io(WS_URL)
    return <SocketContext.Provider value={socket}>
        {children}
    </SocketContext.Provider>
}

export {
    SocketContext,
    SocketProvider
}