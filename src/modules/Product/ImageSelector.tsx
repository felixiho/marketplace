import { colors } from "@/config/chakra";
import { Box, Image, Flex } from "@chakra-ui/react";
import { useState } from "react";




const ImageSelector = () => {
    const images = [
        "https://cdn.shopify.com/s/files/1/0706/1707/1902/products/ZANEROBE-Lowgo-Crew-Sweat-Mauve-Flatlay-01-_1_2048x.jpg?v=1677645901",
        "https://cdn.shopify.com/s/files/1/0706/1707/1902/products/ZANEROBE-Lowgo-Crew-Sweat-Mauve-02_b57fb6f5-893f-4a14-b0f7-eb6bf0ed42a7_2048x.jpg?v=1677645901",
        "https://cdn.shopify.com/s/files/1/0706/1707/1902/products/ZANEROBE-Lowgo-Crew-Mauve-VP-1_1728x.jpg?v=1677645901",
        "https://cdn.shopify.com/s/files/1/0706/1707/1902/products/ZANEROBE-Lowgo-Crew-Mauve-VP-4_2048x.jpg?v=1677645901"
    ]

    const [currentImage, setCurrentImage] = useState(0)

    return (
        <Box position="relative" mt={20} mx={6} borderRadius={4}>
            <Box   >
                <Image src={images[currentImage]} alt="shirt image" objectFit={"cover"} height="330px" width="full" borderRadius={6}/>
            </Box>
            <Flex position={"absolute"} top={4} left={4} direction="column">
                {
                    images.map((image, index) =>
                        <Image cursor={"pointer"} onClick={() => setCurrentImage(index)} mt={2} height={"45px"} src={image} border="1px solid #F0F0F0 " borderRadius={4} />)
                }
            </Flex>
        </Box>
    );
}


export default ImageSelector;