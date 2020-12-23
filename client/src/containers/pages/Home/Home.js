import React from 'react';
import './Home.css'
import { Box, Container } from "@chakra-ui/react"
import { ArrowDownIcon } from '@chakra-ui/icons'
import content1 from '../../../Images/Content1.png'
import content2 from '../../../Images/Content2.png'
import content3 from '../../../Images/Content3.png'

function Home() {
    return (
        <div className="home-container"  >
            <Container data-aos-delay="200" data-aos-offset="200" data-aos='fade-up' pt="82px" maxW="100%" h="100vh"   >
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

            <Container pt="82px" maxW="100%" style={{ padding: '60px' }} >
                <img data-aos-delay="200" data-aos-offset="200" data-aos='fade-up' src={content1} alt="content1" style={{ width: '100%' }} />

            </Container>
            <Container pt="82px" maxW="100%" style={{ padding: '60px' }} >
                <img data-aos-delay="200" data-aos-offset="200" data-aos='fade-up' src={content2} alt="content2" />

            </Container>
            <Container pt="82px" maxW="100%" style={{ padding: '60px', marginBottom: '40px' }} >
                <img data-aos-delay="200" data-aos-offset="200" data-aos='fade-up' src={content3} alt="content3" />

            </Container>
            {/* <Row>
                <Col>

                </Col>
                <Col>
                    <img />
                </Col>
            </Row>
            <Row>
                <Col>
                </Col>
                <Col>
                </Col>

            </Row>
            <Row>
                <Col>
                </Col>
            </Row> */}

        </div >
    )
}

export default Home
