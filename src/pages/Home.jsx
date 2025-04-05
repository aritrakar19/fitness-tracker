import { Box, Container, Typography, Button, Grid, Card, CardContent, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import TimerIcon from '@mui/icons-material/Timer';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import SpaIcon from '@mui/icons-material/Spa';

const Home = () => {
  const theme = useTheme();

  const features = [
    // {
    //   title: 'Professional Training',
    //   description: 'Get personalized workout plans and expert guidance from certified trainers',
    //   icon: <FitnessCenterIcon sx={{ fontSize: 40 }} />,
    //   color: '#ff4d4d',
    // },
    {
      title: 'Time Management',
      description: 'Efficient workout schedules that fit your busy lifestyle',
      icon: <TimerIcon sx={{ fontSize: 40 }} />,
      color: '#4CAF50',
    },
    {
      title: 'Nutrition Plans',
      description: 'Customized meal plans to complement your fitness goals',
      icon: <RestaurantIcon sx={{ fontSize: 40 }} />,
      color: '#2196F3',
    },
    {
      title: 'Progress Tracking',
      description: 'Monitor your fitness journey with detailed analytics',
      icon: <TrendingUpIcon sx={{ fontSize: 40 }} />,
      color: '#FF9800',
    },
    {
      title: 'Fat Burning',
      description: 'Specialized programs to help you burn fat effectively',
      icon: <LocalFireDepartmentIcon sx={{ fontSize: 40 }} />,
      color: '#E91E63',
    },
    {
      title: 'Cardio Training',
      description: 'Improve your endurance and cardiovascular health',
      icon: <DirectionsRunIcon sx={{ fontSize: 40 }} />,
      color: '#9C27B0',
    },
    {
      title: 'Yoga Classes',
      description: 'Find balance and flexibility through our yoga sessions',
      icon: <SpaIcon sx={{ fontSize: 40 }} />,
      color: '#00BCD4',
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)',
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
              Transform Your Body
            </Typography>
            <Typography variant="h5" gutterBottom sx={{ mb: 4, maxWidth: '800px', mx: 'auto' }}>
              Achieve your fitness goals with our personalized training programs and expert guidance
            </Typography>
            <Button
              component={Link}
              to="/workouts"
              variant="contained"
              size="large"
              sx={{
                backgroundColor: '#ff4d4d',
                color: 'white',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                '&:hover': {
                  backgroundColor: '#ff3333',
                },
              }}
            >
              Get Started
            </Button>
          </motion.div>
        </Container>
      </Box>

      {/* Exclusive Features Section */}
      <Box sx={{ py: 12, backgroundColor: '#f8f9fa' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography 
              variant="h3" 
              component="h2" 
              sx={{ 
                fontWeight: 'bold', 
                mb: 2,
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
                }
              }}
            >
              Exclusive Features
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                color: 'text.secondary',
                maxWidth: '800px',
                mx: 'auto',
                mt: 4,
                fontSize: '1.2rem',
                lineHeight: 1.6,
              }}
            >
              Discover our unique features designed to help you achieve your fitness goals
            </Typography>
          </Box>
          <Grid container spacing={4} justifyContent="center">
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={6} key={index}>
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
                      transition: 'all 0.3s ease',
                      backgroundColor: 'white',
                      '&:hover': {
                        transform: 'translateY(-10px)',
                        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: feature.color,
                        color: 'white',
                        width: 100,
                        height: 100,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 3,
                        boxShadow: `0 4px 20px ${feature.color}40`,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'scale(1.1)',
                        },
                      }}
                    >
                      {feature.icon}
                    </Box>
                    <CardContent sx={{ flexGrow: 1, px: 2 }}>
                      <Typography 
                        variant="h5" 
                        component="h3" 
                        gutterBottom 
                        sx={{ 
                          fontWeight: 'bold',
                          color: feature.color,
                          fontSize: '1.5rem',
                          mb: 2,
                        }}
                      >
                        {feature.title}
                      </Typography>
                      <Typography 
                        color="text.secondary"
                        sx={{ 
                          lineHeight: 1.8,
                          fontSize: '1.1rem',
                        }}
                      >
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Call to Action Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #ff4d4d 0%, #ff8c8c 100%)',
          color: 'white',
          py: 8,
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '50vh'
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
            Ready to Start Your Fitness Journey?
          </Typography>
          <Typography variant="h6" gutterBottom sx={{ mb: 4, maxWidth: '800px', mx: 'auto' }}>
            Join our community of fitness enthusiasts and take the first step towards a healthier lifestyle
          </Typography>
          <Button
            component={Link}
            to="/workouts"
            variant="contained"
            size="large"
            sx={{
              backgroundColor: 'white',
              color: '#ff4d4d',
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
              },
            }}
          >
            Join Now
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 