import React, { useState } from 'react'
import './CreateComment.css'
import axios from '../../config/axios'

function CreateComment({ idx, postId, postData, content, item, fetchPostData, isLike }) {
    const [inputValue, setInputValue] = useState("")
    const onReply = () => {
        axios.post(`/comment/${postId}`, { content: inputValue })
            .then(res => {
                setInputValue("")
                fetchPostData()
            }).catch(err => console.log(err))
    }

    return (
        <div className="createcomment-container">
            <textarea rows="4" value={inputValue} onChange={(e) => setInputValue(e.target.value)} style={{ color: 'white', backgroundColor: '#153e75', outline: 'none', border: 'none', width: '100%' }} />
            <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginTop: '10px' }}>
                <button onClick={onReply} style={{ outline: 'none', border: 'none', backgroundColor: '#1a5d2e', color: 'white', borderRadius: 'none', padding: '5px 10px' }}>Reply</button>
            </div>
        </div>
    )
}
// "#1a365d",
//     800: "#153e75"

export default CreateComment
