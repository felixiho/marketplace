import BottomNav from '@/Layouts/BottomNav'
import Layout from '@/Layouts/Layout'
import { Box } from '@chakra-ui/react'
import { ReactElement } from 'react'
import { NextPageWithLayout } from './_app'


const Voucher: NextPageWithLayout = () => {
  return (
    <>
      <Box height="100vh" fontSize={32} fontWeight={500}>Buy Voucher items</Box>
    </>
  )
}

Voucher.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <BottomNav>
        {page}
      </BottomNav>
    </Layout>
  )
}

export default Voucher