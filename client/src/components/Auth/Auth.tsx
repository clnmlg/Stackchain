import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { signin, signup } from '../../redux/actions/auth'
import InputTemp from './Input'
import {
    Box,
    SimpleGrid,
    GridItem,
    chakra,
    Center,
    Flex,
    Button,
    Heading,
    useColorMode,
    HStack,
    Stack,
    useBreakpointValue,
    Text,
} from '@chakra-ui/react'

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

function Auth() {
    const { colorMode, toggleColorMode } = useColorMode()
    const isDark = colorMode === 'dark'
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [isSignup, setIsSignup] = useState(false)
    const [formData, setFormData] = useState(initialState)

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup)
    }

    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        if (isSignup) {
            dispatch<any>(signup(formData, navigate))
        } else {
            dispatch<any>(signin(formData, navigate))
        }
    }

    const handleChange = (e: { target: { name: any; value: any } }) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <>
            <Box px={8} mx="auto">
                <SimpleGrid
                    alignItems="center"
                    w={{
                        base: 'full',
                        xl: 11 / 12,
                    }}
                    columns={{
                        base: 1,
                        lg: 11,
                    }}
                    gap={{
                        base: 0,
                        lg: 24,
                    }}
                    mx="auto"
                >
                    <GridItem
                        colSpan={{
                            base: 'auto',
                            lg: 7,
                        }}
                        textAlign={{
                            base: 'center',
                            lg: 'left',
                        }}
                    >
                        <Heading
                            bgGradient="linear(to-l, #7928CA, #FF0080)"
                            bgClip="text"
                            fontSize={{
                                sm: '5xl',
                                md: '7xl',
                                lg: '8xl',
                            }}
                            fontWeight="bold"
                            letterSpacing={{
                                base: 'normal',
                                md: 'tight',
                            }}
                        >
                            Ready to stack?
                        </Heading>
                        <chakra.p
                            mb={{
                                base: 10,
                                md: 4,
                            }}
                            fontSize={{
                                base: 'lg',
                                md: 'xl',
                            }}
                            fontWeight="thin"
                            color="gray.500"
                            letterSpacing="wider"
                        >
                            Stack make users feels like they're in the same
                            room. Create stacks, discuss with people and expand
                            your knowledge about blockchain.
                        </chakra.p>
                    </GridItem>
                    <GridItem
                        colSpan={{
                            base: 'auto',
                            md: 4,
                        }}
                    >
                        <Box
                            as="form"
                            onSubmit={handleSubmit}
                            mb={6}
                            rounded="xl"
                            shadow="lg"
                            border="1px"
                            borderColor={isDark ? 'gray.700' : 'gray.500'}
                        >
                            <Center
                                pb={0}
                                mt={2}
                                color={isDark ? 'gray.500' : 'gray.500'}
                            >
                                {isSignup ? (
                                    <Heading>Signup</Heading>
                                ) : (
                                    <Heading>Login</Heading>
                                )}
                            </Center>
                            <SimpleGrid columns={1} px={6} py={4} spacing={4}>
                                {isSignup && (
                                    <>
                                        <Flex>
                                            <InputTemp
                                                border={'1px'}
                                                borderColor={
                                                    isDark
                                                        ? 'gray.700'
                                                        : 'gray.500'
                                                }
                                                autoFocus
                                                onChange={handleChange}
                                                name="firstName"
                                                placeholder="First Name"
                                                mt={0}
                                            />
                                        </Flex>
                                        <Flex>
                                            <InputTemp
                                                border={'1px'}
                                                borderColor={
                                                    isDark
                                                        ? 'gray.700'
                                                        : 'gray.500'
                                                }
                                                autoFocus
                                                onChange={handleChange}
                                                name="lastName"
                                                placeholder="Last Name"
                                                mt={0}
                                            />
                                        </Flex>
                                    </>
                                )}
                                <Flex>
                                    <InputTemp
                                        border={'1px'}
                                        borderColor={
                                            isDark ? 'gray.700' : 'gray.500'
                                        }
                                        autoFocus
                                        onChange={handleChange}
                                        name="email"
                                        type="email"
                                        placeholder="Email"
                                        mt={0}
                                    />
                                </Flex>
                                <Flex>
                                    <InputTemp
                                        border={'1px'}
                                        borderColor={
                                            isDark ? 'gray.700' : 'gray.500'
                                        }
                                        autoFocus
                                        onChange={handleChange}
                                        name="password"
                                        type="password"
                                        placeholder="Password"
                                        mt={0}
                                    />
                                </Flex>
                                {isSignup && (
                                    <Flex>
                                        <InputTemp
                                            border={'1px'}
                                            borderColor={
                                                isDark ? 'gray.700' : 'gray.500'
                                            }
                                            autoFocus
                                            onChange={handleChange}
                                            name="confirmPassword"
                                            type="password"
                                            placeholder="Confirm Password"
                                            mt={0}
                                        />
                                    </Flex>
                                )}

                                <Button
                                    type="submit"
                                    border={'1px'}
                                    borderColor={
                                        isDark ? 'gray.700' : 'gray.500'
                                    }
                                    textColor={'#555D6D'}
                                    variant="ghost"
                                    w="full"
                                    py={2}
                                >
                                    {isSignup ? 'Signup' : 'Login'}
                                </Button>
                                <Button
                                    textColor={'#555D6D'}
                                    variant="outlined"
                                    w="full"
                                    py={2}
                                    onClick={switchMode}
                                >
                                    {isSignup
                                        ? 'Already have an account? Login'
                                        : "Don't have an account? Sign Up"}
                                </Button>
                            </SimpleGrid>
                        </Box>
                    </GridItem>
                </SimpleGrid>
            </Box>
        </>
    )
}

export default Auth
