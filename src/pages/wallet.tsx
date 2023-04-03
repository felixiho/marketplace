import BottomNav from '@/Layouts/BottomNav'
import Layout from '@/Layouts/Layout'
import { Box } from '@chakra-ui/react'
import TopNav from '@/Layouts/TopNav'
import { ReactElement } from 'react'
import { NextPageWithLayout } from './_app'


const Wallet: NextPageWithLayout = () => {
  return (
    <>
    <Box height="100vh"  pt={24} px={6} fontSize={32} fontWeight={500}> Wallet page</Box>
    </>
  )
}

Wallet.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
    <TopNav />
      <BottomNav>
        {page}
      </BottomNav>
    </Layout>
  )
}

export default Wallet