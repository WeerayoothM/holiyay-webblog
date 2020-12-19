import axios from '../../../config/axios';
import React from 'react';
import { useState, useEffect } from 'react';
import './Blog.css'
import { useParams } from 'react-router-dom';

const mockData = [{
    type: "image",
    content: "https://previews.123rf.com/images/dzmitrock/dzmitrock1807/dzmitrock180700007/104573604-tourists-with-hiking-backpacks-on-beautiful-mountain-landscape-background-climbers-hike-to-mounts-gr.jpg"
}, {
    type: "text",
    content: "ieie"
}
]

function Blog() {
    const { postId } = useParams();
    const [title, setTitle] = useState("");
    const [contentList, setContentList] = useState([]);
    useEffect(() => {
        axios.get(`/posts/${postId}`)
            .then(res => {
                console.log(res.data.content)
                setContentList(res.data.content)
                setTitle(res.data.title)
            }).catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <div className="blog-container">
            <div className="post-container">
                <h style={{ color: '#e7ac3d', fontSize: '3rem', margin: '0 auto', lineHeight: '3.5rem' }} >{title}</h>
                {contentList.map((item, idx) => {
                    switch (item.contentType) {
                        case "image":
                            return (
                                <div style={{ width: '100%', display: 'flex', justifyContent: 'center', margin: '20px 0' }} >
                                    <img src={item.content} style={{ width: '100%' }} />
                                </div>
                            )
                        case "text":
                            return (
                                <div style={{ color: 'white', width: '100%', margin: '20px 0', whiteSpace: 'pre-line', wordBreak: 'break-word' }} >{item.content}</div>
                            )
                        default:
                            return null
                    }
                })}
            </div>

        </div>
    )
}

export default Blog
