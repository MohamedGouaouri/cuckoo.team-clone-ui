import React, { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import { SocketContext } from "../services/contexts/context";
import TimerAlert from "./Alert";


const StyledTimer = styled.div`
    display: flex;
    flex-direction: column;
`

const Controllers = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin: 1rem;
`

const Button = styled.button`
    background-color: #4e91fc;
    border-radius: 2rem;
    padding: 1rem;
    color: white;
    width: 10rem;
    &:hover {
        background-color: white;
        color: #4e91fc;
    }
`

const Time = styled.div`
    font-size: 5rem;
`

const Timer = () => {
    const [time, setTime] = useState("00:25:00");
    const [alertOpened, setAlertOpened] = React.useState(false);
    const [alertMessage, setAlertMessage] = React.useState("");
    const [alertMessageType, setAlertMessageType] = React.useState("info");


    const socket = useContext(SocketContext);
    useEffect(() => {

        if (socket) {
            console.log(socket)

            socket.on("timer", (data) => {
                if (data.success) {
                    setTime(data.data)
                } else {
                    setAlertMessage(data.error);
                    setAlertMessageType("error")
                    setAlertOpened(true)
                }
            })
            return () => {
                socket.off("timer")
            }
        }

    }, [socket])

    const startTimer = () => {
        if (socket) {
            if (socket.connected) {
                socket.emit("start", "please start the timer")
                setAlertMessage("Timer started");
                setAlertMessageType("success")
                setAlertOpened(true)
                setTimeout(() => {
                    setAlertOpened(false)
                }, 1000)
            } else {
                setAlertMessage("Could not connect to server");
                setAlertOpened(true)
                setAlertMessageType("error")
                setTimeout(() => {
                    setAlertOpened(false)
                }, 1000)
            }

        }
    }
    const stopTimer = () => {
        if (socket) {
            if (socket.connected) {
                socket.emit("stop", "please stop the timer")
                setAlertMessage("Timer stopped");
                setAlertOpened(true)
                setTimeout(() => {
                    setAlertOpened(false)
                }, 1000)
            } else {
                setAlertMessage("Could not connect to server");
                setAlertOpened(true)
                setAlertMessageType("error")
                setTimeout(() => {
                    setAlertOpened(false)
                }, 1000)
            }
        }
    }


    return <StyledTimer>
        <Time>
            {time}
        </Time>
        <Controllers>
            <Button onClick={() => startTimer()}>start</Button>
            <Button onClick={() => stopTimer()}>stop</Button>
        </Controllers>

        <TimerAlert message={alertMessage} type={alertMessageType} opened={alertOpened} />


    </StyledTimer>
}

export default Timer