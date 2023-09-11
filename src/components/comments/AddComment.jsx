import axios from "axios";
import {Box, Rating} from "@mui/material";
import { Button, Card, TextField, CardContent, TextArea   } from 'ui-neumorphism'
import React, {useEffect, useRef, useState} from "react";
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

    // const {textAreaValue, setTextAreaValue} = useState(null);
    // const {ratingInputValue, setRatingInputValue} = useState(null);

    const user_id = useSelector((state) => state.user_id);
    const game_id = useParams().id;

    const handleChange = (e) => {
        // Check if e.target and e.target.value are defined
        if (e.target && e.target.value !== undefined) {
            const { name, value } = e.target;
            console.log(name, value);

            setCommentData((prevCommentData) => ({
                ...prevCommentData,
                [name]: value,
            }));
        }else{
            const { name, value } = e.event.target;
            console.log(name, value);
            setCommentData((prevCommentData) => ({
                ...prevCommentData,
                [name]: value,
            }));
        }

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

                // if (textAreaValue.current) {
                //     setTextAreaValue(''); // Clear the TextArea
                // }
                //
                // if (ratingInputValue.current) {
                //     setRatingInputValue(0); // Clear the rating input
                // }

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
        <Card  className="m-10">
            {/*<button onClick={() => console.log(game_id)}>test</button>*/}
            <CardContent
                className="flex flex-col justify-center"
            >
                {/*<Typography gutterBottom variant="h5" component="div">*/}
                {/*    {commentData.user_id}*/}
                {/*</Typography>*/}
                <TextArea autoExpand name="content" inputStyles={{width: "100%"}} height={94} style={{display:"block", margin:"0", paddingTop:"16px"}} onChange={handleChange} id="outlined-basic" label="Ajouter un commentaire" />
                <Box
                    className="flex justify-between items-center"
                >
                    <Rating name="rate" className="" onChange={handleChange} />
                    <Button color='var(--primary)' style={{   lineHeight:"1",}} className="my-5" onClick={handleSubmit}>Envoyer</Button>
                    {/*<button onClick={() => console.log(commentData)}>test</button>*/}

                </Box>
            </CardContent>
        </Card>

    )
}

export default AddComment