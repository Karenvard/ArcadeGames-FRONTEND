import React, {CSSProperties, useEffect} from 'react';
import "react-toastify/dist/ReactToastify.css"
import {ToastContainer, toast} from "react-toastify";
import {Routes, Route, Navigate} from "react-router-dom";
import {useAppSelector} from "./utils/hooks";
import SignIn from "./components/pages/SignIn";
import {styled} from "@mui/material";
import Home from "./components/pages/Home";
import NavBar from "./components/common/NavBar";
import SelectMode from "./components/pages/SelectMode";
import TicTacToe from "./components/pages/TicTacToe";

const ContainerDiv =  styled("div")({
    "--back-c": "#02387d",
    margin: "0",
    padding: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "var(--back-c)"
})

function App() {
    const {isAuth} = useAppSelector(state => state.authReducer);
    return (
        <ContainerDiv>
            <ToastContainer/>
            {isAuth
                ? <>
                    <NavBar/>
                    <Routes>
                        <Route path="*" element={<Navigate to="/home"/>} />
                        <Route path="/home" element={<Home/>}/>
                        <Route path="/selectMode" element={<SelectMode/>}/>
                        <Route path="/tic-tac-toe/:id" element={<TicTacToe/>} />
                        <Route path="/tic-tac-toe" element={<TicTacToe/>} />
                        <Route path="/bridge/:id" element={<h1>bridge</h1>} />
                    </Routes>
                </>

                : <Routes>
                    <Route path="*" element={<Navigate to="/signin"/>} />
                    <Route path="/signin" element={<SignIn/>} />
                </Routes>}
        </ContainerDiv>
    );
}

export default App;
