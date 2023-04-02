import BottomNav from '@/Layouts/BottomNav'
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


const Product: NextPageWithLayout = () => {
    return (
        <Box my={20} pb={20} as="section" >
            <ImageSelector />
            <ProductInfo />
            <AboutProduct />
            <Description />
            <ShippingInformation />
            <SellerInformation />
            <Ratings />
            <Recommended />
        </Box>
    )
}

Product.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            <ProductNav />
            <ProductBottomNav>
                {page}
            </ProductBottomNav>
        </Layout>
    )
}

export default Product