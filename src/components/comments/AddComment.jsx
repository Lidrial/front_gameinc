import axios from "axios";
import {Button, Card, CardActions, CardContent, Rating, TextField, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";

const AddComment = ({ onSaveComment }) => {
    const access_token = useSelector((state) => state.access_token);
    const [commentData, setCommentData] = useState({
        content: "",
        rate: 0,
        user_id: 0,
        game_id: 0,
    });


    const user_id = useSelector((state) => state.user_id);
    const game_id = useParams().id;

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value)
        setCommentData((prevCommentData) => ({
            ...prevCommentData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(commentData)
        try {
            axios.post(`http://127.0.0.1:8000/api/comments`, {
                'content': commentData.content,
                'rate': commentData.rate,
                'user_id': commentData.user_id,
                'game_id': commentData.game_id,
            }, {
                headers: {
                    Authorization: `Bearer ${access_token}`,

                }
            }).then((res) => {
                console.log(res.data);
                onSaveComment()

            })
        }catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        console.log('toto')
        setCommentData((prevCommentData) => ({
            ...prevCommentData,
            ['user_id']: user_id,
        }));
        setCommentData((prevCommentData) => ({
            ...prevCommentData,
            ['game_id']: game_id,
        }));
    }, [user_id]);

    return (
        <Card className="m-10">
            <button onClick={() => console.log(game_id)}>test</button>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {commentData.user_id}
                </Typography>
                <TextField name="content" onChange={handleChange} className="w-full" id="outlined-basic" label="Ajouter un commentaire" variant="outlined" />
                <Rating name="rate" className="mt-5" onChange={handleChange} />
            </CardContent>
            <CardActions>
                <Button size="small" onClick={handleSubmit}>Envoyer</Button>
                <button onClick={() => console.log(commentData)}>test</button>
            </CardActions>
        </Card>

    )
}

export default AddComment