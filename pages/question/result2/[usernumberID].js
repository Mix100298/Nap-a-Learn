import {
  Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Flex, Heading,
  Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack
} from '@chakra-ui/react';
import axios from 'axios';
import Head from "next/head";
import NextLink from "next/link";
import Colour from "../../../color/napalearncolor";
import BoxAllSkillA from '../../../components/BoxAllSkillA';
import BoxSummary from "../../../components/BoxSummaryA";
import Layout from "../../../components/Layout";
import BoxNoData from '../../../components/BoxNoData';
import url from '../../url';

export default function result2(props) {
  let line = {
    width: '100%',
    marginTop: '12px',
    height: '2px',
    bgColor: Colour.Darkblue
  }
  let boxSelect = {
    padding: '8px',
    height: '40px',
    marginLeft: '20px',
    marginTop: '24px',
  }
  let boxResult = {
    bgColor: Colour.White,
    width: '80%',
    padding: '12px',
    paddingTop: '20px',
    paddingLeft: '20px',
    marginLeft: '20px',
    marginRight: '20px',
    marginTop: '32px',
    marginBottom: '32px',
  }
  let boxButton = {
    bgColor: Colour.White,
    width: '40%',
    padding: '12px',
    marginTop: '24px',
    marginBottom: '24px',
  }
  let boxData = {
    width: '90%',
    marginTop: '32px',
  }
  let boxData1 = {
    bgColor: Colour.White,
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
  let point = response1 + response2 + response3 + response4 + response5 + response6 + response7 + response8 + response9 + response10 +
    response11 + response12 + response13 + response14 + response15 + response16 + response17 + response18
  let check = (point) < 0 ? 1 : 0
  let skill1 = (response1 + response2 + response3 + response4 + response5) <= 3 ? 0 : 1
  let skill2 = (response6 + response7 + response8 + response9 + response10 + response11 + response12) <= 5 ? 0 : 1
  let skill3 = (response13 + response14 + response15 + response16 + response17 + response18) <= 4 ? 0 : 1
  let pointskills = skill1 + skill2 + skill3
  let passvalue = (pointskills >= 2) ? 1 : 0
  let data = [
    { title: "ผ่าน", value: pointskills, color: "#97CF47" },
    { title: "ไม่ผ่าน", value: 3 - pointskills, color: "#FF7121" },
  ];

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
  let apoint = aresponse1 + aresponse2 + aresponse3 + aresponse4 + aresponse5 + aresponse6 + aresponse7 + aresponse8 + aresponse9 + aresponse10 +
    aresponse11 + aresponse12 + aresponse13 + aresponse14 + aresponse15 + aresponse16 + aresponse17 + aresponse18
  let acheck = (apoint) < 0 ? 1 : 0
  let ause = (apoint) < 0 ? 0 : apoint
  let askill1 = (aresponse1 + aresponse2 + aresponse3 + aresponse4 + aresponse5) <= 3 ? 0 : 1
  let askill2 = (aresponse6 + aresponse7 + aresponse8 + aresponse9 + aresponse10 + aresponse11 + aresponse12) <= 5 ? 0 : 1
  let askill3 = (aresponse13 + aresponse14 + aresponse15 + aresponse16 + aresponse17 + aresponse18) <= 4 ? 0 : 1
  let apointskills = askill1 + askill2 + askill3
  let apassvalue = (apointskills >= 2) ? 1 : 0
  let adata = [
    { title: "ผ่าน", value: apointskills, color: "#97CF47" },
    { title: "ไม่ผ่าน", value: 3 - apointskills, color: "#FF7121" },
  ];

  let bresponse1 = parseInt(props.responseData.bresponse1)
  let bresponse2 = parseInt(props.responseData.bresponse2)
  let bresponse3 = parseInt(props.responseData.bresponse3)
  let bresponse4 = parseInt(props.responseData.bresponse4)
  let bresponse5 = parseInt(props.responseData.bresponse5)
  let bresponse6 = parseInt(props.responseData.bresponse6)
  let bresponse7 = parseInt(props.responseData.bresponse7)
  let bresponse8 = parseInt(props.responseData.bresponse8)
  let bresponse9 = parseInt(props.responseData.bresponse9)
  let bresponse10 = parseInt(props.responseData.bresponse10)
  let bresponse11 = parseInt(props.responseData.bresponse11)
  let bresponse12 = parseInt(props.responseData.bresponse12)
  let bresponse13 = parseInt(props.responseData.bresponse13)
  let bresponse14 = parseInt(props.responseData.bresponse14)
  let bresponse15 = parseInt(props.responseData.bresponse15)
  let bresponse16 = parseInt(props.responseData.bresponse16)
  let bresponse17 = parseInt(props.responseData.bresponse17)
  let bresponse18 = parseInt(props.responseData.bresponse18)
  let bpoint = bresponse1 + bresponse2 + bresponse3 + bresponse4 + bresponse5 + bresponse6 + bresponse7 + bresponse8 + bresponse9 + bresponse10 +
    bresponse11 + bresponse12 + bresponse13 + bresponse14 + bresponse15 + bresponse16 + bresponse17 + bresponse18
  let bcheck = (bpoint) < 0 ? 1 : 0
  let buse = (bpoint) < 0 ? 0 : bpoint
  let bskill1 = (bresponse1 + bresponse2 + bresponse3 + bresponse4 + bresponse5) <= 3 ? 0 : 1
  let bskill2 = (bresponse6 + bresponse7 + bresponse8 + bresponse9 + bresponse10 + bresponse11 + bresponse12) <= 5 ? 0 : 1
  let bskill3 = (bresponse13 + bresponse14 + bresponse15 + bresponse16 + bresponse17 + bresponse18) <= 4 ? 0 : 1
  let bpointskills = bskill1 + bskill2 + bskill3
  let bpassvalue = (bpointskills >= 2) ? 1 : 0
  let bdata = [
    { title: "ผ่าน", value: bpointskills, color: "#97CF47" },
    { title: "ไม่ผ่าน", value: 3 - bpointskills, color: "#FF7121" },
  ];

  let cresponse1 = parseInt(props.responseData.cresponse1)
  let cresponse2 = parseInt(props.responseData.cresponse2)
  let cresponse3 = parseInt(props.responseData.cresponse3)
  let cresponse4 = parseInt(props.responseData.cresponse4)
  let cresponse5 = parseInt(props.responseData.cresponse5)
  let cresponse6 = parseInt(props.responseData.cresponse6)
  let cresponse7 = parseInt(props.responseData.cresponse7)
  let cresponse8 = parseInt(props.responseData.cresponse8)
  let cresponse9 = parseInt(props.responseData.cresponse9)
  let cresponse10 = parseInt(props.responseData.cresponse10)
  let cresponse11 = parseInt(props.responseData.cresponse11)
  let cresponse12 = parseInt(props.responseData.cresponse12)
  let cresponse13 = parseInt(props.responseData.cresponse13)
  let cresponse14 = parseInt(props.responseData.cresponse14)
  let cresponse15 = parseInt(props.responseData.cresponse15)
  let cresponse16 = parseInt(props.responseData.cresponse16)
  let cresponse17 = parseInt(props.responseData.cresponse17)
  let cresponse18 = parseInt(props.responseData.cresponse18)
  let cpoint = cresponse1 + cresponse2 + cresponse3 + cresponse4 + cresponse5 + cresponse6 + cresponse7 + cresponse8 + cresponse9 + cresponse10 +
    cresponse11 + cresponse12 + cresponse13 + cresponse14 + cresponse15 + cresponse16 + cresponse17 + cresponse18
  let cuse = (cpoint) < 0 ? 0 : cpoint

  return (
    <div className="">
      <Head>
        <title>Nap A Learn Website</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/pro.ico" />
      </Head>
      <Layout>
        <div className="p-4 mt-1">
          <Heading size='xl'>ผลการคัดกรองบุคคลออทิสติก</Heading>
          <Box sx={line}></Box>
          {(check) == 1 ?
            <Flex align="center" justify="center">
              <Box sx={boxResult} boxShadow='md' p='6' rounded='md' align="center" justify="center">
                <Box sx={boxButton}>
                  <Heading>ยังไม่ได้ทำการทดสอบ</Heading>
                </Box>
                <Box sx={boxButton} justify="center">
                  <NextLink href="/question/question2" passHref>
                    <Button width='100%' borderRadius='md' bg={Colour.FirstPink} color='White' size='lg'
                      _hover={{
                        bg: 'White',
                        border: '2px solid',
                        color: Colour.FirstPink
                      }} >
                      Go to Questionnaire
                    </Button>
                  </NextLink>
                </Box>
              </Box>
            </Flex> :
            <Tabs variant='soft-rounded' colorScheme="pink">
              <Box sx={boxSelect}>
                <TabList>
                  <Tab _hover={{
                    bg: 'White',
                    border: '2px solid',
                    color: Colour.FirstPink
                  }}>ผลการทดสอบปัจจุบัน</Tab>
                  <Tab _hover={{
                    bg: 'White',
                    border: '2px solid',
                    color: Colour.FirstPink
                  }}>ผลการทดสอบย้อนหลัง 2 ครั้งล่าสุด</Tab>
                </TabList>
              </Box>
              <TabPanels>
                <TabPanel>
                  <VStack spacing={8} align="center">
                    <BoxSummary point={point} pointbefore={ause} passvalue={passvalue} />
                    <BoxAllSkillA skill1={skill1} skill2={skill2} skill3={skill3} data={data} />
                  </VStack>
                </TabPanel>
                <TabPanel>
                  <Flex justifyContent='center'>
                    <Box sx={boxData} align="center" >
                      <Accordion allowToggle>
                        <AccordionItem>
                          <h2>
                            <Box sx={boxData1}>
                              <AccordionButton>
                                <Box flex='1' textAlign='left'>
                                  {(props.responseData.adatetime) == -1 ? <Text>ไม่มีข้อมูลย้อนหลัง</Text> :
                                    <Text>ข้อมูลย้อนหลังวันที่ {props.responseData.adatetime}</Text>}
                                </Box>
                                <AccordionIcon />
                              </AccordionButton>
                            </Box>
                          </h2>
                          <AccordionPanel pb={4}>
                            {/* oldData #1 */}
                            {(acheck) == 1 ?
                              <BoxNoData /> :
                              <VStack spacing={8} align="center">
                                <BoxSummary point={apoint} pointbefore={buse} passvalue={apassvalue} />
                                <BoxAllSkillA skill1={askill1} skill2={askill2} skill3={askill3} data={adata} />
                              </VStack>}
                          </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                          <h2>
                            <Box sx={boxData1}>
                              <AccordionButton>
                                <Box flex='1' textAlign='left'>
                                  {(props.responseData.bdatetime) == -1 ? <Text>ไม่มีข้อมูลย้อนหลัง</Text> :
                                    <Text>ข้อมูลย้อนหลังวันที่ {props.responseData.bdatetime}</Text>}
                                </Box>
                                <AccordionIcon />
                              </AccordionButton>
                            </Box>
                          </h2>
                          <AccordionPanel>
                            {/* oldData #2 */}
                            {(bcheck) == 1 ?
                              <BoxNoData /> :
                              <VStack spacing={8} align="center">
                                <BoxSummary point={bpoint} pointbefore={cuse} passvalue={bpassvalue} />
                                <BoxAllSkillA skill1={bskill1} skill2={bskill2} skill3={bskill3} data={bdata} />
                              </VStack>}
                          </AccordionPanel>
                        </AccordionItem>
                      </Accordion>
                    </Box>
                  </Flex>
                </TabPanel>
              </TabPanels>
            </Tabs>}
        </div>
      </Layout>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const userID = context.params.usernumberID;
  const responseData = await axios.get(`${url}/api/Result/getResult2/${userID}`)
  return {
    props: {
      responseData: responseData.data,
    }
  }
}

