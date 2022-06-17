import {
    Box,
    Button,
    Center,
    Heading,
    Image,
    useColorMode,
} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    const { colorMode } = useColorMode()
    const isDark = colorMode === 'dark'
    return (
        <>
            <Heading
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                bgClip="text"
                fontSize={{ base: '40px', md: '60px', lg: '120px' }}
                mr={20}
                ml={20}
                fontWeight="extrabold"
                textAlign={'center'}
            >
                From a few people to a whole community
            </Heading>
            <Center mt={5} mb={10}>
                <Link to={'./auth'}>
                    <Button
                        border="1px"
                        variant={'ghost'}
                        borderColor={isDark ? 'gray.700' : 'gray.300'}
                        fontWeight="bold"
                        w="44"
                        h="16"
                        rounded="3xl"
                    >
                        Launch app
                    </Button>
                </Link>
            </Center>
        </>
    )
}

export default Hero
