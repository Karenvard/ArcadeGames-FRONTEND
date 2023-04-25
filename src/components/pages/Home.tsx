import React, {useState} from 'react';
import {Button, styled} from "@mui/material";
import {IGame} from "../../../Interfaces/IGame";
import {authSlice} from "../../redux/reducers/authReducer";
import {useAppDispatch} from "../../utils/hooks";
import {NavLink} from "react-router-dom";

const CustomContainer = styled("div")({
    width: "100vw",
    height: "90vh",
    backgroundColor: "var(--back-c)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
})

const CustomTitle = styled("h1")({
    color: "white",
    fontSize: "5em"
});

const CustomButton = styled(Button)({
    color: "white",
    borderColor: "white",
    margin: "0 2vw",
    width: "13vw",
    height: "6vh"
})

const ButtonsWrapper = styled("div")({
    display: "flex",
    flexDirection: "row",
    marginTop: "7vh"
})

const PlayButton = styled(Button)({
    backgroundColor: "#04cc22",
    marginTop: "10vh",
    width: "10vw",
    height: "5vh",
    fontWeight: "600",
    fontSize: "2em",
})

const Home = () => {
    const dispatch = useAppDispatch();
    const [choosedGame, setChoosedGame] = useState<IGame>(null);
    const {setCurrentGame} = authSlice.actions;
    return (
        <CustomContainer>
            <CustomTitle>Choose game</CustomTitle>
            <ButtonsWrapper>
                <CustomButton disabled={choosedGame == "tic-tac-toe"} onClick={e => setChoosedGame("tic-tac-toe")} variant="outlined">Tic Tac Toe</CustomButton>
                <CustomButton disabled={choosedGame == "bridge"} onClick={e => setChoosedGame("bridge")} variant="outlined">Bridge</CustomButton>
                <CustomButton disabled={choosedGame == "sea-battle"} onClick={e => setChoosedGame("sea-battle")} variant="outlined">Sea Battle</CustomButton>
            </ButtonsWrapper>
            <PlayButton onClick={e => {
                dispatch(setCurrentGame(choosedGame));
            }} variant="contained" color="success"><NavLink style={{textDecoration: "none", color: "white"}} to="/selectMode">Play</NavLink></PlayButton>
        </CustomContainer>
    );
};

export default Home;