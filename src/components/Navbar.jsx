import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Box, useTheme, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List>
      {['Home', 'About', 'Classes', 'Trainers', 'Pricing', 'Contact'].map((text) => (
        <ListItem
          button
          key={text}
          component={Link}
          to={`/${text.toLowerCase()}`}
          onClick={handleDrawerToggle}
          sx={{
            '&:hover': {
              backgroundColor: 'rgba(255, 77, 77, 0.1)',
            },
          }}
        >
          <ListItemText 
            primary={text}
            sx={{
              '& .MuiTypography-root': {
                fontWeight: 'bold',
                fontSize: '1.1rem',
              },
            }}
          />
        </ListItem>
      ))}
    </List>
  );

  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'white', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
      <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, sm: 4 } }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, color: '#ff4d4d' }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            component={Link}
            to="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              color: '#ff4d4d',
            }}
          >
            <FitnessCenterIcon sx={{ fontSize: { xs: 30, sm: 40 }, mr: 1 }} />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                fontSize: { xs: '1.2rem', sm: '1.5rem' },
              }}
            >
              FitTrack
            </Typography>
          </Box>
        </Box>

        {isMobile ? (
          <Drawer
            variant="temporary"
            anchor="right"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              '& .MuiDrawer-paper': {
                width: '100%',
                maxWidth: '300px',
                backgroundColor: 'white',
              },
            }}
          >
            {drawer}
          </Drawer>
        ) : (
          <Box sx={{ display: 'flex', gap: 2 }}>
            {['Home', 'About', 'Classes', 'Trainers', 'Pricing', 'Contact'].map((text) => (
              <Button
                key={text}
                color="inherit"
                component={Link}
                to={`/${text.toLowerCase()}`}
                sx={{
                  color: '#333',
                  fontSize: { xs: '0.8rem', sm: '1rem' },
                  fontWeight: 'bold',
                  '&:hover': {
                    color: '#ff4d4d',
                    backgroundColor: 'transparent',
                  },
                }}
              >
                {text}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 