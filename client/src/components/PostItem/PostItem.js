import React, { useState } from 'react'
import { Flex, Box, Square, GridItem, Text, Center } from "@chakra-ui/react"
import axios from '../../config/axios';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { faComments, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function PostItem({ postId, author, title, content, likes, comments }) {
    const [imageTitle, setImageTitle] = useState((() => {
        const index = content.findIndex(item => item.contentType === "image")
        return index === -1 ? null : content[index].content
    })())
    const history = useHistory()
        ; const [authorName, setAuthorName] = useState(null);
    useEffect(() => {
        axios.get(`/users/${author}`)
            .then(res => {
                console.log(res.data)
                setAuthorName(res.data.authorName)
            })
            .catch(err => console.log(err))
    }, [])
    const selectPost = () => {
        history.push(`/blog/${postId}`)
    }
    return (
        <>
            <GridItem rowSpan={2} colSpan={2} bg="#234b61" style={{ border: 'solid 1px rgba(233, 229, 246, 0.08)', width: '100%' }} >
                <Flex style={{ height: '100%' }}>
                    {imageTitle &&
                        <Square w="100px" p="5px">
                            <img src={imageTitle} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                        </Square>}
                    <Box flex="1" p='8px' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <div style={{ fontSize: '1.2rem', cursor: 'pointer' }} onClick={selectPost} >{title}</div>
                        <div style={{ fontSize: '0.8rem', display: 'flex', justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', flexGrow: '1' }}>Publish by &nbsp;<span style={{ color: '#00a6ff' }}>{authorName} </span></div>
                            <div style={{ marginRight: '10px' }}><FontAwesomeIcon icon={faThumbsUp} />&nbsp;{likes.length}</div>
                            <div><FontAwesomeIcon icon={faComments} />&nbsp;{comments.length}</div>
                        </div>
                    </Box>
                </Flex>
            </GridItem>

        </>
    )
}

export default PostItem
