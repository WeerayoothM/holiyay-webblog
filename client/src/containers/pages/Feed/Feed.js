import React from 'react';
import './Feed.css';
import { Grid, GridItem, Box, Spacer, Flex, } from "@chakra-ui/react"
import { Link } from 'react-router-dom'
import { useState } from 'react';
import axios from '../../../config/axios';
import { useEffect } from 'react';
import PostItem from '../../../components/PostItem/PostItem';
import { ChevronDownIcon, PlusSquareIcon } from '@chakra-ui/icons';


function Feed() {
    const [postList, setPostList] = useState([]);
    const [isShowCategory, setIsShowCategory] = useState(false);
    const [selectCategory, setSelectCategory] = useState("All")

    useEffect(() => {
        axios.get('/posts')
            .then(res => {
                console.log(res.data)
                if (selectCategory === 'All') setPostList(res.data)
                else setPostList(res.data.filter(item => item.category === selectCategory))
            })
            .catch(err => {
                console.log(err)
            })
    }, [selectCategory])
    const toggleCategories = () => {
        setIsShowCategory(prev => !prev)
    }
    const handleSelectCategory = (e) => {
        setSelectCategory(e.target.value)
        setIsShowCategory(prev => !prev)
    }
    return (
        <div className="feed-container">

            <Flex w="1000px" style={{ color: 'hsl(0,0%,80%)', marginBottom: '10px' }}>
                <Box h="10" p="4" bg="#153e75" style={{ ...styles.category }} onClick={toggleCategories} >
                    <span>Categories</span>
                    <ChevronDownIcon />
                </Box>
                <Spacer />
                <Box h="10" p="4" bg="#153e75" style={{ ...styles.category }}  >
                    <Link to="/createpost"><PlusSquareIcon w={6} h={6} />&nbsp;Create Post</Link>
                </Box>
            </Flex>
            {/* "#153e75",
    700: "#2a69ac", */}
            {isShowCategory && <Grid templateColumns="repeat(7, 1fr)" w="1000px" style={{ color: 'hsl(0,0%,80%)', marginBottom: '10px' }}>
                <Box w="100%" h="10" bg="#2a69ac" style={styles.categoryItem} ><button style={styles.categoryButton} value='All' onClick={handleSelectCategory} >All</button></Box>
                <Box w="100%" h="10" bg="#2a69ac" style={styles.categoryItem} ><button style={styles.categoryButton} value='Adventure' onClick={handleSelectCategory}>Adventure</button></Box>
                <Box w="100%" h="10" bg="#2a69ac" style={styles.categoryItem} ><button style={styles.categoryButton} value='Ethnic' onClick={handleSelectCategory}>Ethnic</button></Box>
                <Box w="100%" h="10" bg="#2a69ac" style={styles.categoryItem} ><button style={styles.categoryButton} value='Health' onClick={handleSelectCategory}>Health</button></Box>
                <Box w="100%" h="10" bg="#2a69ac" style={styles.categoryItem} ><button style={styles.categoryButton} value='Meditation' onClick={handleSelectCategory}>Meditation</button></Box>
                <Box w="100%" h="10" bg="#2a69ac" style={styles.categoryItem} ><button style={styles.categoryButton} value='Historical' onClick={handleSelectCategory}>Historical</button></Box>
                <Box w="100%" h="10" bg="#2a69ac" style={styles.categoryItem} ><button style={styles.categoryButton} value='Cultural' onClick={handleSelectCategory}>Cultural</button></Box>
                <Box w="100%" h="10" bg="#2a69ac" style={styles.categoryItem} ><button style={styles.categoryButton} value='Ecotourism' onClick={handleSelectCategory}>Ecotourism</button></Box>

            </Grid>}
            <Grid
                // h="400px"
                w="1000px"
                // templateRows={`repeat(${rowNum}, 1fr)`}
                style={{ color: 'hsl(0,0%,80%)', border: 'solid 1px rgba(233, 229, 246, 0.5)', borderRadius: '5px 5px 0 0' }}
            >
                <GridItem rowSpan={1} colSpan={4} bg="#163444" style={{ borderRadius: '5px 5px 0 0', diaplay: 'flex', alignItems: 'center', padding: '10px', color: '#e7ac3d', fontWeight: '500' }} >{selectCategory}</GridItem>
                {postList.map(item => {
                    return (
                        <PostItem postId={item._id} author={item.author} title={item.title} content={item.content} likes={item.likes} comments={item.comments} />
                    )
                })}

            </Grid >
        </div >
    )
}

const styles = {
    category: { color: 'hsl(0,0%,80%)', border: 'solid 1px rgba(233, 229, 246, 0.5)', display: 'flex', justifyContent: 'space-around', alignItems: 'center', cursor: 'pointer' },
    categoryItem: { color: 'hsl(0,0%,80%)', border: 'solid 1px rgba(233, 229, 246, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' },
    categoryButton: { outline: 'none', border: 'none', width: '100%', height: '100%' }
}

export default Feed
