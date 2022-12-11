import { AspectRatio, Box, Center, Flex, Heading, Image, Table, TableContainer, Tbody, Td, Tr, Wrap, WrapItem } from '@chakra-ui/react';
import axios from 'axios';
import Head from "next/head";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Colour from "../../color/napalearncolor";
import BoxResultDashboard from '../../components/BoxResultDashboard';
import ButtonNAL from "../../components/Button.js";
import Layout from "../../components/Layout";
import url from "../url";

export default function Home(props) {

  let container = {
    width: '100%',
    marginTop: '24px',
    padding: '12px',
  }
  let container1 = {
    width: '100%',
    paddingLeft: '300px',
    paddingRight: '300px',
  }
  let boxComponent = {
    width: '90%',
    minHeight: '100px',
    marginTop: '36px',
    bgColor: 'white',
    boxShadow: 'md',
    p: '6',
    rounded: 'md'
  }
  let menu = {
    bgColor: Colour.White,
    width: '550px',
    marginTop: '10px',
    padding: "12px",
  }
  let boxImage = {
    width: '150px',
  }
  let boxText = {
    whiteSpace: "pre",
    width: "275px",
    overflow: "hidden",
  }
  let boxMaterial = {
    bgColor: Colour.White,
    width: '250px',
    marginTop: '25px',
    boxShadow: 'lg',
    p: '4',
    rounded: 'md',
  }

  // query data from database to display the score
  let iresponse1 = parseInt(props.responseData.iresponse1)
  let iresponse2 = parseInt(props.responseData.iresponse2)
  let iresponse3 = parseInt(props.responseData.iresponse3)
  let iresponse4 = parseInt(props.responseData.iresponse4)
  let iresponse5 = parseInt(props.responseData.iresponse5)
  let iresponse6 = parseInt(props.responseData.iresponse6)
  let iresponse7 = parseInt(props.responseData.iresponse7)
  let iresponse8 = parseInt(props.responseData.iresponse8)
  let iresponse9 = parseInt(props.responseData.iresponse9)
  let iresponse10 = parseInt(props.responseData.iresponse10)
  let iresponse11 = parseInt(props.responseData.iresponse11)
  let iresponse12 = parseInt(props.responseData.iresponse12)
  let iresponse13 = parseInt(props.responseData.iresponse13)
  let iresponse14 = parseInt(props.responseData.iresponse14)
  let iresponse15 = parseInt(props.responseData.iresponse15)
  let iresponse16 = parseInt(props.responseData.iresponse16)
  let iresponse17 = parseInt(props.responseData.iresponse17)
  let iresponse18 = parseInt(props.responseData.iresponse18)
  let iresponse19 = parseInt(props.responseData.iresponse19)
  let iresponse20 = parseInt(props.responseData.iresponse20)
  let idatetime = props.responseData.idatetime
  let ipoint = iresponse1 + iresponse2 + iresponse3 + iresponse4 + iresponse5 + iresponse6 + iresponse7 + iresponse8 + iresponse9 + iresponse10 +
    iresponse11 + iresponse12 + iresponse13 + iresponse14 + iresponse15 + iresponse16 + iresponse17 + iresponse18 + iresponse19 + iresponse20
  let icheck = (ipoint) < 0 ? 1 : 0

  let aresponse1 = parseInt(props.responseData.aresponse1)
  let aresponse2 = parseInt(props.responseData.aresponse2)
  let aresponse3 = parseInt(props.responseData.aresponse3)
  let aresponse4 = parseInt(props.responseData.aresponse4)
  let aresponse5 = parseInt(props.responseData.aresponse5)
  let aresponse6 = parseInt(props.responseData.aresponse6)
  let aresponse7 = parseInt(props.responseData.aresponse7)
  let aresponse8 = parseInt(props.responseData.aresponse8)
  let aresponse9 = parseInt(props.responseData.aresponse9)
  let aresponse10 = parseInt(props.responseData.aresponse10)
  let aresponse11 = parseInt(props.responseData.aresponse11)
  let aresponse12 = parseInt(props.responseData.aresponse12)
  let aresponse13 = parseInt(props.responseData.aresponse13)
  let aresponse14 = parseInt(props.responseData.aresponse14)
  let aresponse15 = parseInt(props.responseData.aresponse15)
  let aresponse16 = parseInt(props.responseData.aresponse16)
  let aresponse17 = parseInt(props.responseData.aresponse17)
  let aresponse18 = parseInt(props.responseData.aresponse18)
  let adatetime = props.responseData.adatetime
  let apoint = aresponse1 + aresponse2 + aresponse3 + aresponse4 + aresponse5 + aresponse6 + aresponse7 + aresponse8 + aresponse9 + aresponse10 +
    aresponse11 + aresponse12 + aresponse13 + aresponse14 + aresponse15 + aresponse16 + aresponse17 + aresponse18
  let acheck = (apoint) < 0 ? 1 : 0

  let data = [
    { title: "คะแนนดี", value: ipoint, color: "#97CF47" },
    { title: "คะแนนเสีย", value: 20 - ipoint, color: "#FF7121" },
  ];

  let data1 = [
    { title: "คะแนนที่ดี", value: apoint, color: "#97CF47" },
    { title: "คะแนนเสีย", value: 18 - apoint, color: "#FF7121" },
  ];

  // fetch data to show you an example 
  const router = useRouter()
  const [article, setarticle] = useState([])
  const [article1, setarticle1] = useState([])
  const [material, setmaterial] = useState([])
  const [material1, setmaterial1] = useState([])

  const fetchData = async () => {
    let result = await axios.get(`${url}/api/Dashboard/getDataLA`, {
    })
    setarticle(result.data)
  }
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData1 = async () => {
    let result = await axios.get(`${url}/api/Dashboard/getDataLM`, {
    })
    setmaterial(result.data)
  }
  useEffect(() => {
    fetchData1()
  }, [])

  const fetchData2 = async () => {
    let result = await axios.get(`${url}/api/Dashboard/getDataPA`, {
    })
    setarticle1(result.data)
  }
  useEffect(() => {
    fetchData2()
  }, [])

  const fetchData3 = async () => {
    let result = await axios.get(`${url}/api/Dashboard/getDataPM`, {
    })
    setmaterial1(result.data)
  }
  useEffect(() => {
    fetchData3()
  }, [])

  //function onClick each article and material
  const onClickArticle = (id) => {
    router.push(`/learning/learningarticleID/${id}`)
  }
  const onClickMaterial = (id) => {
    router.push(`/learning/learningmaterialID/${id}`)
  }
  const onClickArticle1 = (id) => {
    router.push(`/professional/professionalarticleID/${id}`)
  }
  const onClickMaterial1 = (id) => {
    router.push(`/professional/professionalworkshopID/${id}`)
  }

  const [userRole, setuserRole] = useState()
  const [name, setName] = useState('')
  useEffect(() => {
    setuserRole(sessionStorage.getItem('userrole'))
    setName(sessionStorage.getItem('name'))
  }, [])

  return (
    <div className="">
      <Head>
        <title>Nap A Learn Website</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/pro.ico" />
      </Head>
      <Layout>
        <div className="p-4 mt-1">
          <Flex align="center" justify="center">
            <Box sx={container} align="center" justify="center">
              <Box sx={container1} align="center" justify="center">
                <Heading as='h2' size='2xl'>
                  Welcome {name}
                </Heading>
                <Heading as='h2' size='xl'>
                  to Nap a Learn Website
                </Heading>
              </Box>
              {(userRole) == 2 ? <Box></Box> : // if user is admin not show questionnaire
                <Box sx={boxComponent} align="center" justify="center">
                  <Heading as='h2' size='xl' color={Colour.Darkblue} align='start'>
                    Questionnaire
                  </Heading>
                  <Box marginTop='36px'>
                    <Wrap align='center' justify='center'>
                      <WrapItem>
                        <Center> {/*show result of intellect questionnaire*/}
                          <BoxResultDashboard mode='1' check={icheck} datetime={idatetime} data={data}></BoxResultDashboard>
                        </Center>
                      </WrapItem>
                      <WrapItem>
                        <Center> {/*show result of autism questionnaire*/}
                          <BoxResultDashboard mode='2' check={acheck} datetime={adatetime} data={data1}></BoxResultDashboard>
                        </Center>
                      </WrapItem>
                    </Wrap>
                  </Box>
                </Box>}
              <Box sx={boxComponent} align="center" justify="center">
                <Heading as='h2' size='xl' color={Colour.Darkblue} align='start'>
                  Learning Materials
                  <Wrap justify='center' spacing='50px'>
                    <WrapItem>
                      <Box sx={menu} boxShadow='lg' p='6' rounded='md'>
                        <Heading size='md' color="#3E3C6E" marginLeft='20px' marginTop='20px'>Article</Heading>
                        <TableContainer marginTop='20px'>
                          <Table variant='striped' colorScheme='gray'>
                            <Tbody> {/*show example article learning*/}
                              {
                                article.map((item, index) => {
                                  return (
                                    <Tr key={index}
                                      _hover={{ color: Colour.FirstPink }}
                                      onClick={() => onClickArticle(item.learningarticleID)}>
                                      <Td >
                                        <Box sx={boxImage} >
                                          <img src={item.url}></img>
                                        </Box>
                                      </Td>
                                      <Td>
                                        <Box sx={boxText}>
                                          <Heading size='md'>{item.topic}</Heading>
                                          <Heading size='xs' opacity='0.75' noOfLines={2} >{item.content}</Heading>
                                        </Box>
                                      </Td>
                                    </Tr >
                                  )
                                })
                              }
                            </Tbody>
                          </Table>
                        </TableContainer>
                      </Box>
                    </WrapItem>
                    <WrapItem>
                      <Box sx={menu} boxShadow='lg' p='6' rounded='md'>
                        <Heading size='md' color="#3E3C6E" marginLeft='20px' marginTop='20px'>Video</Heading>
                        <Wrap justify="center"> {/*show example article material*/}
                          {
                            material.map((item, index) => {
                              return (
                                <div key={index}>
                                  <Center>
                                    <Box key={index} sx={boxMaterial} _hover={{ color: Colour.FirstPink }}
                                      onClick={() => onClickMaterial(item.learningmaterialID)}>

                                      <AspectRatio maxH='200px' ratio={1} >
                                        <iframe src={item.url} allowFullScreen></iframe>
                                      </AspectRatio>
                                      <Heading size='md'>{item.topic}</Heading>

                                    </Box>
                                  </Center>
                                </div>
                              )
                            })}
                        </Wrap>
                      </Box>
                    </WrapItem>
                  </Wrap>
                </Heading>
              </Box>
              <Box sx={boxComponent} align="center" justify="center">
                <Heading as='h2' size='xl' color={Colour.Darkblue} align='start'>
                  Professional Skills
                  <Wrap justify='center' spacing='50px'>
                    <WrapItem>
                      <Box sx={menu} boxShadow='lg' p='6' rounded='md'>
                        <Heading size='md' color="#3E3C6E" marginLeft='20px' marginTop='20px'>Article</Heading>
                        <TableContainer marginTop='20px'>
                          <Table variant='striped' colorScheme='gray'>
                            <Tbody> {/*show example article professtion*/}
                              {
                                article1.map((item, index) => {
                                  return (
                                    <Tr key={index}
                                      _hover={{ color: Colour.FirstPink }}
                                      onClick={() => onClickArticle1(item.professarticleID)}>
                                      <Td >
                                        <Box sx={boxImage} >
                                          <img src={item.url}></img>
                                        </Box>
                                      </Td>
                                      <Td>
                                        <Box sx={boxText}>
                                          <Heading size='md'>{item.topic}</Heading>
                                          <Heading size='xs' opacity='0.75' noOfLines={2} >{item.content}</Heading>
                                        </Box>
                                      </Td>
                                    </Tr >
                                  )
                                })
                              }
                            </Tbody>
                          </Table>
                        </TableContainer>
                      </Box>
                    </WrapItem>
                    <WrapItem>
                      <Box sx={menu} boxShadow='lg' p='6' rounded='md'>
                        <Heading size='md' color="#3E3C6E" marginLeft='20px' marginTop='20px'>Video</Heading>
                        <Wrap justify="center"> {/*show example professtion professtion*/}
                          {
                            material1.map((item, index) => {
                              return (
                                <div key={index}>
                                  <Center>
                                    <Box key={index} sx={boxMaterial} _hover={{ color: Colour.FirstPink }}
                                      onClick={() => onClickMaterial1(item.professworkshopID)}>

                                      <AspectRatio maxH='200px' ratio={1} >
                                        <iframe src={item.url} allowFullScreen></iframe>
                                      </AspectRatio>
                                      <Heading size='md'>{item.topic}</Heading>

                                    </Box>
                                  </Center>
                                </div>
                              )
                            })}
                        </Wrap>
                      </Box>
                    </WrapItem>
                  </Wrap>
                </Heading>
              </Box>
              {(userRole) == 2 ? <Box></Box> : // if user is admin not show music therapy
                <Box sx={boxComponent} align="center" justify="center">
                  <Heading as='h2' size='xl' color={Colour.Darkblue} align='start'>
                    Music Therapy
                  </Heading>
                  <Box marginTop='36px'>
                    <Image src='/image/listen.jpg'
                      width='600px'
                      height='auto'
                      alt="music" />
                    <Box padding='18px'>
                      <ButtonNAL text="Go To Music Therapy" link="/musictherapy" />
                    </Box>
                  </Box>
                </Box>}
            </Box>
          </Flex>
        </div>
      </Layout>

    </div>
  );
}

export const getServerSideProps = async (context) => {
  const userID = context.params.usernumberID;
  const responseData = await axios.get(`${url}/api/Dashboard/${userID}`)
  return {
    props: {
      responseData: responseData.data,
    }
  }
}