import BottomNav from '@/Layouts/BottomNav'
import Layout from '@/Layouts/Layout'
import { Box } from '@chakra-ui/react'
import { ReactElement } from 'react'
import { NextPageWithLayout } from './_app'
import TopNav from '@/Layouts/TopNav'
import ProductNav from '@/Layouts/ProductNav'


const Product: NextPageWithLayout = () => {
    return (
        <>
            <Box height="100vh" fontSize={32} fontWeight={500}>view product here</Box>
        </>
    )
}

Product.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            <ProductNav />
            <BottomNav>
                {page}
            </BottomNav>
        </Layout>
    )
}

export default Product