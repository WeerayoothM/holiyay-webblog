import axios from '../../../config/axios';
import React from 'react';
import { useState } from 'react';
import CreateBlogItem from '../../../components/CreateBlogItem./CreateBlogItem';
import './CreateBlog.css'


const mockData = [{
    contentType: "image",
    content: "https://previews.123rf.com/images/dzmitrock/dzmitrock1807/dzmitrock180700007/104573604-tourists-with-hiking-backpacks-on-beautiful-mountain-landscape-background-climbers-hike-to-mounts-gr.jpg"
}, {
    contentType: "text",
    content: ""
}
]
function CreateBlog() {
    const [formInput, setFormInput] = useState([]);
    const [titleInput, setTitleInput] = useState("");
    const [category, setCategory] = useState("adventure")

    const addImage = (e) => {
        setFormInput([...formInput, { contentType: e.target.value, content: "" }])
    }
    const addText = (e) => {
        setFormInput([...formInput, { contentType: e.target.value, content: "" }])
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(titleInput,
            formInput,
        )
        axios.post("/posts", { title: titleInput, content: formInput, category: category })
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className="createblog-container">
            <h1 style={{ color: 'white', fontSize: '3rem', margin: '0 auto' }} >Create a new blog</h1>
            <div style={{ color: 'white' }} >
                <input className="title-input" value={titleInput} onChange={(e) => setTitleInput(e.target.value)} style={{ color: '#000', padding: '0 10px' }} placeholder="Title..." />
            </div>
            {formInput?.map((item, idx) => {
                return (
                    <CreateBlogItem key={idx} item={item} idx={idx} setFormInput={setFormInput} />
                )
            })}
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <button value="image" onClick={addImage} style={{ color: 'white', backgroundColor: '#ff3b80', padding: '10px', margin: '10px' }} >Add image</button>
                <button value="text" onClick={addText} style={{ color: 'white', backgroundColor: '#ff3b80', padding: '10px', margin: '10px' }}>Add text</button>
            </div>
            <div>
                <button type="submit" onClick={onSubmit} style={{ color: 'white', }} >Create</button>
            </div>
        </div>
    )
}

export default CreateBlog
