import React from 'react'
import App from './App'
import { createRoot } from 'react-dom/client'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import {
    legacy_createStore as createStore,
    applyMiddleware,
    compose,
} from 'redux'
import thunk from 'redux-thunk'
import reducers from './redux/reducers'
import './index.css'

const store = createStore(reducers, compose(applyMiddleware(thunk)))
const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
}
const theme = extendTheme({ config })

const container = document.getElementById('root')
const root = createRoot(container!)

root.render(
    <Provider store={store}>
        <ChakraProvider theme={theme}>
            <App />
        </ChakraProvider>
    </Provider>
)
