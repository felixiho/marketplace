import ProductCard, { ProductCardType } from "@/components/products/ProductCard";
import { colors } from "@/config/chakra"; 
import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { createRef,  useRef, useState } from "react";



const Recommended = () => { 


    const allProducts: ProductCardType[] = [ 
        {
            id: 5,
            images: [
                'https://cdn.shopify.com/s/files/1/0706/1707/1902/products/ZANEROBE-Lowgo-Hood-Sweat-Dijon-Flatlay-01_2048x.jpg?v=1676000766'
            ],
            category: 'Shirt',
            title: "Essential Men's Short-Sleeve Crewneck T-shirt",
            stars: 3.3,
            reviews: 3211,
            price: '$32.90'
        },
        {
            id: 6,
            images: [
                'https://cdn.shopify.com/s/files/1/0706/1707/1902/products/ZANEROBE-ZDS-Lowgo-Crew-Sweat-Black-Flatlay-01_c9985946-e3cd-486d-bf37-e8d686244747_2048x.jpg?v=1675041521'
            ],
            category: 'Shirt',
            title: "Essential Men's Short-Sleeve Crewneck T-shirt",
            stars: 3.3,
            reviews: 3211,
            price: '$32.90'
        },
        {
            id: 7,
            images: [
                'https://cdn.shopify.com/s/files/1/0706/1707/1902/products/ZANEROBE-OS-Crew-Knit-Natural-Marle-Flatlay-01_2048x.jpg?v=1675728817'
            ],
            category: 'Shirt',
            title: "Essential Men's Short-Sleeve Crewneck T-shirt",
            stars: 3.3,
            reviews: 3211,
            price: '$32.90'
        },
        {
            id: 8,
            images: [
                'https://cdn.shopify.com/s/files/1/0706/1707/1902/products/ZANEROBE-OS-Crew-Knit-Grey-Fleck-Flatlay_2048x.jpg?v=1673934350'
            ],
            category: 'Shirt',
            title: "Essential Men's Short-Sleeve Crewneck T-shirt",
            stars: 3.3,
            reviews: 3211,
            price: '$32.90'
        },
    ] 
    return (
        <Box as="section" backgroundColor={"white"} pb={4}   >
            <Flex width={"full"}   px={6} py={6} justifyContent="space-between" mb={4} >
                <Heading color={colors.primary} fontSize="xl"  >Recommended</Heading>
                <Text color={colors.green} fontWeight="semibold">
                    See more
                </Text>
            </Flex> 
                {  
                        <Grid  height={"500px"}   templateColumns={"repeat(2, 1fr)"} columnGap={6} px={6} >
                            {
                                allProducts.map(product => (
                                    <ProductCard key={product.id} {...product} />
                                ))
                            }

                        </Grid>
                }
 

        </Box>
    );
}

export default Recommended;