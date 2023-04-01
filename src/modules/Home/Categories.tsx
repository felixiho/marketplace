import { Box, Text } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import { AiOutlineMenu, AiOutlineApi, AiOutlineBank, AiOutlineVideoCameraAdd, AiOutlineContainer, AiOutlineShake, AiOutlineTags, } from 'react-icons/ai';
import Slider from 'react-slick';
import { IconContext } from "react-icons";
import { colors } from '@/config/chakra';

const Categories = () => {

    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        speed: 500,
        arrows: false,
        autoplaySpeed: 3000,
        cssEase: "linear"
    };
    const allCategories = [
        {
            Icon: AiOutlineMenu,
            name: 'Category'
        },
        {
            Icon: AiOutlineApi,
            name: 'Flight'
        },
        {
            Icon: AiOutlineBank,
            name: 'Bank'
        },
        {
            Icon: AiOutlineVideoCameraAdd,
            name: 'Video'
        },
        {
            Icon: AiOutlineShake,
            name: 'Shake'
        },
        {
            Icon: AiOutlineTags,
            name: 'Tags'
        },
        {
            Icon: AiOutlineContainer,
            name: 'Container'
        },
    ]
    return (
        <Box
            as="section"
            pt={3}
            pb={6}
            px={1}
            bg="white"
            boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"

        >
            <Slider {...settings}>
                {
                    allCategories.map(category =>
                        <Box key={category.name} px="3">
                            <Box backgroundColor="#F0F0F0" py={2} borderRadius="md" >
                                <IconContext.Provider value={{ size: "20px", style: { margin: "0 auto" } }}>
                                    <category.Icon />
                                </IconContext.Provider>
                            </Box>
                                <Text textAlign={"center"} mt={2} color={colors.brand} fontSize="xs">{category.name}</Text>
                        </Box>
                    )
                }
            </Slider>
        </Box>
    );
}


export default Categories;