import Head from "next/head";
import { Heading, Wrap, Box, Flex, Button, Center, AspectRatio, useToast, Alert, AlertIcon, Badge} from '@chakra-ui/react'
import Layout from "../../../../components/Layout"
import Colour from "../../../../color/napalearncolor"
import { useEffect, useState } from 'react'
import axios from 'axios'
import { FiChevronRight, FiChevronLeft, FiChevronsRight, FiChevronsLeft} from "react-icons/fi";
import { BiSearchAlt } from "react-icons/bi";
import { encode } from 'js-base64'
import { useRouter } from 'next/router'
import Pagination from '../../../../components/Pagination'
import Search from '../../../../components/Search'
import url from "../../../url";

export default (props) => {
    const router = useRouter()
    const [material, setmaterial] = useState([])
    const [page, setPage] = useState(1)
    const [pageAmount, setPageAmount] = useState(1)
    const [search, setSearch] = useState('')
    const [filter, setFilter] = useState('')
    const toast = useToast()

    const fetchData = async () => {
        console.log(filter)
        let skilltostring1 = ''
        let skilltostring2 = ''
        let skilltostring3 = ''
        let skilltostring4 = ''
        let skilltostring5 = ''
        let skilltostring6 = ''
        let skilltostring7 = ''
        let skilltostring8 = ''
        let skilltostring9 = ''
        let skilltostring10 = ''
        let skilltostring11 = ''
        let skilltostring12 = ''
        let skilltostring13 = ''

        if (filter[0] !== undefined) {
            skilltostring1 = filter[0].toString()
        }
        if (filter[1] !== undefined) {
            skilltostring2 = filter[1].toString()
        }
        if (filter[2] !== undefined) {
            skilltostring3 = filter[2].toString()
        }
        if (filter[3] !== undefined) {
            skilltostring4 = filter[3].toString()
        }
        if (filter[4] !== undefined) {
            skilltostring5 = filter[4].toString()
        }
        if (filter[5] !== undefined) {
            skilltostring6 = filter[5].toString()
        }
        if (filter[6] !== undefined) {
            skilltostring7 = filter[6].toString()
        }
        if (filter[7] !== undefined) {
            skilltostring8 = filter[7].toString()
        }
        if (filter[8] !== undefined) {
            skilltostring9 = filter[8].toString()
        }
        if (filter[9] !== undefined) {
            skilltostring10 = filter[9].toString()
        }
        if (filter[10] !== undefined) {
            skilltostring11 = filter[10].toString()
        }
        if (filter[11] !== undefined) {
            skilltostring12 = filter[11].toString()
        }
        if (filter[12] !== undefined) {
            skilltostring13 = filter[12].toString()
        }

        let result = await axios.get(`${url}/api/LearningMaterial/getLearningMaterial`, {
            headers: {
                page: page,
                search: encode(search),
                filter1: encode(skilltostring1),
                filter2: encode(skilltostring2),
                filter3: encode(skilltostring3),
                filter4: encode(skilltostring4),
                filter5: encode(skilltostring5),
                filter6: encode(skilltostring6),
                filter7: encode(skilltostring7),
                filter8: encode(skilltostring8),
                filter9: encode(skilltostring9),
                filter10: encode(skilltostring10),
                filter11: encode(skilltostring11),
                filter12: encode(skilltostring12),
                filter13: encode(skilltostring13),
            }
        })

        setmaterial(result.data)
        if (result.data.length !== 0) {
            setPageAmount(result.data[0].page_amount)
        }
    }

    useEffect(() => {
        fetchData()
    }, [filter, search, page])

    const onClickMaterial = (id) => {
        router.push(`/learning/learningmaterialID/${id}`)
    }

    let line = {
        bgColor: Colour.Darkblue,
        width: '100%',
        marginTop: '12px',
        height: '2px',
    }
    let boxPagination = {
        width: '100%',
        maxWidth: '1250px',
        marginTop: '25px',
    }

    let boxMaterial = {
        bgColor: Colour.White,
        width: '275px',
        height: '300px',
        boxShadow: 'lg',
        rounded: 'md',
    }
    let boxTopic = {
        width: '100%',
        height: '150px',
        p: "12px",
        marginTop: '-6px',
    }
    let boxTab = {
        width: '100%',
        maxWidth: '1250px',
        height: '100%',
        padding: '6px',
    }
    let boxFilter = {
        width: '100%',
        maxWidth: '1260px',
    }

    let response1 = parseInt(props.responseData.response1)
    let response2 = parseInt(props.responseData.response2)
    let response3 = parseInt(props.responseData.response3)
    let response4 = parseInt(props.responseData.response4)
    let response5 = parseInt(props.responseData.response5)
    let response6 = parseInt(props.responseData.response6)
    let response7 = parseInt(props.responseData.response7)
    let response8 = parseInt(props.responseData.response8)
    let response9 = parseInt(props.responseData.response9)
    let response10 = parseInt(props.responseData.response10)
    let response11 = parseInt(props.responseData.response11)
    let response12 = parseInt(props.responseData.response12)
    let response13 = parseInt(props.responseData.response13)
    let response14 = parseInt(props.responseData.response14)
    let response15 = parseInt(props.responseData.response15)
    let response16 = parseInt(props.responseData.response16)
    let response17 = parseInt(props.responseData.response17)
    let response18 = parseInt(props.responseData.response18)
    let response19 = parseInt(props.responseData.response19)
    let response20 = parseInt(props.responseData.response20)
    let point = response1 + response2 + response3 + response4 + response5 + response6 + response7 + response8 + response9 + response10 +
        response11 + response12 + response13 + response14 + response15 + response16 + response17 + response18 + response19 + response20

    let check = (point) < 0 ? 1 : 0

    let skill1 = (response1 + response2) == 0 ? 0 : 1
    let skill2 = (response3 + response4) == 0 ? 0 : 1
    let skill3 = (response5 + response6) == 0 ? 0 : 1
    let skill4 = (response7 + response8) == 0 ? 0 : 1
    let skill5 = (response9 + response10) == 0 ? 0 : 1
    let skill6 = (response11 + response12) == 0 ? 0 : 1
    let skill7 = (response13 + response14) == 0 ? 0 : 1
    let skill8 = (response15 + response16) == 0 ? 0 : 1
    let skill9 = (response17 + response18) == 0 ? 0 : 1
    let skill10 = (response19 + response20) == 0 ? 0 : 1

    let textskill1 = (skill1) == 0 ? 'ทักษะการสื่อสาร ' : ''
    let textskill2 = (skill2) == 0 ? 'ทักษะการดูแลตัวเอง ' : ''
    let textskill3 = (skill3) == 0 ? 'ทักษะการดำรงชีวิต ' : ''
    let textskill4 = (skill4) == 0 ? 'ทักษะทางสังคม ' : ''
    let textskill5 = (skill5) == 0 ? 'ทักษะการรู้จักใช้ทรัพยากร ' : ''
    let textskill6 = (skill6) == 0 ? 'ทักษะการควบคุมตัวเอง ' : ''
    let textskill7 = (skill7) == 0 ? 'ทักษะการนำความรู้มาใช้ในชีวิต ' : ''
    let textskill8 = (skill8) == 0 ? 'ทักษะการทำงาน ' : ''
    let textskill9 = (skill9) == 0 ? 'ทักษะการใช้เวลาว่าง ' : ''
    let textskill10 = (skill10) == 0 ? 'ทักษะการรักษาสุขอนามัย ' : ''

    let alltext = textskill1 + textskill2 + textskill3 + textskill4 + textskill5 + textskill6 + textskill7 + textskill8 + textskill9 + textskill10
    let alltext4 = (alltext) == 0 ? 1 : 0
    let alltext6 = (alltext4) == 0 ? '' : 'None missing skill'



    const onFilterClick = () => {
        const alltextarray = alltext.split(' ');
        console.log(alltextarray)
        setFilter(alltextarray)
    }

    return (
        <div>
            <Head>
                <title>Nap A Learn Website</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/pro.ico" />
            </Head>
            <Layout>
                <div className="p-4 mt-1">
                    <Heading size='2xl' color='#3E3C6E'>Learning Material</Heading>
                    <Box sx={line}></Box>
                    <Wrap align='center' justify='center' spacingX='50px' spacingY='25px'>
                        <Search icon={<BiSearchAlt />} onChange={(e) => { setSearch(e.target.value); setPage(1) }} />
                        <Box sx={boxTab}>
                            <Heading color="#3E3C6E" size='xl' marginBottom='12px'>Filter By Questionnaire 1</Heading>
                            <Box sx={boxFilter}>
                                {(check) == 1 ?
                                    <Heading size='lg' color="#FF7121"> You have not completed the questionnaire yet </Heading> :
                                    <Heading size='lg' color="#3E3C6E"> Skills you are missing include : {alltext} {alltext6}</Heading>}

                                {(check) || (alltext4) == 1 ?


                                    <Button isDisabled bg="#FE979C" color="#FFFFFF" border='2px solid' borderColor='#FF969B' mr={3} mt={4}
                                        _hover={{
                                            bg: 'White',
                                            border: '2px solid',
                                            color: Colour.FirstPink
                                        }}>
                                        Filter Missing Skills
                                    </Button> :
                                    <Button bg="#FE979C" color="#FFFFFF" border='2px solid' borderColor='#FF969B' mr={3} mt={4} onClick={() => onFilterClick() & toast({
                                        position: 'bottom-right',
                                        render: () => (
                                            <Alert status='success' color="#FFFFFF" bg="#FF969B">
                                                <AlertIcon color="#FFFFFF" />
                                                Missing Skills !
                                            </Alert>
                                        ),
                                    })}
                                        _hover={{
                                            bg: 'White',
                                            border: '2px solid',
                                            color: Colour.FirstPink
                                        }}>
                                        Filter Missing Skills
                                    </Button>}

                                {(check) || (alltext4) == 1 ?
                                    <Button isDisabled bg="#FE979C" color="#FFFFFF" border='2px solid' borderColor='#FF969B' mr={3} mt={4} _hover={{
                                        bg: 'White',
                                        border: '2px solid',
                                        color: Colour.FirstPink
                                    }}>
                                        Delete Filter
                                    </Button> :
                                    <Button bg="#FE979C" color="#FFFFFF" border='2px solid' borderColor='#FF969B' mr={3} mt={4} onClick={() => setFilter('') & toast({
                                        position: 'bottom-right',
                                        isClosable: true,
                                        render: () => (
                                            <Alert status='success' color="#FFFFFF" bg="#FF969B">
                                                <AlertIcon color="#FFFFFF" />
                                                Delete Missing Skills !
                                            </Alert>
                                        ),
                                    })}
                                        _hover={{
                                            bg: 'White',
                                            border: '2px solid',
                                            color: Colour.FirstPink
                                        }}>
                                        Delete Filter
                                    </Button>}
                            </Box>
                        </Box>

                        {
                            material.map((item, index) => {
                                return (
                                    <Center>
                                        <Box key={index} sx={boxMaterial} _hover={{ color: Colour.FirstPink }}
                                            onClick={() => onClickMaterial(item.learningmaterialID)}>
                                            <AspectRatio height='150px' ratio={16 / 9}>
                                                <iframe src={item.url} allowFullScreen></iframe>
                                            </AspectRatio>
                                            <Box sx={boxTopic}>
                                                <Badge fontSize='13px' colorScheme='pink'>{item.forskillID}</Badge>
                                                <Heading noOfLines={4} size={18} fontSize='18px'> {item.topic}</Heading>
                                            </Box>
                                        </Box>
                                    </Center>
                                )
                            })
                        }

                    </Wrap>
                    <Flex align="center" justify="center" m={6}>
                        <Box sx={boxPagination}>
                            <Flex align="center" justify="center" gap="10">
                                <Pagination text="First Page" disabled={page === 1} icon={<FiChevronsLeft />} page={() => {
                                    setPage(1)
                                }} />
                                <Pagination text="Prev Page" disabled={page === 1} icon={<FiChevronLeft />} page={() => {
                                    if (page > 1)
                                        setPage(page - 1)
                                }} />
                                <center>
                                    <Heading size='md' color="#3E3C6E">Page {page} of {pageAmount}</Heading>
                                </center>
                                <Pagination text="Next Page" disabled={page === parseInt(pageAmount)} icon2={<FiChevronRight />} page={() => {
                                    if (page < pageAmount)
                                        setPage(page + 1)
                                }} />
                                <Pagination text="Last Page" disabled={page === parseInt(pageAmount)} icon2={<FiChevronsRight />} page={() => {
                                    setPage(parseInt(pageAmount))
                                }} />
                            </Flex>
                        </Box>
                    </Flex>
                </div>
            </Layout >
        </div >
    )
}

export const getServerSideProps = async (context) => {
    const userID = context.params.usernumberID;
    const responseData = await axios.get(`${url}/api/Filter/getFilterSkillA/${userID}`)
    return {
        props: {
            responseData: responseData.data,
        }
    }
}
