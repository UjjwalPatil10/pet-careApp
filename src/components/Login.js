import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


// TODO remove, this demo shouldn't need to reset the theme.

// const defaultTheme = createTheme();

const Login = () => {
    const navigate = useNavigate()
    const [data, setData] = useState({
        email: "",
        password: ""
    })


    // handle change
    const handleChange = (e) => {
        const value = e.target.value
        const name = e.target.name
        // console.log(value);
        setData((data) => ({
            ...data, [name]: value
        }))


        // console.log("value:", value)
    }



    const handleSubmit = async (event) => {
        event.preventDefault();
        if (data.email === "" || data.password === "") {
            Swal.fire("Please enter all fields");
            return;
        }
        navigate("/home")



    };
    // navigate to register
    const GoToRegister = () => {
        navigate("/register")
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >

                <Typography component="h1" variant="h5">
                    Login here
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>

                    <TextField
                        placeholder='Enter email here'
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        value={data.email}

                        onChange={handleChange}
                        autoComplete="email"
                        autoFocus
                    />

                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        onChange={handleChange}
                        value={data.password}

                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Login
                    </Button>
                    <Button
                        fullWidth
                        sx={{ mt: 2, mb: 2, fontWeight: 600 }}
                        onClick={GoToRegister}
                    >
                        Not a user ? please Register
                    </Button>

                </Box>
            </Box>
        </Container>
    );
}
export default Login