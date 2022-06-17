import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import * as actionType from '../../constants/actionTypes'
import decode from 'jwt-decode'
import {
    useColorMode,
    Flex,
    Button,
    IconButton,
    Heading,
    Spacer,
    chakra,
    color,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { motion } from 'framer-motion'

const Navbar = () => {
    const location = useLocation()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem('profile') as string)
    )

    const logout = () => {
        dispatch({ type: actionType.LOGOUT })
        setUser(null)
        navigate('/auth')
    }
    useEffect(() => {
        const token = user?.token
        if (token) {
            const decodedToken = decode(token) as any
            if (decodedToken.exp * 1000 < new Date().getTime()) logout()
        }
        setUser(JSON.parse(localStorage.getItem('profile') as string))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location])

    const { colorMode, toggleColorMode } = useColorMode()
    const isDark = colorMode === 'dark'
    const [display, changeDisplay] = useState('none')

    return (
        <>
            <chakra.header
                position={'relative'}
                mb={20}
                id="header"
                w="100%"
                borderBottom={'1px'}
                borderColor={isDark ? 'gray.700' : 'gray.300'}
            >
                <Flex px="6" py="5" align="center" justify="space-between">
                    <Flex>
                        <Link to="/">
                            <Heading
                                bgGradient="linear(to-l, #7928CA, #FF0080)"
                                bgClip="text"
                                fontWeight="semibold"
                                fontFamily={'unset'}
                            >
                                Stackchain
                            </Heading>
                        </Link>
                        <Spacer
                            bgColor={isDark ? 'gray.500' : 'gray.800'}
                            bgClip="text"
                            fontSize={10}
                            ml={2}
                        >
                            v 1.0
                        </Spacer>
                    </Flex>
                    <Flex position="absolute" right="1rem" align="center">
                        {/* Desktop */}
                        <Flex display={['none', 'none', 'flex', 'flex']}>
                            {user?.result ? (
                                <motion.div
                                    whileHover={{
                                        scale: 1.1,
                                    }}
                                >
                                    <Button
                                        onClick={logout}
                                        variant="unstyled"
                                        aria-label="login"
                                        my={5}
                                        w="100%"
                                    >
                                        Logout
                                    </Button>
                                </motion.div>
                            ) : (
                                <motion.div
                                    whileHover={{
                                        scale: 1.1,
                                    }}
                                >
                                    <Link to="/auth">
                                        <Button
                                            variant="unstyled"
                                            aria-label="login"
                                            my={5}
                                            mr={5}
                                            w="100%"
                                        >
                                            Launch app
                                        </Button>
                                    </Link>
                                </motion.div>
                            )}
                        </Flex>

                        {/* Mobile */}

                        <IconButton
                            my={5}
                            aria-label="Open Menu"
                            size="md"
                            variant={'unstyled'}
                            icon={<HamburgerIcon></HamburgerIcon>}
                            onClick={() => changeDisplay('flex')}
                            display={['flex', 'flex', 'none', 'none']}
                        />

                        <IconButton
                            ml={3}
                            variant={'unstyled'}
                            aria-label="Toggle Mode"
                            onClick={toggleColorMode}
                        >
                            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                        </IconButton>
                    </Flex>
                    {/* Mobile Content */}
                    <Flex
                        w="100vw"
                        display={display}
                        bgColor={isDark ? 'gray.800' : 'white'}
                        zIndex={20}
                        boxShadow="md"
                        pos="fixed"
                        top="0"
                        left="0"
                        overflowY="auto"
                        flexDir="column"
                    >
                        <Flex justify="flex-end">
                            <IconButton
                                mt={2}
                                mr={2}
                                aria-label="Open Menu"
                                size="md"
                                variant={'unstyled'}
                                icon={<CloseIcon />}
                                onClick={() => changeDisplay('none')}
                            />
                        </Flex>

                        <Flex flexDir="column" align="center">
                            <motion.div
                                whileHover={{
                                    scale: 1.1,
                                }}
                            >
                                <Link to="/">
                                    <Button
                                        variant="unstyled"
                                        aria-label="login"
                                        w="100%"
                                    >
                                        Home
                                    </Button>
                                </Link>
                            </motion.div>
                            {user?.result ? (
                                <motion.div
                                    whileHover={{
                                        scale: 1.1,
                                    }}
                                >
                                    <Button
                                        onClick={logout}
                                        variant="unstyled"
                                        aria-label="login"
                                        my={5}
                                        w="100%"
                                    >
                                        Logout
                                    </Button>
                                </motion.div>
                            ) : (
                                <motion.div
                                    whileHover={{
                                        scale: 1.1,
                                    }}
                                >
                                    <Link to="/auth">
                                        <Button
                                            variant="unstyled"
                                            aria-label="login"
                                            my={5}
                                            w="100%"
                                        >
                                            Launch app
                                        </Button>
                                    </Link>
                                </motion.div>
                            )}
                        </Flex>
                    </Flex>
                </Flex>
            </chakra.header>
        </>
    )
}

export default Navbar
