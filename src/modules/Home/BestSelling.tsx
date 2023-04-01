import ProductCard, { ProductCardType } from "@/components/products/ProductCard";
import { colors } from "@/config/chakra";
import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/react";



const BestSelling = () => {
    const allProducts: ProductCardType[] = [
        {
            id: 1,
            images: [
                'https://cdn.shopify.com/s/files/1/0706/1707/1902/products/ZANEROBE-Lowgo-Crew-Sweat-Mauve-Flatlay-01-_1_2048x.jpg?v=1677645901'
            ],
            category: 'Shirt',
            title: "Essential Men's Short-Sleeve Crewneck T-shirt",
            stars: 3.3,
            reviews: 3211,
            price: '$32.90'
        },
        {
            id: 2,
            images: [
                'https://cdn.shopify.com/s/files/1/0706/1707/1902/products/ZANEROBE-Lowgo-Hood-Sweat-Mauve-Flatlay-01-_2_2048x.jpg?v=1677645911'
            ],
            category: 'Shirt',
            title: "Essential Men's Short-Sleeve Crewneck T-shirt",
            stars: 3.3,
            reviews: 3211,
            price: '$32.90'
        },
        {
            id: 3,
            images: [
                'https://cdn.shopify.com/s/files/1/0706/1707/1902/products/ZANEROBE-Lowgo-Crew-Sweat-Fog-Flatlay-01_022b7d5b-8394-4ced-ab1b-3ad56ff9ab35_2048x.jpg?v=1675730907'
            ],
            category: 'Shirt',
            title: "Essential Men's Short-Sleeve Crewneck T-shirt",
            stars: 3.3,
            reviews: 3211,
            price: '$32.90'
        },
        {
            id: 4,
            images: [
                'https://cdn.shopify.com/s/files/1/0706/1707/1902/products/ZANEROBE-Lowgo-Hood-Sweat-Fog-Flatlay-01_2ef50299-095d-49f8-bf0a-1ba5feec322c_2048x.jpg?v=1675731500'
            ],
            category: 'Shirt',
            title: "Essential Men's Short-Sleeve Crewneck T-shirt",
            stars: 3.3,
            reviews: 3211,
            price: '$32.90'
        },
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

    const half = Math.floor(allProducts.length / 2)
    const productSetA = allProducts.slice(0,half)
    const productSetB = allProducts.slice(half, allProducts.length)


    return (
        <Box as="section" backgroundColor={colors.whiteSmoke} py={4} px={6}>
            <Flex width={"full"} justifyContent="space-between" mb={4}>
                <Heading color={colors.primary} fontSize="xl"  >Best Selling Products</Heading>
                <Text color={colors.green} fontWeight="semibold">
                    See more
                </Text>
            </Flex>
            <Grid templateColumns={"repeat(2, 1fr)"} gap={6}>
                {
                    productSetA.map(product => (
                        <ProductCard key={product.id} {...product} />
                    ))
                }

            </Grid>

        </Box>
    );
}

export default BestSelling;