import axios from '../../../config/axios';
import React from 'react';
import { useState } from 'react';
import CreateBlogItem from '../../../components/CreateBlogItem./CreateBlogItem';
import './CreateBlog.css'
import { useHistory } from 'react-router-dom';

function CreateBlog() {
    const [formInput, setFormInput] = useState([]);
    const [titleInput, setTitleInput] = useState("");
    const [category, setCategory] = useState("Adventure");
    const history = useHistory();

    const addImage = (e) => {
        setFormInput([...formInput, { contentType: e.target.value, content: "" }])
    }
    const addText = (e) => {
        setFormInput([...formInput, { contentType: e.target.value, content: "" }])
    }

    const handleSelectCategory = (e) => {
        setCategory(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(titleInput,
            formInput,
        )
        axios.post("/posts", { title: titleInput, content: formInput, category: category })
            .then(res => {
                history.push(`/blog/${res.data.newpost._id}`)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className="createblog-container">
            <h1 style={{ color: 'white', fontSize: '3rem', margin: '0 auto', borderBottom: '1px solid rgba(256,256,256,0.5)', marginBottom: '20px' }} >Create a new Post</h1>
            <div style={{ color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                <div style={{ width: '45px', borderRight: '1px solid rgba(256,256,256,0.5)', paddingRight: '10px', height: '50px', fontSize: '1.1rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Title</div>
                <input type="text" className="title-input" value={titleInput} onChange={(e) => setTitleInput(e.target.value)} placeholder="Title..." />
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
            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                <div style={{ width: '50%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', borderTop: '1px solid rgba(256,256,256,0.5)', marginTop: '20px' }}>

                    <button type="submit" onClick={onSubmit} style={{ color: 'white', marginTop: '20px' }} >Create</button>
                </div>
            </div>
        </div>
    )
}

export default CreateBlog
