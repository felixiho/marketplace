import { colors } from '@/config/chakra';
import { Box, Text } from '@chakra-ui/react';
import { Link } from '@chakra-ui/next-js'
import { IconContext, IconType } from 'react-icons';

type NavItemType = {
    Icon: IconType
    name: string
    isActive: boolean
    path: string
}
const NavItem = ({
    Icon, name, isActive,path
}: NavItemType) => {
    return (
        <Box cursor={"pointer"} >
            <Link href={path} color='blue.400' _hover={{ color: 'blue.500' }}>
                <IconContext.Provider value={{ size: "25px", color: (isActive ? colors.green : colors.brand), style: { margin: "0 auto" } }} >
                    <Icon width={"30px"} />
                </IconContext.Provider>
                <Text mt={2} fontSize="small" textTransform={"capitalize"} fontWeight={"extrabold"} color={isActive ? "black" : colors.brand} textAlign={"center"} >{name}</Text>
            </Link>
        </Box>
    );
}


export default NavItem;