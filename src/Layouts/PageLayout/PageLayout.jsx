import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { Box, Flex } from '@chakra-ui/react'

const PageLayout = ({children}) => {
  return (
    <Flex>
        {/* Sidebar on the left */}
        <Box w={{base:'70px',md:'240px'}}>
            <Sidebar />
        </Box>
        {/* page content on thr right */}
        <Box>
            {children}
        </Box>
    </Flex>
  )
}

export default PageLayout