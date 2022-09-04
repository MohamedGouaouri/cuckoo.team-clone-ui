import React from "react";
import Alert from '@mui/material/Alert';


const TimerAlert = ({ message, type, opened }) => {



    return <Alert
        severity={type}

        sx={
            {
                mb: 2,
                position: "absolute",
                top: "1rem",
                left: "45%",
                visibility: opened ? "visible" : "hidden",
            }
        }
    >

        {message}

    </Alert>
}

export default TimerAlert