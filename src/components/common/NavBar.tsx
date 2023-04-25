import React from 'react';
import {Button, styled} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../utils/hooks";
import {authSlice} from "../../redux/reducers/authReducer";
import {NavLink} from "react-router-dom";

const CustomContainer = styled("div")({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    zIndex: "3",
    width: "100vw",
    height: "10vh",
    backgroundColor: "#0c0069"
})

const CustomName = styled("h2")({
    position: "absolute",
    left: "3vw",
    color: "white"
})

const CustomTitle = styled("h1")({
    color: "white"
})

const LogoutButton = styled(Button)({
    position: "absolute",
    right: "3vw",
    color: "#ff0000",
})



const NavBar = () => {
    const dispatch = useAppDispatch();
    const {signOut} = authSlice.actions;
    const {name} = useAppSelector(state => state.authReducer)
    return (
        <CustomContainer>
            <CustomName>
                {name}
            </CustomName>
            <CustomTitle><NavLink to="/home" style={{textDecoration: "none", color: "white"}}>Games library</NavLink></CustomTitle>
            <LogoutButton onClick={e => dispatch(signOut())} variant="outlined" color="error">Sign out</LogoutButton>
        </CustomContainer>
    );
};

export default NavBar;