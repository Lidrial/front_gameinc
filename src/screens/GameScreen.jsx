import Game from "../components/Games/Game.jsx";
import Comments from "../components/comments/Comments.jsx";
import {useState} from "react";
import {Card} from 'ui-neumorphism'
import {Box} from "@mui/material";

const GameScreen = () => {


    return (
        <Box
            style={{background: '#e0e0e0'}}
            className="p-5"

        >
            <h1>Game Screen</h1>
            <Game />
            <Comments />
        </Box>
    );
}

export default GameScreen;