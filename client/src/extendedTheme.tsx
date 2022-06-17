import React from 'react'
import { ColorMode, extendTheme, useColorMode } from '@chakra-ui/react'

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
}
const theme = extendTheme({ config })

export default theme
