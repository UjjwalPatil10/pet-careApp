import React from "react"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, useNavigate } from "react-router-dom";
import "./hover.css"
const Header = () => {
    const navigate = useNavigate()
    const GoToLogin = () => {
        navigate("/login")
    }

    return (
        <AppBar position="sticky" style={{ backgroundColor: "#262424" }}>
            <Toolbar >
                {/* <Typography variant="h5">User Authentication</Typography> */}
                <Box display={"flex"} >
                    <Button className="btn bg-danger" LinkComponent={Link} to="/home" sx={{ margin: 1, color: "white", fontWeight: 400 }}>Home</Button>
                    <Button className="btn" LinkComponent={Link} to="/userprofile" sx={{ margin: 1, color: "white", fontWeight: 400 }}>User Profile</Button>
                    <Button className="btn" LinkComponent={Link} to="/petdetails" sx={{ margin: 1, color: "white", fontWeight: 400 }}>Pet Details</Button>
                    <Button className="btn" LinkComponent={Link} to="/petcare" sx={{ margin: 1, color: "white", fontWeight: 400 }}>Pet Care Tips</Button>
                    <Button className="btn" LinkComponent={Link} to="/aboutUs" sx={{ margin: 1, color: "white", fontWeight: 400 }}>About</Button>
                    <Button className="btn" LinkComponent={Link} to="/contactUs" sx={{ margin: 1, color: "white", fontWeight: 400 }}>Contact</Button>

                </Box>
                <Box display={"flex"} style={{ marginLeft: "auto" }}>
                    <Button LinkComponent={Link} to="/login" sx={{ margin: 1, color: "white", fontWeight: 400 }}>Login</Button>
                    <Button className="btn bg-info text-black font-fw-bold " LinkComponent={Link} to="/Register" sx={{ margin: 1, color: "white", fontWeight: 400 }}>Sign Up</Button>
                    <Button className="btn bg-success" onClick={GoToLogin} LinkComponent={Link} to="/login" sx={{ margin: 1, color: "white", fontWeight: 400 }}>Logout</Button>
                </Box>
            </Toolbar>

        </AppBar>

    );
}

export default Header