import React from 'react';
import {AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography} from "@mui/material";
import TheatersIcon from '@mui/icons-material/Theaters';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";

const pages = [
    {
        path: '/',
        label: 'Home'
    },
    {
        path: '/login',
        label: 'Login'
    },
    {
        path: '/candy-store',
        label: 'Candy Store'
    },
    {
        path: '/payment',
        label: 'Payment'
    }
];

const MenuNavBar = () => {
    const navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = (e, page) => {
        setAnchorElNav(null);
        navigate(page.path);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <TheatersIcon className="sm:hidden md:flex mr-1"/>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        className="mr-2 sm:hidden md:flex font-mono font-bold tracking-widest text-inherit no-underline"
                    >
                        RetoCP
                    </Typography>
                    <Box
                        className="grow sm:flex md:hidden"
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            className="sm:block md:hidden"
                        >
                            {pages.map((page) => (
                                <MenuItem
                                    key={page.path}
                                    onClick={e => handleCloseNavMenu(e, page)}>
                                    <Typography
                                        textAlign="center">
                                        {page.label}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <TheatersIcon
                        className="sm:flex md:hidden mr-1"/>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        className="mr-2 sm:flex md:hidden font-mono font-bold tracking-widest text-inherit no-underline"
                    >
                        RetoCP
                    </Typography>
                    <Box
                        className="grow sm:hidden md:flex">
                        {pages.map((page) => (
                            <Button
                                key={page.path}
                                onClick={e => handleCloseNavMenu(e, page)}
                                className="my-2 text-white block"
                            >
                                {page.label}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default MenuNavBar;