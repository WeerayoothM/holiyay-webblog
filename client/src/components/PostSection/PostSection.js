import axios from '../../config/axios';
import React from 'react';
import './PostSection.css'
import { faComments, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function PostSection({ postId, postData, authorName, authorProfile, fetchPostData, isLike }) {

    const handleClickLike = () => {
        axios.patch(`/posts/like/${postId}`)
            .then(res => {
                console.log(res)
                // setIsLike(prev => !prev)
                fetchPostData()

            }).catch(err => console.log(err))
    }
    return (
        <div className="post-container">
            <div style={{ margin: '0 auto', lineHeight: '3.5rem', }}>
                <h1 style={{ color: '#e7ac3d', fontSize: '3rem', margin: '0 auto', lineHeight: '3.5rem', }} >{postData.title}</h1>
            </div>
            <div style={{ width: '50%', padding: "15px 0", display: 'flex', justifyContent: 'flex-start', alignItems: 'center', borderBottom: '2px solid rgba(256,256,256,0.5)' }} >
                <img src={authorProfile} style={{ width: '40px', height: '40px', borderRadius: '50%' }} alt="content-image" />
                <div style={{ marginLeft: '10px', display: 'flex', flexDirection: 'column', }}>

                    <span style={{ color: 'white', fontWeight: '500' }}>{authorName}</span>
                    <span style={{ color: 'rgba(256,256,256,0.5)', fontSize: '0.8rem' }}>{new Date(postData.createdAt).toDateString()}</span>
                </div>
            </div>
            {postData?.content?.map((item, idx) => {
                switch (item.contentType) {
                    case "image":
                        return (
                            <div key={idx} style={{ width: '100%', display: 'flex', justifyContent: 'center', margin: '20px 0' }} >
                                <img src={item.content} style={{ width: '100%' }} />
                            </div>
                        )
                    case "text":
                        return (
                            <div key={idx} style={{ fontSize: '1.1rem', color: 'white', width: '100%', margin: '20px 0', whiteSpace: 'pre-line', wordBreak: 'break-word' }} >{item.content}</div>
                        )
                    default:
                        return null
                }
            })}
            <div style={{ width: '50%', padding: "15px 0", display: 'flex', justifyContent: 'flex-start', alignItems: 'center', borderTop: '2px solid rgba(256,256,256,0.5)' }} >
                <div style={{ fontSize: '1.1rem', marginRight: '10px', color: '#fff' }}><FontAwesomeIcon onClick={handleClickLike} icon={faThumbsUp} style={{ fontSize: '1.1rem', color: isLike ? '#00a6ff' : '#fff', cursor: 'pointer' }} />&nbsp;{postData?.likes?.length}</div>
                <div style={{ fontSize: '1.1rem', color: '#fff' }}><FontAwesomeIcon icon={faComments} style={{ fontSize: '1.1rem', color: '#e7ac3d' }} />&nbsp;{postData?.comments?.length}</div>
            </div>
        </div>
    )
}

export default PostSection
