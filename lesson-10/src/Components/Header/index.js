import { Button, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.svg'

const Header = ({ search, all }) => {
    const [name, setName] = useState('')
    return (
        <header>
            <Stack spacing={2}
                direction='row'
                justifyContent={'center'}
                alignItems='center'
            >
                <Link to='/'>
                    <img onClick={all} width={100} src={logo} alt='' />
                </Link>
                <h1>Coclail || react</h1>
                <TextField required onChange={(e) => setName(e.target.value)} id='outlined-required' label='Coclail name' />
                <select>
                    <option value='Alcoholic'> алкогольный </option>
                    <option value='Non_Alcoholic'>не алкогольный</option>

                </select>
                <Button onClick={() => search(name)} variant='outlined'>Search</Button>

            </Stack>
        </header>
    );
};

export default Header; 