import { colors } from '@/config/chakra';
 import AboutDetail from '@/components/products/AboutDetail';
import { 
    Box, Heading, Grid } from '@chakra-ui/react'

const ShippingInformation = () => {
    const infomation = [{
        id: 'Delivery',
        value: 'Shipping from Yaba, Lagos'
    }, {
        id: 'Shipping',
        value: 'FREE International Shipping'
    }, {
        id: 'Arrive',
        value: 'Estimated arrival on 25-27 Oct 2022'
    }]


    return (
        <Box  mx={6} py={10} borderBottom={"2px"} borderColor={colors.whiteSmoke}>
            <Heading size={"md"} pb={4}> Shipping Information: </Heading>
            <Grid gap={4}>
                {
                    infomation.map(item => <AboutDetail key={item.id} descriptionKey={item.id} value={item.value} />)
                }

            </Grid>

        </Box>
    );
}


export default ShippingInformation;