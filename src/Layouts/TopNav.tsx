import NotificationIcon from "@/components/common/NotificationIcon";
import SearchBox from "@/components/layouts/SearchBox";
import { useHomeContext } from "@/context/HomeContext";
import { Box, Flex } from "@chakra-ui/react"; 
import { AiOutlineShopping, AiOutlineMessage } from "react-icons/ai";


const TopNav = () => {
     const {showBackground} = useHomeContext() 
    return ( 
        <Box
            position="fixed"
            top={0}
            width="full"
            overflow={"hidden"}
            zIndex={3}
            transition=  "background-color 200ms ease-in"
            backgroundColor={showBackground ? "white" : "transparent"}
            padding={6} 
            boxShadow={showBackground ? "rgba(149, 157, 165, 0.2) 0px 8px 24px" : ""}
        >
            <Flex>
                <SearchBox />
                <NotificationIcon Icon={AiOutlineShopping} > 1</NotificationIcon>
                <NotificationIcon Icon={AiOutlineMessage} > 9</NotificationIcon>
            </Flex>
        </Box>
    );
}



export default TopNav