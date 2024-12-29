import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PersonIcon from '@mui/icons-material/Person';
import { IconButton } from "../iconButton/IconButton"
import { AppBar, Box, Toolbar, Typography } from '@mui/material';

export const Header = () => {
  return (
    <header>
      <Box sx={{ width: '100%' }}>
        <AppBar position='static' color='primary' sx={{ backgroundColor: '#ffffff', color: '#000000' }}>
          <Toolbar>
            <Typography
              variant='h5'
              noWrap
              component={'div'}
              sx={{ display: { xs: 'none', sm: 'block' } }}
            >
              Butikk
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton
                size="medium"
                color="inherit"
                icon={<PersonIcon />}
              />
              <IconButton
                size="medium"
                color="inherit"
                icon={<ShoppingBagIcon />}
              />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  )
}

