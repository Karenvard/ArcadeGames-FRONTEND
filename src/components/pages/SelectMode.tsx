import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector, useNavigateCondition} from "../../utils/hooks";
import {Button, styled, TextField, TextFieldProps} from "@mui/material";
import {withStyles} from "@mui/styles";
// @ts-ignore
import * as uuid from "uuid";
import {authSlice} from "../../redux/reducers/authReducer";
import {Navigate, useNavigate} from "react-router-dom";


const CustomContainer = styled("div")({
    width: "100vw",
    height: "90vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
})

const CustomTitle = styled("h1")({
    color: "white",
    fontSize: "5em"
});

const CustomButton = styled(Button)({
    borderColor: "white",
    borderWidth: "0.2vmax",
    color: "white",
    width: "20vw",
    height: "40vh",
    margin: "0 5vw",
    fontWeight: "500",
    fontSize: "2em",
})

const ButtonsWrapper = styled("div")({
    display: "flex",
    flexDirection: "row",
    marginTop: "5vh",
    alignItems: "center",
    fontSize: "2em",
    fontWeight: "600",
    color: "white",
})

const CustomTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: 'white',
        },
        '& label': {
            color: 'white',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'white',
            },
            '&:hover fieldset': {
                borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'white',
            },
        },
    },
})(styled(TextField)<TextFieldProps>({
    marginTop: "2vh",
    width: "20vw",
    height: "10vh",
    borderColor: "border",
    color: "white",
    margin: "2vh 5vw",
}))

const CustomTextFieldWrapper = styled("div")({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
})

const SelectMode = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {currentGame, currentRoom} = useAppSelector(state => state.authReducer);
    const [roomID, setRoomID] = useState<string>("");
    const {setCurrentRoom} = authSlice.actions;
    function createNewRoom() {
        const randomID = uuid.v4().split("-")[0];
        setCurrentRoom(randomID);
        console.log(currentGame, randomID)
        navigate(`/${currentGame}/${randomID}`);
    }
    function joinRoom() {

    }
    useNavigateCondition(currentGame, "/home");
    return <CustomContainer>
            <CustomTitle>Choose Mode</CustomTitle>
            <ButtonsWrapper>
                <CustomButton onClick={e => navigate("/tic-tac-toe")} variant="outlined">Offline</CustomButton>
                or
                <CustomButton onClick={createNewRoom} variant="outlined">Create room</CustomButton>
                or
                <CustomTextFieldWrapper>
                    <span>Enter room code</span>
                    <CustomTextField onChange={e => setRoomID(e.target.value)} value={roomID} inputProps={{style: {color: "white"}}} variant="outlined"/>
                </CustomTextFieldWrapper>
            </ButtonsWrapper>
        </CustomContainer>
};



export default SelectMode;