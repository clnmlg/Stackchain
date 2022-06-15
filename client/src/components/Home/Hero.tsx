import {
    Box,
    Button,
    Flex,
    Heading,
    Spacer,
    useMediaQuery,
} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <Flex display={'flex'} justifyContent={'center'} mt="20">
            <Heading
                m={'10'}
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                bgClip="text"
                fontSize={{
                    base: '50px',
                    md: '50px',
                    lg: '70px',
                }}
                fontWeight="extrabold"
                mb={'5'}
            >
                From a few people to a whole community.
            </Heading>
        </Flex>
    )
}

export default Hero
