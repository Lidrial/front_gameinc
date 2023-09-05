import React from "react";
import { Link } from "react-router-dom";
import {Button, Card, CardActions, CardContent, CardMedia, Rating, Typography} from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';



const GameCard = ({ game }) => {
  return (
    <Card
        sx={{ maxWidth: 345 }}
        className="flex flex-col justify-between"
    >
        <CardMedia
            sx={{ height: 140 }}
            image={game.imageUrl}
            title="green iguana"
            className={"bg-amber-700"}
        />
        <CardContent className="flex flex-col gap-4">
            <Typography gutterBottom variant="h5" component="div">
                {game.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {game.description}
            </Typography>
            <Rating className="justify-center" name="read-only" value={game.average_rate} readOnly size="large" />
        </CardContent>
        <CardActions>
            <Button size="small">
                <FavoriteBorderIcon />
            </Button>
            <Button href={`/jeux/${game.id}`} size="small">Play</Button>
        </CardActions>
    </Card>
  );
};

export default GameCard;
