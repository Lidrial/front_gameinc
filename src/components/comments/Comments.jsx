import React, {useEffect, useState} from 'react'
import axios from "axios";
import {useSelector} from "react-redux";
import {Box, Alert, CardActions, CardContent, Rating, Typography} from "@mui/material";
import { Button, Card, Divider } from 'ui-neumorphism'
import {useParams} from "react-router-dom";
import AddComment from "../comments/AddComment";
import 'ui-neumorphism/dist/index.css'

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
        <Card
            style={{ borderRadius: '20px'}}
            className="p-5 m-5 max-w-3xl mx-auto"
        >
            <AddComment onSaveComment={handleCommentSave} />
            {commentIsSaved && <Alert severity="success">Commentaire publié</Alert>}
            <Box>
                {comments.map((comment) => (
                    <>
                        {/*<div*/}
                        {/*    style={{ borderRadius: '2px', background: '#e0e0e0', boxShadow:'2px 2px 2px #bebebe, -2px -2px 2px #ffffff' }}*/}
                        {/*    className={"w-auto h-1 mx-10 mt-5 mb-5"}*/}
                        {/*>*/}

                        {/*</div>*/}
                        <Divider dense elevated />
                        <Card
                            flat
                            key={comment.id} className="py-2 px-5"
                        >
                            <CardContent>
                                <Box className={"flex justify-between"}>
                                    <Typography className="capitalize " gutterBottom variant="h5" component="div">
                                        {comment.user.pseudo}
                                    </Typography>
                                    <Typography gutterBottom variant="span" component="div">
                                        {comment.formattedDate}
                                    </Typography>
                                </Box>

                                <Typography variant="body2" color="text.secondary">
                                    {comment.content}
                                </Typography>
                                <Rating className="mt-5" name="read-only" value={comment.rate} readOnly />
                            </CardContent>
                        </Card>
                    </>

                ))}
            </Box>
        </Card>
    )
}

export default Comments