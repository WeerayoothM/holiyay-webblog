import React, { useState, useEffect } from 'react'
import './commentSection.css'
import axios from '../../config/axios';
import { Button, Col, Dropdown, Input, Menu, Modal, notification, Row } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons'
import LocalStorageService from '../../services/LocalStorageService';



function CommentSection({ idx, postId, postData, content, item, fetchPostData, isLike }) {
    const [authorName, setAuthorName] = useState(null);
    const [authorProfile, setAuthorProfile] = useState(null);
    const [visibleModal, setVisibleModal] = useState(false)
    const [commentInput, setCommentInput] = useState('')
    let manageButton = null;
    const showModal = (e) => {
        e.preventDefault()
        setCommentInput(content)
        setVisibleModal(true)
    };

    const handleOk = e => {
        console.log(e);
        axios.patch(`comment/${postId}/${item._id}`, { content: commentInput })
            .then(res => {
                fetchPostData()
            })
        setVisibleModal(false)
    };

    const handleCancel = e => {
        console.log(e);
        setVisibleModal(false)
    };

    const deleteComment = (e) => {
        e.preventDefault()
        axios.delete(`comment/${postId}/${item._id}`)
            .then(res => {
                notification.success({
                    description: 'delete success'
                })
                fetchPostData()
            }).catch(err => {
                notification.error({
                    description: 'delete fail'
                })
            })
    }

    const fetchCommentData = () => {
        axios.get(`/users/${item.author}`)
            .then(res => {
                console.log(res.data)
                setAuthorName(res.data.authorName)
                setAuthorProfile(res.data.authorProfile)
            }).catch(err => console.log(err))
    }

    useEffect(() => {
        fetchCommentData()
    }, [])

    const menu = (
        <Menu>
            <Menu.Item key="0">
                {/* <Link onClick={editComment} style={{ color: "#1D2129" }}>
                    แก้ไขคอมเมนต์
                </Link> */}
                <>
                    <Button onClick={showModal} style={{ color: "#1D2129", border: 'none', backgroundColor: 'transparent' }}>
                        แก้ไขคอมเมนต์
                    </Button>
                    <Modal
                        title="Edit Comment"
                        visible={visibleModal}
                        onOk={handleOk}
                        onCancel={handleCancel}
                    >
                        {/* onKeyPress={(e) => e.key === "Enter" ? handleOk() : null} */}
                        <Input.TextArea autoSize={{ minRows: 5 }} value={commentInput} onChange={(e) => setCommentInput(e.target.value)} />
                    </Modal>
                </>
            </Menu.Item>
            <Menu.Item key="1">
                <Button onClick={deleteComment} style={{ color: "#1D2129", border: 'none', backgroundColor: 'transparent' }}>
                    ลบคอมเมนต์
                </Button>
            </Menu.Item>
        </Menu>
    );

    if (LocalStorageService.getUserProfile().id === item.author) {
        manageButton = (
            <Col span={2} style={{ padding: '15px 15px 15px 5px' }}>
                <Row justify="end">
                    {/* <Link to="#" style={{ color: "#606770" }}> */}
                    <Dropdown
                        trigger={["click"]}
                        overlay={menu}
                        placement="bottomRight"
                    >
                        <EllipsisOutlined style={{ color: 'lightgray', fontSize: '1.2rem' }} />
                    </Dropdown>
                    {/* </Link> */}
                </Row>
            </Col>
        );
    }
    return (
        <div className="comment-container">
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <span style={{ color: 'gray', }} >comment #{idx + 1}</span>
                {manageButton}
            </div>

            <div style={{ marginBottom: '20px' }}>
                <span style={{ color: 'white', margin: '0 auto', fontSize: '1.3rem' }} >{content}</span>
            </div>
            <div style={{ width: '100%', padding: "5px 0", display: 'flex', justifyContent: 'flex-start', alignItems: 'center', borderTop: '1px solid rgba(256,256,256,0.3)' }} >
                <img src={authorProfile} style={{ width: '35px', height: '35px', borderRadius: '50%', objectFit: 'cover' }} alt="content-image" />
                <div style={{ marginLeft: '10px', display: 'flex', flexDirection: 'column', }}>
                    <span style={{ color: 'white', fontWeight: '500', fontSize: '0.8rem' }}>{authorName}</span>
                    <span style={{ color: 'rgba(256,256,256,0.5)', fontSize: '0.7rem' }}>{new Date(postData.createdAt).toDateString()}</span>
                </div>
            </div>
        </div >
    )
}

export default CommentSection
