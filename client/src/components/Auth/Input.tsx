import React, { HTMLInputTypeAttribute } from 'react'
import { TextField, Grid, InputAdornment, IconButton } from '@material-ui/core'
import Visibiliby from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

interface InputInterface {
    name: string
    label: string
    handleChange: any
    autoFocus?: boolean
    half?: string | null
    type?: any
    handleShowPassword?: any
}

function Input({
    half,
    name,
    label,
    handleChange,
    autoFocus,
    type,
    handleShowPassword,
}: InputInterface) {
    return (
        <Grid item xs={12} sm={half ? 6 : 12}>
            <TextField
                name={name}
                onChange={handleChange}
                variant="outlined"
                required
                fullWidth
                label={label}
                autoFocus={autoFocus}
                type={type}
                // @ts-ignore
                InputProps={
                    name === 'password'
                        ? {
                              endAdornment: (
                                  <InputAdornment position="end">
                                      <IconButton onClick={handleShowPassword}>
                                          {type === 'password' ? (
                                              <Visibiliby />
                                          ) : (
                                              <VisibilityOff />
                                          )}
                                      </IconButton>
                                  </InputAdornment>
                              ),
                          }
                        : null
                }
            />
        </Grid>
    )
}

export default Input
