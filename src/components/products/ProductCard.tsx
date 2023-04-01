import { colors } from "@/config/chakra";
import { Box, Flex, GridItem, Image, Text } from "@chakra-ui/react";

import { IconContext, } from "react-icons";
import { AiFillStar, AiOutlineHeart, AiOutlineStar } from 'react-icons/ai';
export type ProductCardType = {
    id: number,
    images: string[],
    category: string,
    title: string,
    stars: number,
    reviews: number,
    price: string
}


const ProductCard = ({ images, category, title, stars, reviews, price }: ProductCardType) => {
    return (
        <GridItem  >
            <Box position="relative">
                <Box height={28} overflow={"hidden"} >
                    <Image src={images[0]} alt="shirt image" />
                </Box>
                <Box zIndex={2} position="absolute" top={2} right={2}>
                    <IconContext.Provider value={{ size: "20px", color: "black" }}>
                        <AiOutlineHeart />
                    </IconContext.Provider>
                </Box>
            </Box>
            <Box my={4} px={2}>
                <Text mt={2} color={colors.brand} fontSize="xs">{category}</Text>
                <Text color={colors.primary} fontWeight="bold" fontSize="xs" >{title}</Text>
                <Flex mt={2} justifyContent="space-between" >
                    <Flex as="span" my="auto" >
                        <IconContext.Provider value={{ size: "14px", color: "gold", style: { margin: 'auto' } }}>
                            <AiFillStar />
                        </IconContext.Provider> 
                        <Text ml={1} color={colors.brand} fontSize="2xs">{stars} | {reviews}</Text>
                    </Flex>
                    <Text color={colors.green} fontSize="lg" fontWeight="semibold">
                        {price}
                    </Text>
                </Flex>
            </Box>
        </GridItem>
    );
}


export default ProductCard;