import React from 'react'
import { useState } from 'react';
import axios from '../../config/axios';
import { DeleteIcon } from "@chakra-ui/icons"

function CreateBlogItem({ item, idx, setFormInput }) {
    const [loading, setLoading] = useState(false);


    const handleInputChange = (e) => {
        setFormInput(prev => {
            const newContent = [...prev];
            newContent[idx].content = e.target.value;
            return newContent
        })
    }

    const handleFileInputChange = (e) => {
        e.preventDefault();
        setLoading(true)
        if (!e.target.value) return;

        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);

        reader.onloadend = () => {
            uploadImage(reader.result);
        };
        reader.onerror = () => {
            console.error('AHHHHHHHH!!');
        };

    };

    const uploadImage = async (base64EncodedImage) => {
        try {
            const res = await axios.post('/upload', { data: base64EncodedImage })
            setFormInput(prev => {
                const newContent = [...prev];
                newContent[idx].content = res.data.url;
                return newContent
            })
            console.log(res.data.url)
            setLoading(false)

        } catch (err) {
            console.error(err);

        }
    };
    const deleteInput=() => {
        setFormInput(prev => {
            let newContent = [...prev];
            newContent.splice(idx,1);
            return newContent
        })
    }

    return (
        <div>
            ieie
            {(() => {
                switch (item.contentType) {
                    case "image":
                        return (
                            <div style={{ display:'flex',justifyContent:'space-between',alignItems:'center' }}>
                                <div onClick={deleteInput} style={{width:'45px',marginRight:'10px', cursor:'pointer',color:'white', borderRight: '1px solid rgba(256,256,256,0.5)', paddingRight: '10px', height: '50px', fontSize: '1.1rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><DeleteIcon/></div>
                                <div style={{flexGrow:'1', display:'flex',flexDirection:'column', justifyContent:'space-between',alignItems:'flex-start' }}  >
                                    <input type="file" onChange={handleFileInputChange} style={{ color: 'white', border: 'none', outline: 'none' }} />
                                    { item.content && <img src={item?.content} alt="title-image" />}
                                    {loading && ""}
                                </div>
                            </div>
                        )
                    case "text":
                        return (
                            <>
                            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center' }}>
                                <div onClick={deleteInput} style={{width:'45px',marginRight:'10px', cursor:'pointer', color:'white',borderRight: '1px solid rgba(256,256,256,0.5)', paddingRight: '10px', height: '50px', fontSize: '1.1rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><DeleteIcon/></div>
                                <textarea value={item?.content} onChange={handleInputChange} style={{ padding: '0 10px', width: '100%', outline: 'none' }} />
                            </div>
                            </>
                        )
                    default:
                        return null
                }
            })()}
        </div>
    )
}

export default CreateBlogItem
