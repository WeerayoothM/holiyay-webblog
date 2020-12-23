import React from 'react'
import { Flex, Spacer, Box } from "@chakra-ui/react"
import { Link, useHistory } from 'react-router-dom'
import UserContext from '../../context/userContext'
import { useContext } from 'react';
import localStorageService from '../../services/LocalStorageService'
import { notification } from 'antd';

function NavBar() {
    const { role, setRole } = useContext(UserContext);
    const history = useHistory();
    const handleLogout = () => {
        notification.success({
            description: 'Logout Success'
        })
        localStorageService.removeToken();
        setRole("GUEST");
        history.push('/');
    }
    return (
        <div style={{ position: 'absolute', zIndex: '2', width: '100%' }}>
            <Flex >
                <Box p="4" m="4" mt="0" >
                    <span style={{ color: '#fff', fontSize: '1.8rem', fontWeight: 'bold' }}><Link to="/" >TravelBlog</Link></span>
                </Box>
                {/* <Box mt="5">
                    <InputGroup >
                        <Input style={{ color: "hsl(0,0%,100%)", height: '35px' }} type="search" borderLeftRadius="0" placeholder="Search..." />
                        <InputRightAddon style={{ cursur: 'pointer', height: '35px' }} ><SearchIcon /></InputRightAddon>
                    </InputGroup>
                </Box> */}
                <Spacer />
                <Box p="4" mt="2" color="hsl(0,0%,90%)">
                    <Link to='/feed' style={{ fontSize: '1.2rem' }} >Blog</Link>
                </Box>
                {role === "GUEST" ?
                    <Box p="4" mr="4" mt="2" color="hsl(0,0%,90%)">
                        <Link to='/login' style={{ fontSize: '1.2rem' }} >Login</Link>
                    </Box>
                    :
                    <Box p="4" mr="4" mt="2" color="hsl(0,0%,90%)">
                        <Link onClick={handleLogout} style={{ fontSize: '1.2rem' }} >Logout</Link>
                    </Box>
                }
            </Flex>
        </div>
    )
}

export default NavBar
