import axios from '../../../config/axios';
import React, { useState, useEffect, useContext } from 'react';
import './Blog.css'
import { useParams } from 'react-router-dom';
import localStorageService from '../../../services/LocalStorageService'
import PostSection from '../../../components/PostSection/PostSection';
import CommentSection from '../../../components/CommentSection/CommentSection';
import CreateComment from '../../../components/CreateComment/CreateComment';
import { Box } from '@chakra-ui/react';
import UserContext from '../../../context/userContext';

function Blog() {
    const { postId } = useParams();
    const [postData, setPostData] = useState([]);
    const [authorName, setAuthorName] = useState(null);
    const [authorProfile, setAuthorProfile] = useState(null);
    const [isLike, setIsLike] = useState(null)
    const myProfile = localStorageService.getUserProfile()
    const { role } = useContext(UserContext)

    const fetchPostData = () => {
        axios.get(`/posts/${postId}`)
            .then(res => {
                setPostData(res.data)
                console.log(res.data.likes.includes(myProfile.id))
                setIsLike(res.data.likes.includes(myProfile.id))
                axios.get(`/users/${res.data.author}`)
                    .then(res => {
                        setAuthorName(res.data.authorName)
                        setAuthorProfile(res.data.authorProfile)
                    }).catch(err => console.log(err))
            }).catch(err => {
                console.log(err)
            })
    }
    useEffect(() => {
        fetchPostData()
    }, [])


    return (
        <div className="blog-container">
            <PostSection postId={postId} postData={postData} authorName={authorName} authorProfile={authorProfile} fetchPostData={fetchPostData} isLike={isLike} />
            <Box d="flex" alignItems="baseline" style={{ width: '60%', margin: '20px auto' }} >
                <div
                    style={{ color: "#fbdb48", display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}
                >
                    {/* <MinusIcon fontSize="4em" style={{ border: '1px solid white', width: '50px', height: '20px', padding: '0' }} /> */}
                    <div style={{ display: 'flex', justifyContent: 'center', flexGrow: '2', width: '100px', height: '5px', borderTop: '2px solid rgba(233, 229, 246, 0.5)' }}>

                    </div>
                    <div style={{ display: 'flex', padding: ' 0 5px', justifyContent: 'center', color: 'rgba(233, 229, 246, 0.5)' }} >
                        &nbsp;Comments
                    </div>
                    <div style={{ display: 'flex', flexGrow: '2', width: '100px', height: '5px', borderTop: '2px solid rgba(233, 229, 246, 0.5)' }}>

                    </div>
                </div>
            </Box>
            {postData?.comments?.map((item, idx) => {
                return (
                    <CommentSection key={idx} idx={idx} item={item} content={item.content} postId={postId} postData={postData} authorName={authorName} authorProfile={authorProfile} fetchPostData={fetchPostData} isLike={isLike} />
                )
            })}

            { role === "USER" && <CreateComment postId={postId} postData={postData} authorName={authorName} authorProfile={authorProfile} fetchPostData={fetchPostData} isLike={isLike} />}

        </div>
    )
}

export default Blog
