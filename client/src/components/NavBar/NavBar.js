import React from 'react'
import { Flex, Spacer, Box, InputGroup, Input, InputRightAddon } from "@chakra-ui/react"
import { Link, } from 'react-router-dom'
import UserContext from '../../context/userContext'
import { useContext } from 'react';
import { SearchIcon } from '@chakra-ui/icons';

function NavBar() {
    const { role } = useContext(UserContext);
    return (
        <div style={{ position: 'absolute', zIndex: '2', width: '100%' }}>
            <Flex >
                <Box p="4" m="4" mt="0" >
                    <span style={{ color: '#fff', fontSize: '1.4rem', fontWeight: 'bold' }}><Link to="/">TravelBlog</Link></span>
                </Box>
                <Box mt="5">
                    <InputGroup >
                        <Input style={{ color: "hsl(0,0%,100%)", height: '35px' }} type="search" borderLeftRadius="0" placeholder="Search..." />
                        <InputRightAddon style={{ cursur: 'pointer', height: '35px' }} ><SearchIcon /></InputRightAddon>
                    </InputGroup>
                </Box>
                <Spacer />
                <Box p="4" mt="2" color="hsl(0,0%,90%)">
                    <Link to='/Feed'>Blog</Link>
                </Box>
                {role === "GUEST" ?
                    <Box p="4" mr="4" mt="2" color="hsl(0,0%,90%)">
                        <Link to='/login'>Login</Link>
                    </Box>
                    :
                    <Box p="4" mr="4" mt="2" color="hsl(0,0%,90%)">
                        <Link to='/profile'>Account</Link>
                    </Box>
                }
            </Flex>
        </div>
    )
}

export default NavBar
