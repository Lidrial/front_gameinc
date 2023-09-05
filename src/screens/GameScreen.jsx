import Game from "../components/Games/Game.jsx";
import Comments from "../components/comments/Comments.jsx";
import {useState} from "react";

const GameScreen = () => {


    return (
        <div>
            <h1>Game Screen</h1>
            <Game />
            <Comments />
        </div>
    );
}

export default GameScreen;