import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getPosts } from '../../redux/actions/posts'

import Posts from '../Posts/Posts'
import Form from '../Form/Form'
import Hero from './Hero'
import { Box, GridItem, Heading } from '@chakra-ui/react'
import AboutCard from './AboutCards'
import LandingAction from './LandingAction'

const Home = () => {
    const [currentId, setCurrentId] = useState(null)
    const token = localStorage.getItem('profile') as string

    const user = JSON.parse(token)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch<any>(getPosts())
    }, [currentId, dispatch])

    return (
        <>
            {user === null ? (
                <>
                    <Hero />
                    <AboutCard />
                    <LandingAction />
                </>
            ) : (
                <>
                    <GridItem>
                        <Posts setCurrentId={setCurrentId} />
                    </GridItem>
                </>
            )}
        </>
    )
}

export default Home

// LISTE DES POSTS

// FORMULAIRE DE CREATION
// <Form
// currentId={currentId}
// setCurrentId={setCurrentId}
// />
