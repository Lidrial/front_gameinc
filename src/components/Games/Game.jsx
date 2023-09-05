import {useParams} from "react-router-dom";
import axios from "axios";
import {useSelector} from "react-redux";
import {useEffect, useRef, useState} from "react";
import {Box, Rating, Typography} from "@mui/material";

const Game = () => {
    const id = useParams().id;
    const access_token = useSelector((state) => state.access_token);

    const [gameData, setGameData] = useState(null);
    const [gameFile, setGameFile] = useState(null);
    const [date, setDate] = useState(null);

    const canvasRef = useRef(null);
    

    const getGame = () => {
        try {
            axios.get(`http://localhost:8000/api/games/${id}`, {
                headers: {
                    Authorization: `Bearer ${access_token}`,
                }
            }).then((res) => {
                console.log(res.data);
                setGameData(res.data);

                //formatage de la date
                const date = new Date(res.data.created_at);
                const day = String(date.getDate()).padStart(2, '0');
                const month = String(date.getMonth() + 1).padStart(2, '0');
                const year = date.getFullYear();
                setDate(`${day}/${month}/${year}`);
            });

            axios.get(`http://localhost:8000/api/get_games/${id}`, {
                headers: {
                    Authorization: `Bearer ${access_token}`,
                }
            }).then((res) => {
                // console.log(res.data);
                setGameFile(res.data);
            });

            // console.log(gameData.data);
            // console.log(gameFile.data);

        }catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getGame();
    }, []);

    useEffect(() => {
        if (gameFile) {
            console.log('Adding script to the DOM');
            const scriptElement = document.createElement("script");
            scriptElement.type = "text/javascript";
            scriptElement.text = gameFile;

            scriptElement.onload = () => {
                // Script loaded successfully
                console.log('Script loaded successfully');
                // You can now execute any functions or code related to the script
            };

            scriptElement.onerror = (error) => {
                // Error occurred while loading the script
                console.error('Error loading script:', error);
            };

            document.body.appendChild(scriptElement);
        }
    }, [gameFile]);

    useEffect(() => {
        // You can use the canvasRef to interact with the canvas element
        const canvas = canvasRef.current;
        if (canvas) {
            // Your canvas-related code here
        }
    }, [canvasRef]);

    return(
        <Box className="flex justify-center">
            {gameData ? (
                <Box className="flex flex-col items-center max-w-screen-2xl">
                    <Box className="flex items-center gap-5">

                        <canvas ref={canvasRef} id="canvas" width="800" height="600"></canvas>
                        <Box className="flex flex-col gap-10 justify-center items-center">
                            <Typography variant="h3">{gameData.name}</Typography>
                            <Typography>{gameData.description}</Typography>
                            <Rating name="read-only" value={gameData.average_rate} readOnly size="large" />
                            <Typography>{date}</Typography>
                            <Typography>Auteur : {gameData.company_id}</Typography>
                        </Box>
                    </Box>
                </Box>
            ) : (
                <Typography>Loading...</Typography>
            )}
        </Box>
    )
}

export default Game;