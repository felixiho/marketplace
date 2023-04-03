import Layout from '@/Layouts/Layout'
import { Box } from '@chakra-ui/react'
import { ReactElement } from 'react'
import { NextPageWithLayout } from './_app'
import ProductBottomNav from '@/Layouts/ProductBottomNav'
import ProductNav from '@/Layouts/ProductNav'
import ImageSelector from '@/modules/Product/ImageSelector'
import ProductInfo from '@/modules/Product/ProductInfo'
import AboutProduct from '@/modules/Product/AboutProduct'
import Description from '@/modules/Product/Description'
import ShippingInformation from '@/modules/Product/ShippingInformation'
import SellerInformation from '@/modules/Product/SellerInformation'
import Ratings from '@/modules/Product/Ratings'
import Recommended from '@/modules/Product/Recommended'
import { HomeProvider } from '@/context/HomeContext'



const Product: NextPageWithLayout = () => {
    return (
        <Box my={20} as="section" height="90vh" scrollSnapType={"y mandatory"} overflowY="scroll">
            <Box height={"90vh"} scrollSnapAlign="center">
                <ImageSelector />
                <ProductInfo />
                <AboutProduct />
            </Box>
            <Box height={"90vh"} scrollSnapAlign="center">
                <Description />
                <ShippingInformation />
            </Box>
            <Box height={"90vh"} scrollSnapAlign="center">
                <SellerInformation />
                <Ratings />
            </Box>
            <Box height={"90vh"} scrollSnapAlign="center"  >
                <Recommended />
            </Box>
        </Box>
    )
}

Product.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            <HomeProvider>
                <ProductNav />
                <ProductBottomNav>
                    {page}
                </ProductBottomNav>
            </HomeProvider>
        </Layout>
    )
}

export default Product