import React, {useEffect, useState} from 'react'
import axios from "axios";
import {useSelector} from "react-redux";
import {Box, Button, Card, Alert, CardActions, CardContent, Rating, Typography} from "@mui/material";
import {useParams} from "react-router-dom";
import AddComment from "../comments/AddComment";

const Comments = () => {
    const gameId = useParams().id;
    const [comments, setComments] = useState([]);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const access_token = useSelector((state) => state.access_token);
    const getComments = () => {
        try{
            axios.get(`http://127.0.0.1:8000/api/game/comments/${gameId}`, {
                headers: {
                    Authorization: `Bearer ${access_token}`,
                }
            }).then((res) => {
                console.log(res.data);

                const formattedComments = res.data.map((comment) => {
                    // Format the date for each comment
                    const date = new Date(comment.created_at);
                    const day = String(date.getDate()).padStart(2, '0');
                    const month = String(date.getMonth() + 1).padStart(2, '0');
                    const year = date.getFullYear();
                    const formattedDate = `${day}/${month}/${year}`;

                    // Add the formatted date back to the comment object
                    return {
                        ...comment,
                        formattedDate: formattedDate,
                    };
                });
                setComments(formattedComments);
            });

        }catch (error) {
            console.log(error);
        }
    }


    const [commentIsSaved, setCommentIsSaved] = useState(false);

    // Callback function to set commentIsSaved to true
    const handleCommentSave = () => {
        setCommentIsSaved(true);
    };

    useEffect(() => {
        getComments();
        setCommentIsSaved(false);
    }, [commentIsSaved]);

    return (
        <Box>
            <AddComment onSaveComment={handleCommentSave} />
            {commentIsSaved && <Alert severity="success">Commentaire publié</Alert>}
            <Box>
                {comments.map((comment) => (
                    <Card key={comment.id} className="m-10">
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {comment.user_id}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {comment.content}
                            </Typography>
                            <Rating className="mt-5" name="read-only" value={comment.rate} readOnly />
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>

                ))}
            </Box>
        </Box>
    )
}

export default Comments