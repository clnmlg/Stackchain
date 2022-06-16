import { Flex, Box, chakra, Stack, Image, useColorMode } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const LandingAction = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const isDark = colorMode === 'dark'
    return (
        <>
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
                        color={isDark ? '' : 'gray.600'}
                        mb={6}
                    >
                        <chakra.span display="block">
                            Ready to dive in?
                        </chakra.span>
                        <chakra.span display="block">
                            Start your free trial today.
                        </chakra.span>
                    </chakra.h2>
                    <chakra.p
                        mb={6}
                        fontSize={{
                            base: 'lg',
                            md: 'xl',
                        }}
                        color={isDark ? '' : 'gray.500'}
                    >
                        Hellonext is a feature voting software where you can
                        allow your users to vote on features, publish roadmap,
                        and complete your customer feedback loop.
                    </chakra.p>
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
                        shadow="dark-lg"
                        src={
                            isDark
                                ? 'assets/HeroLandingDark.png'
                                : 'assets/HeroLandingWhite.png'
                        }
                        alt="Hellonext feedback boards software screenshot"
                    />
                </Box>
            </Flex>
        </>
    )
}

export default LandingAction
