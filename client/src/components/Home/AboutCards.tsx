import { Flex, Icon, Box, chakra, Stack } from '@chakra-ui/react'
import React from 'react'

const AboutCard = () => {
    const Feature = (props: any) => {
        return (
            <Flex>
                <Flex shrink={0}>
                    <Flex
                        alignItems="center"
                        justifyContent="center"
                        h={12}
                        w={12}
                        rounded="md"
                        shadow="dark-lg"
                        border="1px"
                        borderColor={' #FF0080'}
                    >
                        <Icon
                            boxSize={6}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            {props.icon}
                        </Icon>
                    </Flex>
                </Flex>
                <Box ml={4}>
                    <chakra.dt fontSize="lg" fontWeight="medium" lineHeight="6">
                        {props.title}
                    </chakra.dt>
                    <chakra.dd mt={2} color="gray.500">
                        {props.children}
                    </chakra.dd>
                </Box>
            </Flex>
        )
    }

    return (
        <Flex
            border={'1px'}
            shadow="dark-lg"
            borderColor={' #FF0080'}
            borderRadius={'md'}
            m={5}
            w="auto"
            justifyContent="center"
            alignItems="center"
        >
            <Box
                py={12}
                _dark={{
                    bg: 'gray.800',
                }}
                rounded="xl"
            >
                <Box
                    maxW="7xl"
                    mx="auto"
                    px={{
                        base: 4,
                        lg: 8,
                    }}
                >
                    <Box
                        textAlign={{
                            lg: 'center',
                        }}
                    >
                        <chakra.h2
                            _light={{
                                color: 'brand.600',
                            }}
                            fontWeight="semibold"
                            textTransform="uppercase"
                            letterSpacing="wide"
                        >
                            Stackchain
                        </chakra.h2>
                        <chakra.p
                            mt={2}
                            fontSize={{
                                base: '3xl',
                                sm: '4xl',
                            }}
                            lineHeight="8"
                            fontWeight="extrabold"
                            letterSpacing="tight"
                            _light={{
                                color: 'gray.900',
                            }}
                        >
                            A better way to share knowledge
                        </chakra.p>
                        <chakra.p
                            mt={4}
                            maxW="2xl"
                            fontSize="xl"
                            mx={{
                                lg: 'auto',
                            }}
                            color="gray.500"
                        >
                            Stackchain is a free open source crypto
                            communication platform for investors
                        </chakra.p>
                    </Box>

                    <Box mt={10}>
                        <Stack
                            spacing={{
                                base: 10,
                                md: 0,
                            }}
                            display={{
                                md: 'grid',
                            }}
                            gridTemplateColumns={{
                                md: 'repeat(2,1fr)',
                            }}
                            gridColumnGap={{
                                md: 8,
                            }}
                            gridRowGap={{
                                md: 10,
                            }}
                        >
                            <Feature
                                title="Consolidate technologies and improve governance"
                                icon={
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                                    />
                                }
                            >
                                Everyone including developers & crypto investors
                                share their public stacks, favorite tools,
                                advices, and opinions on thousands of blockchain
                                technologies and crypto assets.
                            </Feature>

                            <Feature
                                title="Open DAO"
                                icon={
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                                    />
                                }
                            >
                                Empower everyone to make data-driven investment
                                decisions.
                            </Feature>

                            <Feature
                                title="Realtime tracking"
                                icon={
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M13 10V3L4 14h7v7l9-11h-7z"
                                    />
                                }
                            >
                                Ask for advice, contribute your expertise, and
                                stay current with the latest blockchain trends.
                            </Feature>

                            <Feature
                                title="Mobile notifications"
                                icon={
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                                    />
                                }
                            >
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Maiores impedit perferendis
                                suscipit eaque, iste dolor cupiditate blanditiis
                                ratione.
                            </Feature>
                        </Stack>
                    </Box>
                </Box>
            </Box>
        </Flex>
    )
}

export default AboutCard
