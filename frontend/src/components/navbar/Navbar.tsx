import { AppBar, Box, Drawer, Toolbar, Typography } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import MenuIcon from '@mui/icons-material/Menu'
import { NavList } from './NavList'
import { IconButton } from '../iconButton/IconButton'
import { useState } from 'react'
import Logo from '../../assets/images/logo.png'
import { NavLink } from 'react-router-dom'

const navLinks = [
    { title: 'Categories', path: '/categories' },
    { title: 'Lamps', path: '/categories/lamps' },
    { title: 'Chairs', path: '/categories/chairs' },
]

const navIconsButtons = [
    { icon: <PersonIcon /> },
    { icon: <ShoppingBagIcon /> },
]

export const Navbar = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <AppBar position='fixed' color='primary' sx={{ backgroundColor: '#ffffff', color: '#000000', boxShadow: '0 4px 5px -5px #0000003b' }}>
                <Toolbar>
                    <img src={Logo} alt="logo" loading='lazy' width={50} style={{ filter: "drop-shadow(0 0 2px rgba(74,74,74,0.3))" }} />
                    <Typography
                        variant='h1'
                        component={NavLink}
                        to={"/"}
                        sx={{ color: 'inherit', textDecoration: 'none', margin: '0 10px', "&:hover": { textDecoration: 'underline' } }}

                    >
                        Butikk
                    </Typography>

                    <Box sx={{ flexGrow: 1 }} />

                    {navLinks.map((link, index) => (
                        <Typography
                            key={index}
                            variant='h5'
                            component={NavLink}
                            to={link.path}
                            sx={{ color: 'inherit', textDecoration: 'none', margin: '0 10px', "&:hover": { textDecoration: 'underline' }, display: { xs: 'none', sm: 'flex' } }}

                        >
                            {link.title}
                        </Typography>
                    ))}

                    {navIconsButtons.map((button, index) => (
                        <IconButton
                            key={index}
                            size="medium"
                            color="inherit"
                            icon={button.icon}
                            sx={{ border:"1px solid #777777", borderRadius:"30%", margin: '0 5px'}}
                        />
                    ))}

                    <IconButton
                        size="medium"
                        color="inherit"
                        onClick={() => setOpen(true)}
                        icon={<MenuIcon />}
                        sx={{ display: { xs: 'flex', sm: 'none' }}}
                    />
                </Toolbar>
            </AppBar>

            <Drawer
                open={open}
                anchor="left"
                onClose={() => setOpen(false)}
            >
                <NavList
                    NavLink={NavLink}
                    setOpen={setOpen}
                    navLinks={navLinks}
                />
            </Drawer>
        </>
    )
}

