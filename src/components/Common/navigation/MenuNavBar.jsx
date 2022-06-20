import React from 'react';
import {AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography} from "@mui/material";
import TheatersIcon from '@mui/icons-material/Theaters';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";
import {useCheckAuth} from "../../../hooks/useCheckAuth";
import {useDispatch} from "react-redux";
import {logout, logoutFromFirebase} from "../../../redux/reducers/auth";

const pages = [
    {
        path: '/',
        label: 'Home'
    },
    // {
    //     path: '/candy-store',
    //     label: 'Dulceria'
    // },
];

const MenuNavBar = () => {
    const navigate = useNavigate();
    const status = useCheckAuth();
    const dispatch = useDispatch();
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = (e) => {
        setAnchorElNav(null);
    };

    const onLogout = (event) => {
        event.preventDefault();
        dispatch(logoutFromFirebase());
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <TheatersIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            LOGO
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
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
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page.label} onClick={e => {
                                        handleCloseNavMenu(e);
                                        navigate(page.path);
                                    }}>
                                        <Typography textAlign="center">{page.label}</Typography>
                                    </MenuItem>
                                ))}
                                {status === 'invite'
                                    ? <MenuItem
                                        onClick={e => navigate("/auth/login")}>
                                        <Typography
                                            textAlign="center">
                                            Login
                                        </Typography>
                                    </MenuItem>
                                    :<MenuItem onClick={onLogout}>
                                        <Typography
                                            textAlign="center">
                                            Logout
                                        </Typography>
                                    </MenuItem>
                                }
                            </Menu>
                        </Box>
                        <TheatersIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            LOGO
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page.label}
                                    onClick={e => {
                                        handleCloseNavMenu(e);
                                        navigate(page.path);
                                    }}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page.label}
                                </Button>
                            ))}
                            {status === 'invite'
                                ?  <Button
                                    onClick={e => navigate('auth/login')}
                                    className="my-2 text-white block"
                                >
                                    Login
                                </Button>
                                : <Button
                                    onClick={onLogout}
                                    className="my-2 text-white block"
                                >
                                    Logout
                                </Button>
                            }
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>

    );
}

export default MenuNavBar;