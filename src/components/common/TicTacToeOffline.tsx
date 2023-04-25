import React, {FC, MouseEventHandler, useEffect, useLayoutEffect, useRef, useState} from "react";
import {styled} from "@mui/material";
import {toast} from "react-toastify";

const BlockSpaceContainer = styled("div")({
    borderStyle: "solid",
    borderWidth: "5px",
    borderColor: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
})

const CustomSpanXO = styled("span")({
    fontSize: "9em",
    fontWeight: "900"
})

const BlockSpace: FC<{ text: string, onClick: MouseEventHandler<HTMLDivElement> }> = ({text, onClick}) => {
    return (
        <BlockSpaceContainer onClick={onClick}>
            <CustomSpanXO>{text}</CustomSpanXO>
        </BlockSpaceContainer>
    );
}


const CustomContainer = styled("div")({
    width: "100vw",
    height: "90vh",
    backgroundColor: "var(--back-c)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
})

const PlayField = styled("div")({
    width: "50vh",
    height: "50vh",
    display: "grid",
    gridTemplateColumns: `${100 / 3}% ${100 / 3}% ${100 / 3}%`,
    gridTemplateRows: `${100 / 3}% ${100 / 3}% ${100 / 3}%`,
    backgroundColor: "white"
})

const TurnTitle = styled("h1")({
    color: "white",
    fontSize: "5em"
})

const TicTacToeOffline = () => {
    const spaces = useRef(["", "", "", "", "", "", "", "", ""]);
    const [turn, setTurn] = useState<"X" | "O">(Math.floor(Math.random() * 2) == 0 ? "O" : "X");
    const [winner, setWinner] = useState<"X" | "O" | null>(null);
    const [isDraw, setIsDraw] = useState<boolean>(false);
    const BlockSpaceOnClickHandle = async (index: number) => {
        if (spaces.current[index]) {
            return toast("That field is already occupied!")
        }
        spaces.current[index] = turn;
        console.log(spaces.current[index])
        checkWinner();
        setTurn(prev => prev == "X" ? "O" : "X");
    }
    const checkWinner = () => {
        if (("" !== spaces.current[0]) && (spaces.current[0] === spaces.current[1]) && (spaces.current[1] === spaces.current[2])) {
           return setWinner(spaces.current[0] as "X" | "O")
        }
        if (("" !== spaces.current[3]) && (spaces.current[3] === spaces.current[4]) && (spaces.current[4] === spaces.current[5])) {
           return setWinner(spaces.current[3] as "X" | "O")
        }
        if (("" !== spaces.current[6]) && (spaces.current[6] === spaces.current[7]) && (spaces.current[7] === spaces.current[8])) {
           return setWinner(spaces.current[6] as "X" | "O")
        }
        if (("" !== spaces.current[0]) && (spaces.current[0] === spaces.current[3]) && (spaces.current[3] === spaces.current[6])) {
           return setWinner(spaces.current[0] as "X" | "O")
        }
        if (("" !== spaces.current[1]) && (spaces.current[1] === spaces.current[4]) && (spaces.current[4] === spaces.current[7])) {
           return setWinner(spaces.current[1] as "X" | "O")
        }
        if (("" !== spaces.current[2]) && (spaces.current[2] === spaces.current[5]) && (spaces.current[5] === spaces.current[8])) {
           return setWinner(spaces.current[2] as "X" | "O")
        }
        if (("" !== spaces.current[0]) && (spaces.current[0] === spaces.current[4]) && (spaces.current[4] === spaces.current[8])) {
           return setWinner(spaces.current[0] as "X" | "O")
        }
        if (("" !== spaces.current[2]) && (spaces.current[2] === spaces.current[4]) && (spaces.current[4] === spaces.current[6])) {
           return setWinner(spaces.current[2] as "X" | "O")
        }
        let isFull = true;
        spaces.current.forEach(item => {
            if (item === "") isFull = false;
        })
        if (isFull) setIsDraw(true);
    }

    return (
        <CustomContainer>
            {<TurnTitle>{isDraw ? "Draw" : (winner ? `Winner is ${winner}` : `Turn ${turn}`)}</TurnTitle>}
            <PlayField>
                {spaces.current.map((item, ind) => {
                    return <BlockSpace onClick={(e: any) => BlockSpaceOnClickHandle(ind)} text={item}/>
                })}
            </PlayField>
        </CustomContainer>
    );
}

export default TicTacToeOffline;