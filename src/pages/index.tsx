import BottomNav from '@/Layouts/BottomNav'
import Layout from '@/Layouts/Layout'
import { Box } from '@chakra-ui/react'
import { ReactElement } from 'react'
import { NextPageWithLayout } from './_app'


const Home: NextPageWithLayout = () => {
  return (
    <>
      <Box fontSize={32} fontWeight={500}>Buy New items</Box>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <BottomNav>
        {page}
      </BottomNav>
    </Layout>
  )
}

export default Home