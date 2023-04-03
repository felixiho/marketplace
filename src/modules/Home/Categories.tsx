import { Box, Text } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import { AiOutlineMenu, AiOutlineApi, AiOutlineBank, AiOutlineGlobal, AiOutlineDribbble, AiOutlineVideoCameraAdd, AiOutlineContainer, AiOutlineShake, AiOutlineTags, } from 'react-icons/ai';
import Slider from 'react-slick';
import { IconContext } from "react-icons";
import { colors } from '@/config/chakra';
import { useState } from 'react';

const Categories = () => {
    const [current, setCurrent] = useState(0)

    const settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        arrows: false,
        autoplaySpeed: 4000,
        cssEase: "linear",
        beforeChange: (oldIndex: number, newIndex: number) => {
            setCurrent(newIndex)
        }
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
            name: 'Contain'
        },
        {
            Icon:AiOutlineDribbble,
            name: 'Dribble'
        },
        {
            Icon: AiOutlineGlobal,
            name: 'Global'
        }
    ]
    return (
        <Box
            as="section"
            pt={3}
            pb={4}
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
            <Box display={"flex"} mt={6} w="full" justifyContent={"center"}>
                {
                    allCategories.map((category, index) => <Box key={category.name} as="div" rounded={2} height={1} mx={0.5} bgColor={index === current ? colors.primary : colors.brand} width={index === current ? 4 : 1}  > </Box>)
                }
            </Box>
        </Box>
    );
}


export default Categories;