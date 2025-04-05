import { Box, Container, Typography, Grid, Card, CardContent, Avatar, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import GroupIcon from '@mui/icons-material/Group';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const About = () => {
  const theme = useTheme();

  const stats = [
    {
      icon: <FitnessCenterIcon sx={{ fontSize: 40 }} />,
      number: '1000+',
      label: 'Active Members',
      color: '#ff4d4d',
    },
    {
      icon: <GroupIcon sx={{ fontSize: 40 }} />,
      number: '50+',
      label: 'Expert Trainers',
      color: '#4CAF50',
    },
    {
      icon: <EmojiEventsIcon sx={{ fontSize: 40 }} />,
      number: '15+',
      label: 'Years Experience',
      color: '#2196F3',
    },
    {
      icon: <AccessTimeIcon sx={{ fontSize: 40 }} />,
      number: '24/7',
      label: 'Open Hours',
      color: '#FF9800',
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          py: 15,
          textAlign: 'center',
          marginTop: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '80vh'
        }}
      >
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
              About Us
            </Typography>
            <Typography variant="h5" gutterBottom sx={{ mb: 4, maxWidth: '800px', mx: 'auto' }}>
              Your journey to a healthier lifestyle starts here
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box sx={{ py: 8, backgroundColor: '#f8f9fa' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="center">
            {stats.map((stat, index) => (
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
                      p: 4,
                      borderRadius: '12px',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                      backgroundColor: 'white',
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: stat.color,
                        color: 'white',
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2,
                      }}
                    >
                      {stat.icon}
                    </Box>
                    <Typography variant="h4" component="h3" gutterBottom sx={{ fontWeight: 'bold', color: stat.color }}>
                      {stat.number}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      {stat.label}
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Mission Section */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography
                  variant="h3"
                  component="h2"
                  gutterBottom
                  sx={{
                    fontWeight: 'bold',
                    mb: 3,
                    position: 'relative',
                    '&:after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -10,
                      left: 0,
                      width: '80px',
                      height: '4px',
                      backgroundColor: '#ff4d4d',
                      borderRadius: '2px',
                    },
                  }}
                >
                  Our Mission
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 3 }}>
                  At Fitwell, we believe that fitness is not just about physical strength, but also about mental well-being and overall health. Our mission is to provide a supportive environment where everyone can achieve their fitness goals, regardless of their starting point.
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                  We are committed to helping our members transform their lives through personalized training programs, expert guidance, and a community that supports and motivates each other.
                </Typography>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                  alt="Fitness Training"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '12px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                  }}
                />
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Values Section */}
      <Box sx={{ py: 8, backgroundColor: '#f8f9fa' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h2"
            align="center"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              mb: 6,
              position: 'relative',
              display: 'inline-block',
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
            Our Values
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {[
              {
                title: 'Excellence',
                description: 'We strive for excellence in everything we do, from our training programs to our customer service.',
              },
              {
                title: 'Community',
                description: 'We believe in the power of community and creating a supportive environment for all our members.',
              },
              {
                title: 'Innovation',
                description: 'We continuously innovate our programs and services to provide the best fitness experience.',
              },
              {
                title: 'Integrity',
                description: 'We operate with honesty and transparency, always putting our members first.',
              },
            ].map((value, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      p: 3,
                      borderRadius: '12px',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                      backgroundColor: 'white',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        transition: 'all 0.3s ease',
                      },
                    }}
                  >
                    <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold', color: '#ff4d4d' }}>
                      {value.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {value.description}
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default About; 