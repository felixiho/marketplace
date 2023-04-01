import BottomNav from '@/Layouts/BottomNav'
import Layout from '@/Layouts/Layout'
import TopNav from '@/Layouts/TopNav'
import Carousel from '@/modules/Home/Carousel' 
import { Box } from '@chakra-ui/react'
import { ReactElement } from 'react'
import { NextPageWithLayout } from './_app'


const Home: NextPageWithLayout = () => {
  return ( 
      <Box height="100vh" as="section" > 
        <Carousel />
      </Box> 
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <TopNav />
      <BottomNav>
        {page}
      </BottomNav>
    </Layout>
  )
}

export default Home