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
    const [isLargerThanLG] = useMediaQuery('(min-width: 62em)')
    return (
        <Flex
            alignItems="center"
            w="full"
            px={isLargerThanLG ? '16' : '6'}
            py="16"
            justifyContent="space-between"
            flexDirection={isLargerThanLG ? 'row' : 'column'}
        >
            <Box
                mr={isLargerThanLG ? '6' : '0'}
                w={isLargerThanLG ? '60%' : 'full'}
            >
                <Heading
                    bgGradient="linear(to-l, #7928CA, #FF0080)"
                    bgClip="text"
                    fontSize={{
                        base: '50px',
                        md: '60px',
                        lg: '70px',
                    }}
                    fontWeight="extrabold"
                    mb={'5'}
                >
                    From a few people to a whole community.
                </Heading>
                <Link to={'/auth'}>
                    <Button
                        w="200px"
                        variant="solid"
                        h="50px"
                        size={isLargerThanLG ? 'lg' : 'md'}
                        mb={isLargerThanLG ? '0' : '10'}
                    >
                        Enter App
                    </Button>
                </Link>
            </Box>
            <Spacer />
        </Flex>
    )
}

export default Hero
