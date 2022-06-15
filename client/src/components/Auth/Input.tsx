import { Box, Input } from '@chakra-ui/react'
import React from 'react'

interface InputInterface {
    name: any
    label: any
    handleChange: any
    autoFocus?: boolean
    half?: string | null
    type?: any
}

function InputTemp({
    half,
    name,
    handleChange,
    autoFocus,
    type,
}: InputInterface) {
    ;<>
        <Box>
            <Input
                name={name}
                onChange={handleChange}
                type={type}
                autoFocus={autoFocus}
            />
        </Box>
    </>
}

export default Input
