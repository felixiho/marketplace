import NotificationIcon from "@/components/common/NotificationIcon";
import SearchBox from "@/components/layouts/SearchBox";
import { useHomeContext } from "@/context/HomeContext";
import { Box, Flex } from "@chakra-ui/react";
import { AiOutlineShopping, AiOutlineLeft, AiOutlineShareAlt, AiFillHeart } from "react-icons/ai";
import { IconContext, IconType } from "react-icons";
import { colors } from "@/config/chakra";
import HeaderIcon from "@/components/common/HeaderIcon";


const ProductNav = () => {
    const { showBackground } = useHomeContext()
    return (
        <Box
            position="fixed"
            top={0}
            width="full"
            overflow={"hidden"}
            zIndex={3}
            transition="background-color 200ms ease-in"
            backgroundColor={"white"}
            padding={6}
            boxShadow={showBackground ? "rgba(149, 157, 165, 0.2) 0px 8px 24px" : ""}
        >
            <Flex justifyContent={"space-between"}>
                <IconContext.Provider value={{ size: "30px", }}>
                    <AiOutlineLeft />
                </IconContext.Provider>
                <Flex> 
                    <HeaderIcon Icon={AiFillHeart} />
                    <HeaderIcon Icon={AiOutlineShareAlt} useDefaultColor={true} />
                    <NotificationIcon Icon={AiOutlineShopping} >1 </NotificationIcon>

                </Flex>
            </Flex>
        </Box>
    );
}



export default ProductNav