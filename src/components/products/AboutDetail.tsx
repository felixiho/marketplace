import { colors } from "@/config/chakra";
import { Box, Text } from "@chakra-ui/react";


type AboutDetail = {
    descriptionKey: string,
    value: string
} 

const AboutDetail = ({descriptionKey, value}: AboutDetail) => {
    return (
       <Text    color={colors.brand} fontSize="sm" >{descriptionKey}: <Box color="black" fontSize={"md"} ml={2} as="span">{value}</Box> </Text>
    );
}
 

export default AboutDetail;