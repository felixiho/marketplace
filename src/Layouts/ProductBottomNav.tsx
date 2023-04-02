import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { ChildrenProps } from "./types";
import {   AiOutlineShopping } from "react-icons/ai";
import { useEffect, useState } from "react"; 
import { useRouter } from "next/router";
import { colors } from "@/config/chakra";
import { IconContext, IconType } from "react-icons";



const ProductBottomNav = ({ children }: ChildrenProps) => {
    const router = useRouter()
    const [active, setActive] = useState("home")

    useEffect(() => {
        const path = router.route.slice(1)
        setActive(path ? path : "home")
    }, [])

    useEffect(() => {
        const handleRouteChange = (url: string) => {
            const newRoute = url.slice(1)
            setActive(newRoute ? newRoute : "home")
        }
        router.events.on('routeChangeStart', handleRouteChange)
        return () => {
            router.events.off('routeChangeStart', handleRouteChange)
        }
    }, [router])


    return (
        <Box>
            {children}
            <Box
                position="fixed"
                bottom={0}
                width="full"
                overflow={"hidden"}
                background="white"
                zIndex={3}
                padding={4}
                boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
            >
                <Flex
                    width={'full'}
                    justifyContent="space-between"
                    marginY={"auto"}
                >
                    <Box>
                        <Text mt={2} color={colors.brand} fontSize="xs">Total Price</Text>
                        <Text color={colors.green} fontSize="2xl" fontWeight="semibold">
                            $18.00
                        </Text>
                    </Box>
                    <Flex 
                    marginY={"auto"}>
                        <Flex backgroundColor={colors.green} padding={3}  marginY="auto" borderTopLeftRadius={6} borderBottomLeftRadius={6} >
                            <IconContext.Provider value={{ size: "30px", color: "white" }}>
                                <AiOutlineShopping />
                            </IconContext.Provider>
                            <Text fontSize="lg" color="white" marginY="auto" marginLeft={2}>1</Text>
                        </Flex>
                        <Button height={"54px"} color={"white"} background={colors.primary}  borderTopLeftRadius={0} borderBottomLeftRadius={0} paddingX={8}>Buy Now</Button>

                    </Flex>
                </Flex>
            </Box>
        </Box>
    );
}


export default ProductBottomNav;