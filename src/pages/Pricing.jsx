import { Box, Container, Typography, Grid, Card, CardContent, Button, List, ListItem, ListItemIcon, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import CheckIcon from '@mui/icons-material/Check';
import GroupIcon from '@mui/icons-material/Group';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Pricing = () => {
  const theme = useTheme();

  const plans = [
    {
      name: 'Basic',
      price: '$29',
      period: 'per month',
      features: [
        'Access to all basic equipment',
        'Group fitness classes',
        'Locker room access',
        'Free Wi-Fi',
        'Basic workout plan',
      ],
      popular: false,
    },
    {
      name: 'Premium',
      price: '$49',
      period: 'per month',
      features: [
        'All Basic features',
        'Personal trainer consultation',
        'Sauna access',
        'Towel service',
        'Advanced workout plans',
        'Nutrition guidance',
      ],
      popular: true,
    },
    {
      name: 'Elite',
      price: '$79',
      period: 'per month',
      features: [
        'All Premium features',
        'Unlimited personal training',
        'VIP locker room',
        'Massage therapy (2 sessions)',
        'Custom meal plans',
        'Priority class booking',
        '24/7 access',
      ],
      popular: false,
    },
  ];

  const services = [
    {
      title: 'Personal Training',
      price: '$50',
      period: 'per session',
      description: 'One-on-one training with certified personal trainers',
      icon: <GroupIcon sx={{ fontSize: 40 }} />,
      color: '#ff4d4d',
    },
    {
      title: 'Nutrition Consultation',
      price: '$75',
      period: 'per session',
      description: 'Customized nutrition plans and dietary guidance',
      icon: <EmojiEventsIcon sx={{ fontSize: 40 }} />,
      color: '#4CAF50',
    },
    {
      title: 'Massage Therapy',
      price: '$80',
      period: 'per hour',
      description: 'Professional massage therapy for recovery and relaxation',
      icon: <AccessTimeIcon sx={{ fontSize: 40 }} />,
      color: '#2196F3',
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
              Choose Your Plan
            </Typography>
            <Typography variant="h5" gutterBottom sx={{ mb: 4, maxWidth: '800px', mx: 'auto' }}>
              Find the perfect membership plan that fits your fitness goals
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Pricing Plans Section */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="center">
            {plans.map((plan, index) => (
              <Grid item xs={12} md={4} key={index}>
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
                      backgroundColor: plan.popular ? '#ff4d4d' : 'white',
                      color: plan.popular ? 'white' : 'inherit',
                      transform: plan.popular ? 'scale(1.05)' : 'none',
                      position: 'relative',
                      overflow: 'visible',
                      '&:hover': {
                        transform: plan.popular ? 'scale(1.08)' : 'scale(1.03)',
                        transition: 'all 0.3s ease',
                      },
                    }}
                  >
                    {plan.popular && (
                      <Box
                        sx={{
                          position: 'absolute',
                          top: -20,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          backgroundColor: '#ff4d4d',
                          color: 'white',
                          padding: '5px 20px',
                          borderRadius: '20px',
                          fontSize: '0.9rem',
                          fontWeight: 'bold',
                        }}
                      >
                        Most Popular
                      </Box>
                    )}
                    <CardContent sx={{ p: 4, flexGrow: 1 }}>
                      <Typography variant="h4" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                        {plan.name}
                      </Typography>
                      <Typography variant="h3" component="div" gutterBottom sx={{ fontWeight: 'bold' }}>
                        {plan.price}
                        <Typography
                          component="span"
                          variant="h6"
                          sx={{ ml: 1, opacity: 0.7 }}
                        >
                          {plan.period}
                        </Typography>
                      </Typography>
                      <List sx={{ mt: 3 }}>
                        {plan.features.map((feature, featureIndex) => (
                          <ListItem key={featureIndex} sx={{ px: 0 }}>
                            <ListItemIcon sx={{ minWidth: 40 }}>
                              <CheckIcon sx={{ color: plan.popular ? 'white' : '#ff4d4d' }} />
                            </ListItemIcon>
                            <Typography>{feature}</Typography>
                          </ListItem>
                        ))}
                      </List>
                      <Button
                        variant="contained"
                        fullWidth
                        sx={{
                          mt: 4,
                          py: 1.5,
                          borderRadius: '30px',
                          backgroundColor: plan.popular ? 'white' : '#ff4d4d',
                          color: plan.popular ? '#ff4d4d' : 'white',
                          '&:hover': {
                            backgroundColor: plan.popular ? '#f5f5f5' : '#ff3333',
                          },
                        }}
                      >
                        Get Started
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Additional Services Section */}
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
            Additional Services
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {services.map((service, index) => (
              <Grid item xs={12} md={4} key={index}>
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
                      '&:hover': {
                        transform: 'translateY(-10px)',
                        transition: 'all 0.3s ease',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: service.color,
                        color: 'white',
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 3,
                      }}
                    >
                      {service.icon}
                    </Box>
                    <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                      {service.title}
                    </Typography>
                    <Typography variant="h4" component="div" gutterBottom sx={{ fontWeight: 'bold' }}>
                      {service.price}
                      <Typography
                        component="span"
                        variant="h6"
                        sx={{ ml: 1, opacity: 0.7 }}
                      >
                        {service.period}
                      </Typography>
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ mb: 3 }}
                    >
                      {service.description}
                    </Typography>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: service.color,
                        color: 'white',
                        px: 3,
                        py: 1,
                        borderRadius: '30px',
                        '&:hover': {
                          backgroundColor: service.color,
                          opacity: 0.9,
                        },
                      }}
                    >
                      Book Now
                    </Button>
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

export default Pricing; 