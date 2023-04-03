import BottomNav from '@/Layouts/BottomNav'
import Layout from '@/Layouts/Layout'
import { Box } from '@chakra-ui/react'
import { ReactElement } from 'react'
import { NextPageWithLayout } from './_app'
import TopNav from '@/Layouts/TopNav'


const Settings: NextPageWithLayout = () => {
    return (
        <>
            <Box height="100vh"   pt={24} px={6} fontSize={32} fontWeight={500}> Settings page</Box>
        </>
    )
}

Settings.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            <TopNav />
            <BottomNav>
                {page}
            </BottomNav>
        </Layout>
    )
}

export default Settings