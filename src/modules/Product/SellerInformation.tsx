import { colors } from '@/config/chakra';
import AboutDetail from '@/components/products/AboutDetail';
import {
    Box, Heading, Flex, Text, Avatar, Button
} from '@chakra-ui/react'
import { FaStore } from 'react-icons/fa';

const SellerInformation = () => {
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
        <Box px={6} py={10} borderBottom={"2px"} borderColor={colors.whiteSmoke}>
            <Heading size={"md"} pb={4}> Seller Information: </Heading>
            <Flex >
                <Avatar src='https://bit.ly/broken-link' />
                <Flex mx={4} flexDir="column">
                    <Heading size={"sm"} pb={2}>Thrifting_store</Heading>
                    <Text fontSize={"sm"} color={colors.brand}> Active 5 Min ago | 96% Positive Feedback</Text>
                    <Button  leftIcon={<FaStore />} colorScheme='teal' variant='outline' mt={2} width={32} size="sm">
                        Visit store
                    </Button>
                </Flex>

            </Flex>

        </Box>
    );
}


export default SellerInformation