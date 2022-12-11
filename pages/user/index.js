import {
    AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Avatar,
    Box, Button, Center, Flex, Heading, HStack, Input, InputGroup, InputRightElement, Table, TableContainer,
    Tbody, Td, Text, Th, Thead, Tr, useToast
} from '@chakra-ui/react';
import axios from 'axios';
import { encode } from 'js-base64';
import Head from "next/head";
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { BiSearchAlt } from "react-icons/bi";
import { FiChevronLeft, FiChevronRight, FiChevronsLeft, FiChevronsRight } from "react-icons/fi";
import Colour from "../../color/napalearncolor";
import Layout from "../../components/Layout";
import url from '../url';

export default () => {
    let line = {
        width: '100%',
        marginTop: '12px',
        height: '2px',
        bgColor: Colour.Darkblue,
        marginBottom: '12px',
    }
    let container = {
        width: '100%',
        maxWidth: '1300px',
        marginTop: '12px',
        bgColor: Colour.AlmostWhite,
    }
    let container1 = {
        width: '100%',
        maxWidth: '1300px',
        marginTop: '24px',
        bgColor: Colour.AlmostWhite,
    }
    let searchbox = {
        bgColor: "white",
        marginRight: '16px',
        marginTop: '6px',
        marginLeft: '28px',
    }
    let pagebox = {
        marginTop: '24px',
        maxWidth: '1300px',
    }
    let boxPagination = {
        width: '1100px',
        marginTop: '18px',
    }

    const router = useRouter()
    const [data, setData] = useState([])
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(1)
    const [pageAmount, setPageAmount] = useState(1)
    const cancelRef = useRef()
    const [selected, setSelected] = useState(false)
    const toast = useToast()

    useEffect(() => {
        const kickOut = () => {
            sessionStorage.clear()
            router.push('/')
            toast({
                title: 'Cannot access the website',
                description: "Please log in to use the website",
                status: 'error',
                duration: 5000
            })
        }
        if (sessionStorage.getItem('userrole') == 1) {
            kickOut()
        }
    }, [])

    useEffect(() => {
        fetchData()
    }, [search, page])

    const fetchData = async () => {
        let result = await axios.get(`${url}/api/NapALearnUser/getUser`, {
            headers: {
                page: page,
                search: encode(search),
            }
        })
        setData(result.data)
        if (result.data.length !== 0) {
            setPageAmount(result.data[0].page_amount)
        }
    }

    const onClickDelete = async () => {
        let userid = (data[selected].usernumberID)
        console.log(userid)
        let result = await axios.delete(`${url}/api//NapALearnUser/deleteUser`, {
            headers: {
                usernumberid: userid
            }
        })
        console.log(result)
        if (result) {
            toast({
                title: 'Delete Success',
                description: "Delete User is complete",
                status: 'success',
                duration: 3000,
                isClosable: false,
            })
            setPage(1)
            setSearch('')
            setTimeout(function () {
                window.location.reload();
            }, 3000);
        }
        else {
            alert('Delete Failed')
        }
    }

    const deleteDialog = (onClose, isOpen) => {
        const OnClickDelete = () => {
            onClickDelete()
            onClose()
        }
        return (
            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                            Delete User
                        </AlertDialogHeader>
                        <AlertDialogBody>
                            Are you sure? You can't undo this action afterwards.
                        </AlertDialogBody>
                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button colorScheme='red' onClick={() => OnClickDelete()} ml={3}>
                                Delete
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        )
    }

    const onClickUser = (id) => {
        router.push(`/profile/${id}`)
    }

    return (
        <div className="">
            <Head>
                <title>Nap A Learn Website</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/pro.ico" />
            </Head>
            <Layout>
                <div className="p-4 mt-1">
                    <Heading size='2xl'>[Admin] User</Heading>
                    <Box sx={line}></Box>
                    <Flex align="center" justify="center">
                        <Box sx={container}>
                            <HStack variant='solid' justify='space-between'>
                                <Text fontSize="24px" fontWeight="bold" marginBottom="8px">
                                    User
                                </Text>
                                <Box sx={searchbox}>
                                    <HStack variant='solid' justify='end'>
                                        <InputGroup maxWidth='250px' >
                                            <InputRightElement
                                                pointerEvents='none'
                                                children={<BiSearchAlt />}
                                            />
                                            <Input
                                                type='text'
                                                placeholder='Search Name'
                                                bgColor={Colour.White}
                                                onChange={(e) => { setSearch(e.target.value); setPage(1) }}></Input>
                                        </InputGroup>
                                    </HStack>
                                </Box>
                            </HStack>
                            <Box sx={container1}>
                                <TableContainer border={'1px solid' + Colour.LightGrey} borderRadius='12px' bgColor={Colour.White}>
                                    <Table variant='simple'>
                                        <Thead>
                                            <Tr>
                                                <Th>ID</Th>
                                                <Th>Name</Th>
                                                <Th>DateOfBirth</Th>
                                                <Th>TelephoneNumber</Th>
                                                <Th>Operation</Th>
                                            </Tr>
                                        </Thead>
                                        <Tbody>{
                                            data.map((item, index) => {
                                                return (
                                                    <Tr key={index}>
                                                        <Td>{item.usernumberID}</Td>
                                                        <Td>
                                                            <Flex align='center' gap='8px'>
                                                                <Avatar
                                                                    display='inline-block'
                                                                    float='left'
                                                                    borderRadius='full'
                                                                    boxSize='40px'
                                                                    src={item.url}
                                                                    alt={item.usernumberID}
                                                                />
                                                                <Flex h='40px' align='center'>
                                                                    {item.firstname + ' ' + item.lastname}
                                                                </Flex>
                                                            </Flex>
                                                        </Td>
                                                        <Td>{item.dateofbirth}</Td>
                                                        <Td>{item.telephonenumber}</Td>
                                                        <Td>
                                                            <HStack spacing='12px'>
                                                                <Button borderRadius='md' colorScheme='orange' color='White' size='sm'
                                                                    _hover={{ bg: 'White', border: '2px solid', color: 'orange' }}
                                                                    onClick={() => onClickUser(item.usernumberID)}>
                                                                    Edit
                                                                </Button>
                                                                <Button borderRadius='md' colorScheme='red' color='White' size='sm'
                                                                    _hover={{ bg: 'White', border: '2px solid', color: 'red' }}
                                                                    onClick={() => setSelected(index)}>
                                                                    Delete
                                                                </Button>
                                                                {deleteDialog(() => setSelected(null), selected === index ? true : false)}
                                                            </HStack>
                                                        </Td>
                                                    </Tr>
                                                )
                                            })
                                        }
                                        </Tbody>
                                    </Table>
                                </TableContainer>
                            </Box>
                            <Box sx={pagebox}>
                                <Flex align="center" justify="center" m={6}>
                                    <Box sx={boxPagination}>
                                        <Flex align="center" justify="center" gap="10">
                                            <Button border='2px' borderColor={Colour.FirstPink}
                                                bg={Colour.FirstPink} color="white" isDisabled={page === 1}
                                                _hover={{ bg: 'White', border: '2px solid', color: Colour.FirstPink }}
                                                onClick={() => { setPage(1) }}> <FiChevronsLeft />
                                                First Page
                                            </Button>
                                            <Button border='2px' borderColor={Colour.FirstPink}
                                                bg={Colour.FirstPink} color="white" isDisabled={page === 1}
                                                _hover={{ bg: 'White', border: '2px solid', color: Colour.FirstPink }}
                                                onClick={() => { if (page > 1) setPage(page - 1) }}> <FiChevronLeft />
                                                Prev Page
                                            </Button>
                                            <Center>
                                                <Heading size='md' color="#3E3C6E"> Page {page} of {pageAmount} </Heading>
                                            </Center>
                                            <Button border='2px' borderColor={Colour.FirstPink}
                                                bg={Colour.FirstPink} color="white" isDisabled={page === parseInt(pageAmount)}
                                                _hover={{ bg: 'White', border: '2px solid', color: Colour.FirstPink }}
                                                onClick={() => { if (page < pageAmount) setPage(page + 1) }}>
                                                Next Page <FiChevronRight />
                                            </Button>
                                            <Button border='2px' borderColor={Colour.FirstPink}
                                                bg={Colour.FirstPink} color="white" isDisabled={page === parseInt(pageAmount)}
                                                _hover={{ bg: 'White', border: '2px solid', color: Colour.FirstPink }}
                                                onClick={() => { setPage(parseInt(pageAmount)) }}>
                                                Last Page <FiChevronsRight />
                                            </Button>
                                        </Flex>
                                    </Box>
                                </Flex>
                            </Box>
                        </Box>
                    </Flex>
                </div>
            </Layout>
        </div>
    );
}