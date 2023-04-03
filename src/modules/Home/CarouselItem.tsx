import { colors } from "@/config/chakra";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useEffect } from "react";


type CarouselItemType = {
    id: number
    image: string
    heading: string
    current: number
}

const CarouselItem = ({
    image, heading, id, current
}: CarouselItemType) => {
 
    return (
        <Box
            height={"270px"}
            padding={6}
            backgroundPosition="center"
            backgroundSize={"cover"}
            backgroundImage={image}>
            <Flex width={"full"} flexDirection="column" mt={20}>
                <Flex width={"full"} justifyContent="space-between" >
                    <Text color={colors.primary} fontSize="small" textTransform={"uppercase"} fontWeight={"extrabold"} >#fashion day</Text>
                    <Box display={"flex"}>
                        {
                            [1, 2].map(num => <Box key={num} as="div" rounded={2} height={1} mx={0.5} bgColor={num === current ? colors.primary: colors.brand} width={num === current ? 4 : 1}  > </Box>)
                        }
                    </Box>
                </Flex>
                <Heading color={colors.primary} fontSize="3xl" textTransform={"uppercase"} fontWeight={"extrabold"}>{heading}</Heading>
                <Text color={colors.brand} fontSize="xs">Discover fashion that suits  <br />to your style</Text>
                <Button color={"white"} background={colors.primary} width={"fit-content"} fontSize="xs" mt={4}>Check this out</Button>
            </Flex>
        </Box>
    );
}


export default CarouselItem;