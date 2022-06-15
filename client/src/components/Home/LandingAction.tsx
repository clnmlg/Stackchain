import { Box, chakra, Flex, Stack, Image, Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const LandingAction = () => {
    return (
        <Flex
            direction={{
                base: 'column',
                md: 'row',
            }}
            _light={{
                bg: 'brand.500',
            }}
            px={8}
            py={24}
            mx="auto"
        >
            <Box
                w={{
                    base: 'full',
                    md: 11 / 12,
                    xl: 9 / 12,
                }}
                mx="auto"
                pr={{
                    md: 20,
                }}
            >
                <chakra.h2
                    fontSize={{
                        base: '3xl',
                        sm: '4xl',
                    }}
                    fontWeight="extrabold"
                    lineHeight="shorter"
                    color="white"
                    _dark={{
                        color: 'gray.100',
                    }}
                    mb={6}
                >
                    <chakra.span display="block">Ready to dive in?</chakra.span>
                    <chakra.span
                        display="block"
                        color="white"
                        _dark={{
                            color: 'gray.500',
                        }}
                    >
                        Sign up today.
                    </chakra.span>
                </chakra.h2>
                <chakra.p
                    mb={6}
                    fontSize={{
                        base: 'lg',
                        md: 'xl',
                    }}
                    color="gray.100"
                    _dark={{
                        color: 'gray.300',
                    }}
                >
                    Stackchain is a platform which allow users to vote on
                    stacks, publish posts, and complete their blockchain
                    knowledge.
                </chakra.p>
                <Stack
                    direction={{
                        base: 'column',
                        sm: 'row',
                    }}
                    mb={{
                        base: 4,
                        md: 8,
                    }}
                    spacing={2}
                >
                    <Box display="inline-flex" rounded="md" shadow="md">
                        <Link to={'/auth'}>
                            <Button w="200px" variant="solid" h="50px">
                                Enter App
                            </Button>
                        </Link>
                    </Box>
                </Stack>
            </Box>
            <Box
                w={{
                    base: 'full',
                    md: 10 / 12,
                }}
                mx="auto"
                textAlign="center"
            >
                <Image
                    w="full"
                    rounded="lg"
                    shadow="2xl"
                    src="https://kutty.netlify.app/hero.jpg"
                    alt="Hellonext feedback boards software screenshot"
                />
            </Box>
        </Flex>
    )
}

export default LandingAction
