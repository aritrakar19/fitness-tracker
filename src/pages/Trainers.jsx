import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button, Chip, IconButton, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Trainers = () => {
  const theme = useTheme();

  const trainers = [
    {
      name: 'John Smith',
      role: 'CrossFit Trainer',
      image: 'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      bio: 'Certified CrossFit trainer with 10 years of experience. Specializes in strength training and functional fitness.',
      specialties: ['CrossFit', 'Strength Training', 'Functional Fitness'],
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        linkedin: '#',
      },
    },
    {
      name: 'Sarah Johnson',
      role: 'Yoga Instructor',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      bio: 'Experienced yoga instructor with a focus on mindfulness and flexibility. Certified in multiple yoga styles.',
      specialties: ['Hatha Yoga', 'Vinyasa', 'Meditation'],
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        linkedin: '#',
      },
    },
    {
      name: 'Mike Williams',
      role: 'Personal Trainer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      bio: 'Dedicated personal trainer with a passion for helping clients achieve their fitness goals through customized programs.',
      specialties: ['Weight Loss', 'Muscle Building', 'Nutrition'],
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        linkedin: '#',
      },
    },
    {
      name: 'Emily Davis',
      role: 'HIIT Specialist',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      bio: 'HIIT expert with a background in competitive sports. Specializes in high-intensity interval training and endurance.',
      specialties: ['HIIT', 'Endurance Training', 'Sports Performance'],
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        linkedin: '#',
      },
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
              Our Trainers
            </Typography>
            <Typography variant="h5" gutterBottom sx={{ mb: 4, maxWidth: '800px', mx: 'auto' }}>
              Meet our team of expert trainers dedicated to helping you achieve your fitness goals
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Trainers Section */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="center">
            {trainers.map((trainer, index) => (
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
                      borderRadius: '12px',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                      '&:hover': {
                        transform: 'translateY(-10px)',
                        transition: 'all 0.3s ease',
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="300"
                      image={trainer.image}
                      alt={trainer.name}
                      sx={{
                        borderTopLeftRadius: '12px',
                        borderTopRightRadius: '12px',
                      }}
                    />
                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                      <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                        {trainer.name}
                      </Typography>
                      <Typography variant="subtitle1" color="primary" gutterBottom>
                        {trainer.role}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" paragraph>
                        {trainer.bio}
                      </Typography>
                      <Box sx={{ mb: 2 }}>
                        {trainer.specialties.map((specialty, idx) => (
                          <Chip
                            key={idx}
                            label={specialty}
                            size="small"
                            sx={{
                              mr: 1,
                              mb: 1,
                              backgroundColor: '#f5f5f5',
                            }}
                          />
                        ))}
                      </Box>
                      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
                        <IconButton
                          component="a"
                          href={trainer.social.facebook}
                          target="_blank"
                          sx={{ color: '#1877F2' }}
                        >
                          <FacebookIcon />
                        </IconButton>
                        <IconButton
                          component="a"
                          href={trainer.social.twitter}
                          target="_blank"
                          sx={{ color: '#1DA1F2' }}
                        >
                          <TwitterIcon />
                        </IconButton>
                        <IconButton
                          component="a"
                          href={trainer.social.instagram}
                          target="_blank"
                          sx={{ color: '#E4405F' }}
                        >
                          <InstagramIcon />
                        </IconButton>
                        <IconButton
                          component="a"
                          href={trainer.social.linkedin}
                          target="_blank"
                          sx={{ color: '#0A66C2' }}
                        >
                          <LinkedInIcon />
                        </IconButton>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Join Our Team Section */}
      <Box sx={{ py: 8, backgroundColor: '#f8f9fa' }}>
        <Container maxWidth="md">
          <Box
            sx={{
              backgroundColor: 'white',
              borderRadius: '12px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
              p: 6,
              textAlign: 'center',
            }}
          >
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              sx={{
                fontWeight: 'bold',
                mb: 3,
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
              Join Our Team
            </Typography>
            <Typography variant="h6" color="text.secondary" paragraph sx={{ mb: 4, maxWidth: '800px', mx: 'auto' }}>
              Are you passionate about fitness and helping others achieve their goals? We're always looking for talented trainers to join our team.
            </Typography>
            <Button
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
              Apply Now
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Trainers; 