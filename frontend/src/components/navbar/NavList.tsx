import { Box, List, ListItem, ListItemText, ListItemButton } from '@mui/material';

interface NavListProps {
    setOpen: (value: boolean) => void;
    NavLink: React.ElementType;
    navLinks: { title: string, path: string }[];
}

export const NavList = ({ setOpen, NavLink, navLinks }: NavListProps) => {
    return (
        <Box sx={{ width: '100vh', alignItems: 'center' }}>
            <nav>
                <List>
                    {navLinks.map((link, index) => (
                        <ListItem disablePadding key={index}>
                            <ListItemButton
                                component={NavLink}
                                to={link.path}
                                onClick={() => setOpen(false)}
                            >
                                <ListItemText primary={link.title} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </nav>
        </Box>
    );
};