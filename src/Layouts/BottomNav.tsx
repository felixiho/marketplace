import { Box, Flex } from "@chakra-ui/react";
import { ChildrenProps } from "./types";
import { FaHome, FaRegSun, FaTicketAlt, FaWallet } from "react-icons/fa";
import { useEffect, useState } from "react";
import NavItem from "@/components/layouts/NavItem";
import { useRouter } from "next/router";



const BottomNav = ({ children }: ChildrenProps) => {
    const router = useRouter()
    const [active, setActive] = useState("home")
    const navigation = [
        { id: 1, name: "home", path: "/", icon: FaHome },
        { id: 2, name: "voucher", path: "/voucher", icon: FaTicketAlt },
        { id: 3, name: "wallet", path: "/wallet", icon: FaWallet },
        { id: 4, name: "settings", path: "/settings", icon: FaRegSun }
    ]

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
        <Box background="azure">
            {children}
            <Box
                position="fixed"
                bottom={0}
                width="full"
                overflow={"hidden"}
                background="white"
                padding={4}
            >
                <Flex
                    width={'full'}
                    justifyContent="space-around"
                >
                    {
                        navigation.map(nav => <NavItem path={nav.path} key={nav.id} name={nav.name} Icon={nav.icon} isActive={active === nav.name} />)
                    }

                </Flex>
            </Box>
        </Box>
    );
}


export default BottomNav;