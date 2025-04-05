import { Box, Container, Typography, IconButton, Link as MuiLink, Grid } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#333',
        color: 'white',
        py: { xs: 4, sm: 6 },
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', fontSize: { xs: '1.1rem', sm: '1.25rem' } }}>
              About Us
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, fontSize: { xs: '0.875rem', sm: '1rem' } }}>
              We are dedicated to helping you achieve your fitness goals through professional training and guidance.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', fontSize: { xs: '1.1rem', sm: '1.25rem' } }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <MuiLink href="/about" color="inherit" sx={{ textDecoration: 'none', fontSize: { xs: '0.875rem', sm: '1rem' } }}>
                About
              </MuiLink>
              <MuiLink href="/classes" color="inherit" sx={{ textDecoration: 'none', fontSize: { xs: '0.875rem', sm: '1rem' } }}>
                Classes
              </MuiLink>
              <MuiLink href="/trainers" color="inherit" sx={{ textDecoration: 'none', fontSize: { xs: '0.875rem', sm: '1rem' } }}>
                Trainers
              </MuiLink>
              <MuiLink href="/contact" color="inherit" sx={{ textDecoration: 'none', fontSize: { xs: '0.875rem', sm: '1rem' } }}>
                Contact
              </MuiLink>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', fontSize: { xs: '1.1rem', sm: '1.25rem' } }}>
              Contact Info
            </Typography>
            <Typography variant="body2" sx={{ mb: 1, fontSize: { xs: '0.875rem', sm: '1rem' } }}>
              123 Fitness Street
            </Typography>
            <Typography variant="body2" sx={{ mb: 1, fontSize: { xs: '0.875rem', sm: '1rem' } }}>
              New York, NY 10001
            </Typography>
            <Typography variant="body2" sx={{ mb: 1, fontSize: { xs: '0.875rem', sm: '1rem' } }}>
              Phone: +1 234 567 890
            </Typography>
            <Typography variant="body2" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>
              Email: info@fittrack.com
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', fontSize: { xs: '1.1rem', sm: '1.25rem' } }}>
              Follow Us
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <IconButton
                color="inherit"
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.2)' },
                  width: { xs: 36, sm: 40 },
                  height: { xs: 36, sm: 40 },
                }}
              >
                <Facebook sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem' } }} />
              </IconButton>
              <IconButton
                color="inherit"
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.2)' },
                  width: { xs: 36, sm: 40 },
                  height: { xs: 36, sm: 40 },
                }}
              >
                <Twitter sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem' } }} />
              </IconButton>
              <IconButton
                color="inherit"
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.2)' },
                  width: { xs: 36, sm: 40 },
                  height: { xs: 36, sm: 40 },
                }}
              >
                <Instagram sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem' } }} />
              </IconButton>
              <IconButton
                color="inherit"
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.2)' },
                  width: { xs: 36, sm: 40 },
                  height: { xs: 36, sm: 40 },
                }}
              >
                <LinkedIn sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem' } }} />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            mt: { xs: 3, sm: 4 },
            pt: { xs: 3, sm: 4 },
            textAlign: 'center',
          }}
        >
          <Typography variant="body2" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
            © {new Date().getFullYear()} FitTrack. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 