import React, { useRef, useState } from 'react'
import { Box, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import { store } from '../store';

function Input() {

    const { addToDo } = store()
    let inputRef = useRef(null)

    const formSubmit = (e) => {
        e.preventDefault()
        if (!/[a-z]/gi.test(inputRef.current.childNodes[0].value)) {
            return null
        }
        addToDo(input.value);
        inputRef.current.childNodes[0].value = ''
    }

    return (
        <form onSubmit={formSubmit}>
            <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">To-do</InputLabel>
                <OutlinedInput
                    id="input"
                    type="text"
                    ref={inputRef}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                type='submit'
                                aria-label="toggle password visibility"
                                edge="end"
                            >
                                <SendRoundedIcon />
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Password"
                />
            </FormControl>
        </form>
    )
}

export default Input