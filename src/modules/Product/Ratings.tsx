import StarRating from '@/components/products/StarRating';
import { colors } from '@/config/chakra';
import {
    Box, Flex, Heading,
    Image, 
    Text, 
} from '@chakra-ui/react';
import { IconContext, } from "react-icons";
import { AiFillStar, AiOutlineHeart } from 'react-icons/ai';

const Ratings = () => {
    const images = [
        "https://cdn.shopify.com/s/files/1/0706/1707/1902/products/ZANEROBE-Lowgo-Crew-Sweat-Mauve-Flatlay-01-_1_2048x.jpg?v=1677645901",
        "https://cdn.shopify.com/s/files/1/0706/1707/1902/products/ZANEROBE-Lowgo-Crew-Sweat-Mauve-02_b57fb6f5-893f-4a14-b0f7-eb6bf0ed42a7_2048x.jpg?v=1677645901",
        "https://cdn.shopify.com/s/files/1/0706/1707/1902/products/ZANEROBE-Lowgo-Crew-Mauve-VP-1_1728x.jpg?v=1677645901",
        "https://cdn.shopify.com/s/files/1/0706/1707/1902/products/ZANEROBE-Lowgo-Crew-Mauve-VP-4_2048x.jpg?v=1677645901"
    ]


    return (
        <Box width={"full"} mt={6} px={6} py={5} borderY={"2px"} borderColor={colors.whiteSmoke}>
            <Heading size={"sm"} pb={4}> Reviews & Ratings: </Heading>
            <Flex width={"full"} >
                <Flex direction={"column"} width="30%">
                    <Heading size={"3xl"} >4.9 <Box fontSize={"xs"} color={colors.brand} as="sub">/ 5.0</Box></Heading>
                    <Flex mt={3}>
                        <IconContext.Provider value={{ size: "20px", color: "gold", style: { margin: 'auto' } }}>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                        </IconContext.Provider>
                    </Flex>
                    <Text mt={8} color={colors.brand} fontSize="xs">2.4K Reviews</Text>
                </Flex>
                <Flex width="70%" direction={"column"}>
                    {
                        ([10, 20, 30, 40, 50].map(val => <StarRating key={val} val={val} />))
                    }
                </Flex>
            </Flex>

            <Heading size={"sm"} py={6}> Reviews with images & videos </Heading>
            <Flex justifyContent={"space-around"} >
                {
                    images.map((image, index) =>
                        <Image key={image} height={24} px={1} src={image}   borderRadius={4} />)
                }
            </Flex>
        </Box>
    );
}


export default Ratings;