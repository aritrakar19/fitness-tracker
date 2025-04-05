import { Box, Container, Typography, Grid, Card, CardContent, TextField, Button, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const contactInfo = [
    {
      icon: <LocationOnIcon sx={{ fontSize: { xs: 30, sm: 40 } }} />,
      title: 'Address',
      content: '123 Fitness Street, City, State 12345',
      color: '#ff4d4d',
    },
    {
      icon: <PhoneIcon sx={{ fontSize: { xs: 30, sm: 40 } }} />,
      title: 'Phone',
      content: '+1 (234) 567-8900',
      color: '#4CAF50',
    },
    {
      icon: <EmailIcon sx={{ fontSize: { xs: 30, sm: 40 } }} />,
      title: 'Email',
      content: 'info@fitwell.com',
      color: '#2196F3',
    },
    {
      icon: <AccessTimeIcon sx={{ fontSize: { xs: 30, sm: 40 } }} />,
      title: 'Working Hours',
      content: 'Mon - Fri: 6:00 AM - 10:00 PM\nSat - Sun: 8:00 AM - 8:00 PM',
      color: '#FF9800',
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          py: { xs: 8, sm: 12, md: 15 },
          textAlign: 'center',
          marginTop: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: { xs: '60vh', sm: '70vh', md: '80vh' }
        }}
      >
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography 
              variant={isMobile ? "h3" : "h2"} 
              component="h1" 
              gutterBottom 
              sx={{ 
                fontWeight: 'bold', 
                mb: 2,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
              }}
            >
              Contact Us
            </Typography>
            <Typography 
              variant={isMobile ? "h6" : "h5"} 
              gutterBottom 
              sx={{ 
                mb: 4, 
                maxWidth: '800px', 
                mx: 'auto',
                fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' }
              }}
            >
              Get in touch with us for any questions or inquiries
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Contact Info Section */}
      <Box sx={{ py: { xs: 4, sm: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} justifyContent="center">
            {contactInfo.map((info, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      p: { xs: 2, sm: 3, md: 4 },
                      borderRadius: '12px',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                      backgroundColor: 'white',
                      '&:hover': {
                        transform: 'translateY(-10px)',
                        transition: 'all 0.3s ease',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: info.color,
                        color: 'white',
                        width: { xs: 60, sm: 70, md: 80 },
                        height: { xs: 60, sm: 70, md: 80 },
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: { xs: 2, sm: 3 },
                      }}
                    >
                      {info.icon}
                    </Box>
                    <Typography 
                      variant={isMobile ? "h6" : "h5"} 
                      component="h3" 
                      gutterBottom 
                      sx={{ 
                        fontWeight: 'bold',
                        fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' }
                      }}
                    >
                      {info.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ 
                        whiteSpace: 'pre-line',
                        fontSize: { xs: '0.9rem', sm: '1rem' }
                      }}
                    >
                      {info.content}
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Contact Form Section */}
      <Box sx={{ py: { xs: 4, sm: 6, md: 8 }, backgroundColor: '#f8f9fa' }}>
        <Container maxWidth="md">
          <Card
            sx={{
              p: { xs: 3, sm: 4, md: 6 },
              borderRadius: '12px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
              backgroundColor: 'white',
            }}
          >
            <Typography
              variant={isMobile ? "h4" : "h3"}
              component="h2"
              align="center"
              gutterBottom
              sx={{
                fontWeight: 'bold',
                mb: { xs: 4, sm: 5, md: 6 },
                position: 'relative',
                display: 'inline-block',
                fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' },
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -10,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '80px',
                  height: '4px',
                  backgroundColor: '#ff4d4d',
                  borderRadius: '2px',
                },
              }}
            >
              Send Us a Message
            </Typography>
            <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Your Name"
                  variant="outlined"
                  sx={{ mb: { xs: 2, sm: 3 } }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Your Email"
                  variant="outlined"
                  sx={{ mb: { xs: 2, sm: 3 } }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Subject"
                  variant="outlined"
                  sx={{ mb: { xs: 2, sm: 3 } }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Message"
                  variant="outlined"
                  multiline
                  rows={4}
                  sx={{ mb: { xs: 2, sm: 3 } }}
                />
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ textAlign: 'center' }}>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      backgroundColor: '#ff4d4d',
                      color: 'white',
                      px: { xs: 3, sm: 4 },
                      py: { xs: 1, sm: 1.5 },
                      fontSize: { xs: '1rem', sm: '1.1rem' },
                      '&:hover': {
                        backgroundColor: '#ff3333',
                      },
                    }}
                  >
                    Send Message
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Card>
        </Container>
      </Box>

      {/* Map Section */}
      <Box sx={{ py: { xs: 4, sm: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              height: { xs: '300px', sm: '350px', md: '400px' },
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2176661305855!2d-73.98784492416415!3d40.75798597138939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1712271234567!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Contact; 