import React from 'react';
import './Home.css'
import { Box, Container } from "@chakra-ui/react"
import { ArrowDownIcon } from '@chakra-ui/icons'

function Home() {
    return (
        <div className="home-container"  >
            <Container data-aos-delay="80" data-aos='fade-up' pt="82px" maxW="100%"  >
                <Box width="100%" height="auto" overflow="hidden" style={{ display: 'flex', justifyContent: 'center', margin: '0' }}>
                    <Box p="6">
                        <Box d="flex" alignItems="baseline">
                            <Box
                                color="#fbdb48"
                                fontWeight="semibold"
                                letterSpacing="wide"
                                fontSize="sm"
                                textTransform="uppercase"
                            >
                                {/* <MinusIcon fontSize="4em" style={{ border: '1px solid white', width: '50px', height: '20px', padding: '0' }} /> */}
                                <div style={{ display: 'inline-block', width: '35px', height: '5px', borderTop: '3px solid #fbdb48' }}>

                                </div>
                                &nbsp;A HIKING GUIDE
                            </Box>
                        </Box>


                        <Box
                            mt="2"
                            mb="2"
                            fontWeight="semibold"
                            as="h1"
                            color="white"
                            lineHeight="tight"
                            isTruncated
                            style={{ fontSize: "6vw" }}
                        >
                            LET'S WANDER <br /> WHERE THE WIFI IS WEAK
                        </Box>

                        <Box color="white" fontSize="lg">
                            scroll down <ArrowDownIcon w={5} h={6} color="white" />
                        </Box>

                    </Box>
                </Box>

            </Container>

            <Container data-aos-delay="80" data-aos='fade-right' pt="82px" maxW="100%" >
                <Box width="100%" height="auto" overflow="hidden" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', margin: '0' }}>
                    <Box p="6">
                        <Box d="flex" alignItems="baseline">
                            <Box
                                color="#fbdb48"
                                fontWeight="semibold"
                                letterSpacing="wide"
                                fontSize="sm"
                                textTransform="uppercase"
                            >
                                {/* <MinusIcon fontSize="4em" style={{ border: '1px solid white', width: '50px', height: '20px', padding: '0' }} /> */}
                                <div style={{ display: 'inline-block', width: '35px', height: '5px', borderTop: '3px solid #fbdb48' }}>

                                </div>
                                &nbsp;A HIKING GUIDE
                            </Box>
                        </Box>


                        <Box
                            mt="2"
                            mb="2"
                            fontWeight="semibold"
                            as="h1"
                            color="white"
                            lineHeight="tight"
                            isTruncated
                            style={{ fontSize: "6vw" }}
                        >
                            LET'S WANDER <br /> WHERE THE WIFI IS WEAK
                        </Box>

                        <Box color="white" fontSize="lg">
                            scroll down <ArrowDownIcon w={5} h={6} color="white" />
                        </Box>

                    </Box>
                </Box>

            </Container>
            <Container data-aos-delay="80" data-aos='fade-right' pt="82px" maxW="100%" >
                <Box width="100%" height="auto" overflow="hidden" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', margin: '0' }}>
                    <Box p="6">
                        <Box d="flex" alignItems="baseline">
                            <Box
                                color="#fbdb48"
                                fontWeight="semibold"
                                letterSpacing="wide"
                                fontSize="sm"
                                textTransform="uppercase"
                            >
                                {/* <MinusIcon fontSize="4em" style={{ border: '1px solid white', width: '50px', height: '20px', padding: '0' }} /> */}
                                <div style={{ display: 'inline-block', width: '35px', height: '5px', borderTop: '3px solid #fbdb48' }}>

                                </div>
                                &nbsp;A HIKING GUIDE
                            </Box>
                        </Box>


                        <Box
                            mt="2"
                            mb="2"
                            fontWeight="semibold"
                            as="h1"
                            color="white"
                            lineHeight="tight"
                            isTruncated
                            style={{ fontSize: "6vw" }}
                        >
                            LET'S WANDER <br /> WHERE THE WIFI IS WEAK
                        </Box>

                        <Box color="white" fontSize="lg">
                            scroll down <ArrowDownIcon w={5} h={6} color="white" />
                        </Box>

                    </Box>
                </Box>

            </Container>
            <Container data-aos-delay="80" data-aos='fade-right' pt="82px" maxW="100%" >
                <Box width="100%" height="auto" overflow="hidden" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', margin: '0' }}>
                    <Box p="6">
                        <Box d="flex" alignItems="baseline">
                            <Box
                                color="#fbdb48"
                                fontWeight="semibold"
                                letterSpacing="wide"
                                fontSize="sm"
                                textTransform="uppercase"
                            >
                                {/* <MinusIcon fontSize="4em" style={{ border: '1px solid white', width: '50px', height: '20px', padding: '0' }} /> */}
                                <div style={{ display: 'inline-block', width: '35px', height: '5px', borderTop: '3px solid #fbdb48' }}>

                                </div>
                                &nbsp;A HIKING GUIDE
                            </Box>
                        </Box>


                        <Box
                            mt="2"
                            mb="2"
                            fontWeight="semibold"
                            as="h1"
                            color="white"
                            lineHeight="tight"
                            isTruncated
                            style={{ fontSize: "6vw" }}
                        >
                            LET'S WANDER <br /> WHERE THE WIFI IS WEAK
                        </Box>

                        <Box color="white" fontSize="lg">
                            scroll down <ArrowDownIcon w={5} h={6} color="white" />
                        </Box>

                    </Box>
                </Box>

            </Container>

        </div>
    )
}

export default Home
