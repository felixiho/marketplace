import { colors } from '@/config/chakra';
import {
    Box, Heading,
    ListItem, 
    Text, 
    UnorderedList,
} from '@chakra-ui/react';

const Description = () => {
    return (
        <Box mt={6} mx={6} py={10} borderY={"2px"} borderColor={colors.whiteSmoke}>
            <Heading size={"md"} pb={4}> Description: </Heading>
            <UnorderedList color={colors.brand} >
                <ListItem>Lorem ipsum dolor sit amet Facilisis in pretium nisl aliquet</ListItem>
                <ListItem>Consectetur adipiscing elit</ListItem>
                <ListItem>Integer molestie lorem at massa</ListItem>
                <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                <ListItem>Lorem ipsum dolor sit amet Facilisis in pretium nisl aliquet</ListItem>
            </UnorderedList>

            <Text color={colors.brand} mt={4}> Chat with us if there's anything you'd like to know about the product :)</Text>
        </Box>
    );
}


export default Description;