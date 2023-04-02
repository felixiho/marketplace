import { colors } from "@/config/chakra";
import { Flex, Text } from "@chakra-ui/react";
import { IconContext, IconType } from "react-icons";
import { AiOutlineShop, AiFillStar } from "react-icons/ai";
import { RxDotFilled } from "react-icons/rx";



const ProductInfo = () => {
    return (
        <Flex direction={"column"} p={6}>
            <Flex marginY="auto" >
                <IconContext.Provider value={{ size: "20px", color: colors.brand }}>
                    <AiOutlineShop />
                </IconContext.Provider>
                <Text my={"auto"} mx={2} color={colors.brand} fontSize="sm">tokobaju.id</Text>
            </Flex>
            <Text color={colors.primary} fontSize="xl" fontWeight="semibold" > Essential Men's Short-Sleeve Crewneck T-shirt</Text>

            <Flex justifyContent={"space-between"} mt={3}>
                <Flex as="span" my="auto" >
                    <IconContext.Provider value={{ size: "20px", color: "gold", style: { margin: 'auto' } }}>
                        <AiFillStar />
                    </IconContext.Provider>
                    <Text ml={1} color={colors.brand} fontWeight="semibold" fontSize="md">4.9 Ratings</Text>
                </Flex>
                <Flex as="span" my="auto" >
                    <IconContext.Provider value={{ size: "20px", color: colors.brand, style: { margin: 'auto' } }}>
                        <RxDotFilled />
                    </IconContext.Provider>
                    <Text ml={1} color={colors.brand} fontWeight="semibold" fontSize="md">2.3K+ Reviews</Text>
                </Flex> 
                <Flex as="span" my="auto" >
                    <IconContext.Provider value={{ size: "20px", color: colors.brand, style: { margin: 'auto' } }}>
                        <RxDotFilled />
                    </IconContext.Provider>
                    <Text ml={1} color={colors.brand} fontWeight="semibold" fontSize="md">2.9K Sold</Text>
                </Flex>
            </Flex>

        </Flex>
    );
}

export default ProductInfo;