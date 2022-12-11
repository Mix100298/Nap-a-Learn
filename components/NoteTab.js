import { Center, Image, Tab, Tabs, TabList, TabPanels, TabPanel } from "@chakra-ui/react"

// show piano note tabs
function NoteTab() {

    let tabStyle = {
        background: 'white',
        padding: '2',
        borderRadius: '10',
        minWidth: '500',
        maxWidth: '500',
        marginTop: '5',
    }

    return (
        <Tabs sx={tabStyle} variant='soft-rounded' colorScheme='pink'>
            <TabList>
                <Tab>Jingel bells</Tab>
                <Tab>Loy kratong</Tab>
                <Tab>Mary have a little lamp</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <Center>
                        <Image
                            width={200}
                            height='auto'
                            src='/image/note1.png'
                        />
                    </Center>
                </TabPanel>
                <TabPanel>
                    <Center>
                        <Image
                            width={200}
                            height='auto'
                            src='/image/note2.png'
                        />
                    </Center>
                </TabPanel>
                <TabPanel>
                    <Center>
                        <Image
                            width={200}
                            height='auto'
                            src='/image/note3.png'
                        />
                    </Center>
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}
export default NoteTab;