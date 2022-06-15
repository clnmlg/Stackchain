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
            <chakra.header id="header">
                <Flex
                    w="100%"
                    px="6"
                    py="5"
                    align="center"
                    justify="space-between"
                >
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
                            bgColor={'gray.500'}
                            bgClip="text"
                            fontSize={10}
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
                                        variant="solid"
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
                                            variant="solid"
                                            aria-label="login"
                                            my={5}
                                            w="100%"
                                        >
                                            Sign in
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
                            icon={<HamburgerIcon></HamburgerIcon>}
                            onClick={() => changeDisplay('flex')}
                            display={['flex', 'flex', 'none', 'none']}
                        />

                        <IconButton
                            ml={3}
                            aria-label="Toggle Mode"
                            onClick={toggleColorMode}
                            variant={'ghost'}
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
                        borderWidth={1}
                        boxShadow="md"
                        borderRadius={20}
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
                                        variant="solid"
                                        aria-label="login"
                                        my={5}
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
                                        variant="solid"
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
                                            variant="solid"
                                            aria-label="login"
                                            my={5}
                                            w="100%"
                                        >
                                            Sign in
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
