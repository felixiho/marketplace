import NotificationIcon from "@/components/common/NotificationIcon";
import SearchBox from "@/components/layouts/SearchBox";
import { Box, Flex } from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import { AiOutlineShopping, AiOutlineMessage } from "react-icons/ai";


const TopNav = () => {
    const [prevScrollPosition, setPrevScrollPosition] = useState(0)
    const [showBackground, setShowBackground] = useState(false)


    const handleScrollDown = useCallback(() => {
        const currentScrollPosition = window.scrollY 
        if (currentScrollPosition > prevScrollPosition) {
            setShowBackground(true)
        } else {
            setShowBackground(false)
        } 
        setPrevScrollPosition(currentScrollPosition)
    }, [])


    useEffect(() => {
        window.addEventListener("scroll", handleScrollDown, { passive: true })

        return () => window.removeEventListener("scroll", handleScrollDown)
    }, [])


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