import React, {FC, useState} from 'react';
import {Button, ButtonProps, styled, TextField, TextFieldProps} from "@mui/material";
import {authSlice} from "../../redux/reducers/authReducer";
import {useAppDispatch} from "../../utils/hooks";
import {sign} from "crypto";
import {withStyles} from "@mui/styles";

const ContainerDiv = styled("div")({
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
})

const CustomButton = styled(Button)<ButtonProps>({
    fontWeight: "700",
    fontSize: "1.5em",
    marginTop: "5vh",
    width: "10vw",
    height: "6vh",
})

const CustomTitle = styled("h1")<ButtonProps>({
    fontWeight: "700",
    fontSize: "7em",
    marginBottom: "11vh",
    marginTop: "-24vh",
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
}))

const SignIn: FC = () => {
    const [focus, setFocus] = useState<boolean>(false);
    const [input, setInput] = useState<string>("");
    const dispatch = useAppDispatch();
    const {signIn} = authSlice.actions;

    function Login() {
        dispatch(signIn(input));
    }

    return (
        <ContainerDiv>
            <CustomTitle>Games library</CustomTitle>
            <CustomTextField inputProps={{maxLength: 15, style: {color: "white"}}} onFocus={(e: any) => setFocus(true)}
                             onBlur={(e: any) => setFocus(false)}
                             id="outlined-basic" label={focus ? "Name" : "Enter your name"} variant="outlined"
                             value={input} onChange={(e: any) => setInput(e.target.value)}/>
            <CustomButton onClick={Login} variant="contained">Join</CustomButton>
        </ContainerDiv>
    );
};

export default SignIn;