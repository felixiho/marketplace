import AboutDetail from '@/components/products/AboutDetail';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Grid } from '@chakra-ui/react'


const AboutProduct = () => {

    const about = [{
        id: 'Brand',
        value: 'ChaAmkpr'
    }, {
        id: 'Color',
        value: 'Yellow'
    }, {
        id: 'Category',
        value: 'Casual '
    }, {
        id: 'material',
        value: 'Polyseter'
    }, {
        id: 'Condition',
        value: 'New'
    }, {
        id: 'Heavy',
        value: '200g'
    }
    ]
    return (
        <Tabs colorScheme={"green"} px={6}>
            <TabList justifyContent={"space-around"}>
                <Tab width={"full"}>About Item</Tab>
                <Tab width={"full"}>Reviews</Tab>
            </TabList>

            <TabPanels>
                <TabPanel padding={0} flexDirection="row" pt={6}>
                    <Grid templateColumns={"repeat(2, 1fr)"} gap={3}>
                        {
                            about.map(item => <AboutDetail key={item.id} descriptionKey={item.id} value={item.value} />)
                        }

                    </Grid>
                </TabPanel>
                <TabPanel>
                    REVIEWS
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
}


export default AboutProduct;