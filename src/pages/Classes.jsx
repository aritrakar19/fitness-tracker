import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button, Chip, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SportsMma, Pool, SelfImprovement, DirectionsRun, FitnessCenter, Spa } from '@mui/icons-material';

const Classes = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const classes = [
    {
      title: 'Boxing',
      description: 'High-intensity boxing training to improve strength, endurance, and coordination.',
      image: 'https://images.unsplash.com/photo-1517438322307-e67111335449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      duration: '60 min',
      difficulty: 'Advanced',
      icon: <SportsMma />,
    },
    {
      title: 'Swimming',
      description: 'Low-impact full-body workout that improves cardiovascular health and muscle tone.',
      image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      duration: '45 min',
      difficulty: 'Intermediate',
      icon: <Pool />,
    },
    {
      title: 'Yoga',
      description: 'Improve flexibility, balance, and mental clarity through mindful movement and breathing.',
      image: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      duration: '60 min',
      difficulty: 'All Levels',
      icon: <SelfImprovement />,
    },
    {
      title: 'HIIT',
      description: 'High-intensity interval training to maximize calorie burn and improve endurance.',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      duration: '45 min',
      difficulty: 'Advanced',
      icon: <DirectionsRun />,
    },
    {
      title: 'CrossFit',
      description: 'Functional movements performed at high intensity for overall fitness.',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      duration: '60 min',
      difficulty: 'Advanced',
      icon: <FitnessCenter />,
    },
    {
      title: 'Pilates',
      description: 'Core-focused exercises to improve posture, flexibility, and muscle tone.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      duration: '45 min',
      difficulty: 'All Levels',
      icon: <Spa />,
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: { xs: '50vh', sm: '60vh' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
            <Typography
              variant={isMobile ? 'h4' : 'h2'}
              component={motion.h1}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              sx={{
                color: 'white',
                fontWeight: 'bold',
                mb: { xs: 2, sm: 3 },
                fontSize: { xs: '2rem', sm: '3rem' },
              }}
            >
              Our Classes
            </Typography>
            <Typography
              variant={isMobile ? 'body1' : 'h6'}
              component={motion.p}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              sx={{
                color: 'white',
                maxWidth: '600px',
                mx: 'auto',
                fontSize: { xs: '1rem', sm: '1.25rem' },
              }}
            >
              Choose from a variety of fitness classes designed to help you achieve your goals
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Classes Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, sm: 6, md: 8 } }}>
        <Grid container spacing={3} sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: 3 }}>
          {classes.map((classItem, index) => (
            <Grid item key={index} xs={12}>
              <Card
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height={isMobile ? 200 : 240}
                  image={classItem.image}
                  alt={classItem.title}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1, p: { xs: 2, sm: 3 } }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box
                      sx={{
                        backgroundColor: 'primary.main',
                        color: 'white',
                        p: 1,
                        borderRadius: 1,
                        mr: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {classItem.icon}
                    </Box>
                    <Typography variant={isMobile ? 'h6' : 'h5'} component="h3" sx={{ fontWeight: 'bold' }}>
                      {classItem.title}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2, fontSize: { xs: '0.875rem', sm: '1rem' } }}>
                    {classItem.description}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
                    <Chip
                      label={classItem.duration}
                      size={isMobile ? 'small' : 'medium'}
                      sx={{ backgroundColor: 'primary.light', color: 'white' }}
                    />
                    <Chip
                      label={classItem.difficulty}
                      size={isMobile ? 'small' : 'medium'}
                      sx={{ backgroundColor: 'secondary.light', color: 'white' }}
                    />
                  </Box>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      mt: 'auto',
                      py: { xs: 1, sm: 1.5 },
                      fontSize: { xs: '0.875rem', sm: '1rem' },
                    }}
                  >
                    Join Class
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Classes; 