import { HomeProvider } from '@/context/HomeContext'
import BottomNav from '@/Layouts/BottomNav'
import Layout from '@/Layouts/Layout'
import TopNav from '@/Layouts/TopNav'
import BestSelling from '@/modules/Home/BestSelling'
import Carousel from '@/modules/Home/Carousel'
import Categories from '@/modules/Home/Categories'
import { Box } from '@chakra-ui/react'
import { ReactElement } from "react";
import { NextPageWithLayout } from './_app'


const Home: NextPageWithLayout = () => {

  return (
    <Box pb={20} as="section" >
      <Carousel />
      <Categories />
      <BestSelling />
    </Box>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <HomeProvider>
        <TopNav />
        <BottomNav>
          {page}
        </BottomNav>
      </HomeProvider>
    </Layout>

  )
}

export default Home