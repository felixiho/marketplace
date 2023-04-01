import { colors } from "@/config/chakra";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";


type CarouselItemType = {
    image: string
    heading: string
}

const CarouselItem = ({ 
    image, heading
}:CarouselItemType) => {
    return (
        <Box 
            height={"280px"}
            padding={6}
            backgroundPosition="center"
            backgroundSize={"cover"}
            backgroundImage={image}> 
            <Flex width={"full"} flexDirection="column" mt={20}>
                <Text color={colors.primary}  fontSize="small" textTransform={"uppercase"} fontWeight={"extrabold"} >#fashion day</Text>
                <Heading color={colors.primary}    fontSize="3xl" textTransform={"uppercase"} fontWeight={"extrabold"}>{heading}</Heading>
                <Text color={colors.brand} fontSize="xs">Discover fashion that suits  <br />to your style</Text>
                <Button color={"white"} background={colors.primary} width={"fit-content"} fontSize="xs" mt={4}>Check this out</Button>
            </Flex>
        </Box>
    );
}
 
    
export default CarouselItem;