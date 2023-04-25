import React, {useState} from 'react';
import {styled} from "@mui/material";
import {useParams} from "react-router-dom";
import TicTacToeOffline from "../common/TicTacToeOffline";

const CustomContainer = styled("div")({
    display: "flex",
    width: "100vw",
    height: "90vh",
    backgroundColor: "var(--back-c)"
})

const TicTacToe = () => {
    const {id} = useParams();
    return id === undefined ? <TicTacToeOffline/> : <TicTacToeOnline/>
}



const TicTacToeOnline = () => {
    return (
        <div>
            <h1>Online</h1>
        </div>
    );
}


export default TicTacToe;