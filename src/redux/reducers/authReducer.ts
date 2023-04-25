import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IError} from "../../../Interfaces/IError";
import {toast} from "react-toastify";
import {Icon} from "@mui/material";
import {IGame} from "../../../Interfaces/IGame";
import {IMode} from "../../../Interfaces/IMode";

interface IInitialState {
    name: string | null
    isAuth: boolean
    currentGame: IGame
    currentRoom: null | string
}

const initialState: IInitialState = {
    name: null,
    isAuth: false,
    currentGame: null,
    currentRoom: null,
}

export const authSlice = createSlice({
    initialState,
    name: "auth",
    reducers: {
        signIn(state, action: PayloadAction<string>) {
            state.isAuth = true;
            state.name = action.payload;
            toast("You signed in successfully!", {progressStyle: {background: "#09d102"}, type: "success", draggable: false, pauseOnHover: false});
        },
        setCurrentGame(state, action: PayloadAction<IGame>) {
            state.currentGame = action.payload;
            if (!action.payload) return;
            switch (action.payload) {
                case "bridge":
                    toast("You choosed the Bridge game!", {progressStyle: {background: "#09d102"}, type: "success", draggable: false, pauseOnHover: false});
                    break;
                case "tic-tac-toe":
                    toast("You choosed the Tic Tac Toe game!", {progressStyle: {background: "#09d102"}, type: "success", draggable: false, pauseOnHover: false});
                    break;
                case "sea-battle":
                    toast("You choosed the Sea Battle game!", {progressStyle: {background: "#09d102"}, type: "success", draggable: false, pauseOnHover: false});
                    break;
            }
        },
        setCurrentRoom(state, action: PayloadAction<string>) {
            state.currentRoom = action.payload;
        },
        signOut(state) {
            state.isAuth = false;
            state.name = null;
            state.currentRoom = null;
            state.currentGame = null;
        }
    },
})

export default authSlice.reducer;