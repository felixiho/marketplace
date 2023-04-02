import { colors } from '@/config/chakra';
import {
    Box, Flex,
    Progress,
    Text, 
} from '@chakra-ui/react';
import { IconContext, } from "react-icons";
import { AiFillStar } from 'react-icons/ai';


const StarRating = ({val}: any) => {
    return (

        <Flex marginY={"auto"} marginLeft={4} width={"full"} >
            <IconContext.Provider value={{ size: "20px", color: "gold", style: { margin: 'auto' } }}>
                <AiFillStar />
            </IconContext.Provider>
            <Text mx={2} my="auto" color={colors.brand} fontSize="sm">{val/10}</Text>
            <Box width={"70%"} my="auto">
                <Progress value={val*2} colorScheme="green" rounded={"lg"} />
            </Box>
            <Text mx={2} my="auto" fontWeight={"bold"} color="black" fontSize="sm">1.5k</Text>

        </Flex>
    );
}



export default StarRating;