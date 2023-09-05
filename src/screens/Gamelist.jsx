//ici liste des jeux avec le tri en fonction de leur hashtags etc.. penser a réutiliser le component gamecard

import React, {useEffect, useState} from "react";
import GameCard from "../components/Games/gamecard";
import Axios from "axios";
import {useSelector} from "react-redux";
import {Box} from "@mui/material";

const GameList = () => {

    const [games, setGames] = useState([]);

    const access_token = useSelector((state) => state.access_token)
    const handleGetGames = async () => {
        try {
            const response = await Axios.get("http://localhost:8000/api/games", {
                headers: {
                    Authorization: `Bearer ${access_token}`,
                }
            });
            setGames(response.data.games);
            console.log(response.data);
        } catch (error) {
            console.log(access_token)
            console.log(error);
        }
    }

    useEffect(() => {
        handleGetGames();
    }, []);

    return (
        <Box
            className={"flex flex-wrap justify-center gap-4 mt-12"}
        >
            {games.map((game) => (
                <GameCard
                    key={game.id}
                    game={game}
                    className={""}
                />
            ))}
        </Box>

    )
}

export default GameList