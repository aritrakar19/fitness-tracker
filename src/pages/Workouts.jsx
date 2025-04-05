import { useState, useEffect } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button, IconButton, TextField, useTheme, useMediaQuery, Dialog, DialogTitle, DialogContent, DialogActions, FormControl, InputLabel, Select, MenuItem, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { Delete as DeleteIcon, Timer as TimerIcon, FitnessCenter as FitnessCenterIcon, Add as AddIcon } from '@mui/icons-material';

const Workouts = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  // Static list of exercises
  const exerciseOptions = [
    'Push-ups', 'Pull-ups', 'Squats', 'Lunges', 'Plank',
    'Burpees', 'Mountain Climbers', 'Jump Rope', 'Bicep Curls',
    'Tricep Dips', 'Russian Twists', 'Leg Raises', 'Crunches',
    'Jumping Jacks', 'High Knees', 'Butt Kicks', 'Box Jumps',
    'Wall Sit', 'Superman', 'Bird Dog', 'Glute Bridge',
    'Side Plank', 'V-ups', 'Flutter Kicks', 'Bicycle Crunches',
    'Diamond Push-ups', 'Pike Push-ups', 'Dips', 'Chin-ups',
    'Inverted Rows', 'Pistol Squats', 'Step-ups', 'Calf Raises',
    'Lateral Raises', 'Front Raises', 'Shoulder Press', 'Deadlifts',
    'Kettlebell Swings', 'Medicine Ball Slams', 'Battle Ropes'
  ];

  // Workout images
  const workoutImages = [
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  ];

  // Load workouts from localStorage on initial render
  const [workouts, setWorkouts] = useState(() => {
    const savedWorkouts = localStorage.getItem('workouts');
    if (savedWorkouts) {
      return JSON.parse(savedWorkouts);
    }
    return [
      {
        id: 1,
        name: 'Full Body Workout',
        exercises: [
          { name: 'Push-ups', sets: 3, reps: 15 },
          { name: 'Squats', sets: 3, reps: 20 },
          { name: 'Plank', sets: 3, duration: '60s' },
        ],
        images: [
          'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
          'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
          'https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
        ],
        currentImageIndex: 0
      },
      {
        id: 2,
        name: 'Upper Body',
        exercises: [
          { name: 'Pull-ups', sets: 3, reps: 10 },
          { name: 'Dips', sets: 3, reps: 12 },
          { name: 'Bicep Curls', sets: 3, reps: 15 },
        ],
        images: [
          'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
          'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
          'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
        ],
        currentImageIndex: 0
      },
      {
        id: 3,
        name: 'Core Strength',
        exercises: [
          { name: 'Russian Twists', sets: 3, reps: 20 },
          { name: 'Leg Raises', sets: 3, reps: 15 },
          { name: 'Mountain Climbers', sets: 3, duration: '45s' },
        ],
        images: [
          'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
          'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
          'https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
        ],
        currentImageIndex: 0
      },
      {
        id: 4,
        name: 'HIIT Cardio',
        exercises: [
          { name: 'Burpees', sets: 4, reps: 10 },
          { name: 'Jump Squats', sets: 4, reps: 15 },
          { name: 'High Knees', sets: 4, duration: '30s' },
        ],
        images: [
          'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
          'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
          'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
        ],
        currentImageIndex: 0
      },
    ];
  });

  // Save workouts to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('workouts', JSON.stringify(workouts));
  }, [workouts]);

  const [activeWorkout, setActiveWorkout] = useState(null);
  const [currentExercise, setCurrentExercise] = useState(0);
  const [currentSet, setCurrentSet] = useState(1);
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [newWorkout, setNewWorkout] = useState({
    name: '',
    exercises: [{ name: '', sets: 3, reps: 10, duration: '' }],
  });

  // Timer effect
  useEffect(() => {
    let interval;
    if (isRunning && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0 && isRunning) {
      handleNextExercise();
    }
    return () => clearInterval(interval);
  }, [isRunning, timer]);

  const handleStartWorkout = (workout) => {
    setActiveWorkout(workout);
    setCurrentExercise(0);
    setCurrentSet(1);
    setTimer(60); // 60 seconds rest between exercises
    setIsRunning(true);
  };

  const handleNextExercise = () => {
    if (currentExercise < activeWorkout.exercises.length - 1) {
      setCurrentExercise(currentExercise + 1);
      setCurrentSet(1);
      setTimer(60);
    } else {
      // Workout completed
      setActiveWorkout(null);
      setIsRunning(false);
    }
  };

  const handleNextSet = () => {
    if (currentSet < activeWorkout.exercises[currentExercise].sets) {
      setCurrentSet(currentSet + 1);
      setTimer(60);
    } else {
      handleNextExercise();
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAddExercise = () => {
    setNewWorkout({
      ...newWorkout,
      exercises: [...newWorkout.exercises, { name: '', sets: 3, reps: 10, duration: '' }]
    });
  };

  const handleRemoveExercise = (index) => {
    const updatedExercises = newWorkout.exercises.filter((_, i) => i !== index);
    setNewWorkout({ ...newWorkout, exercises: updatedExercises });
  };

  const handleExerciseChange = (index, field, value) => {
    const updatedExercises = [...newWorkout.exercises];
    updatedExercises[index] = { ...updatedExercises[index], [field]: value };
    setNewWorkout({ ...newWorkout, exercises: updatedExercises });
  };

  const handleCreateWorkout = () => {
    if (newWorkout.name && newWorkout.exercises.length > 0) {
      const newId = workouts.length + 1;
      const updatedWorkouts = [
        ...workouts,
        {
          id: newId,
          name: newWorkout.name,
          exercises: newWorkout.exercises,
          images: workoutImages.slice(0, newWorkout.exercises.length),
          currentImageIndex: 0
        },
      ];
      setWorkouts(updatedWorkouts);
      setNewWorkout({
        name: '',
        exercises: [{ name: '', sets: 3, reps: 10, duration: '' }],
      });
      setOpenDialog(false);
    }
  };

  const handleDeleteWorkout = (id) => {
    setWorkouts(workouts.filter((workout) => workout.id !== id));
  };

  const handleImageChange = (workoutId) => {
    setWorkouts(workouts.map(workout => {
      if (workout.id === workoutId) {
        return {
          ...workout,
          currentImageIndex: (workout.currentImageIndex + 1) % workout.images.length
        };
      }
      return workout;
    }));
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: { xs: '40vh', sm: '50vh', md: '60vh' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          marginTop: '60px',
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
          <Box sx={{ position: 'relative', zIndex: 1, textAlign: 'center', color: 'white' }}>
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
              Your Workouts
            </Typography>
            <Typography
              variant={isMobile ? "h6" : "h5"}
              sx={{
                mb: 4,
                fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' }
              }}
            >
              Create and manage your custom workout routines
            </Typography>
            <Button
              variant="contained"
              size="large"
              startIcon={<FitnessCenterIcon />}
              onClick={() => setOpenDialog(true)}
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
              Create New Workout
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Workouts Grid */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, sm: 6, md: 8 } }}>
        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
          {workouts.map((workout) => (
            <Grid item xs={12} sm={6} md={4} key={workout.id}>
              <Card
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
                <Box sx={{ position: 'relative' }}>
                  <CardMedia
                    component="img"
                    height={isMobile ? 200 : 240}
                    image={workout.images[workout.currentImageIndex]}
                    alt={workout.name}
                    sx={{ objectFit: 'cover' }}
                  />
                  <IconButton
                    sx={{
                      position: 'absolute',
                      top: 8,
                      right: 8,
                      backgroundColor: 'rgba(255, 255, 255, 0.8)',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      },
                    }}
                    onClick={() => handleImageChange(workout.id)}
                  >
                    <AddIcon />
                  </IconButton>
                </Box>
                <CardContent sx={{ flexGrow: 1, p: { xs: 2, sm: 3 } }}>
                  <Typography
                    variant={isMobile ? "h6" : "h5"}
                    component="h2"
                    gutterBottom
                    sx={{
                      fontWeight: 'bold',
                      fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' }
                    }}
                  >
                    {workout.name}
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    {workout.exercises.map((exercise, index) => (
                      <Chip
                        key={index}
                        label={`${exercise.name} - ${exercise.sets} sets ${exercise.reps ? `x ${exercise.reps} reps` : `for ${exercise.duration}`}`}
                        sx={{
                          m: 0.5,
                          fontSize: { xs: '0.8rem', sm: '0.9rem' }
                        }}
                      />
                    ))}
                  </Box>
                  <Box sx={{ display: 'flex', gap: 1, mt: 'auto' }}>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      onClick={() => handleStartWorkout(workout)}
                      sx={{
                        fontSize: { xs: '0.8rem', sm: '0.9rem' }
                      }}
                    >
                      Start Workout
                    </Button>
                    <IconButton
                      color="error"
                      onClick={() => handleDeleteWorkout(workout.id)}
                      sx={{
                        minWidth: '40px',
                        height: '40px',
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Create Workout Dialog */}
      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        maxWidth="md"
        fullWidth
        fullScreen={isMobile}
      >
        <DialogTitle
          sx={{
            fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
            fontWeight: 'bold'
          }}
        >
          Create New Workout
        </DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            label="Workout Name"
            value={newWorkout.name}
            onChange={(e) => setNewWorkout({ ...newWorkout, name: e.target.value })}
            sx={{ mb: 3, mt: 2 }}
          />
          {newWorkout.exercises.map((exercise, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                gap: 2,
                mb: 2,
                alignItems: { xs: 'stretch', sm: 'center' }
              }}
            >
              <FormControl fullWidth sx={{ mb: { xs: 2, sm: 0 } }}>
                <InputLabel>Exercise</InputLabel>
                <Select
                  value={exercise.name}
                  onChange={(e) => handleExerciseChange(index, 'name', e.target.value)}
                  label="Exercise"
                >
                  {exerciseOptions.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TextField
                label="Sets"
                type="number"
                value={exercise.sets}
                onChange={(e) => handleExerciseChange(index, 'sets', parseInt(e.target.value))}
                sx={{ width: { xs: '100%', sm: '100px' } }}
              />
              <TextField
                label="Reps"
                type="number"
                value={exercise.reps}
                onChange={(e) => handleExerciseChange(index, 'reps', parseInt(e.target.value))}
                sx={{ width: { xs: '100%', sm: '100px' } }}
              />
              <TextField
                label="Duration (seconds)"
                type="number"
                value={exercise.duration}
                onChange={(e) => handleExerciseChange(index, 'duration', e.target.value)}
                sx={{ width: { xs: '100%', sm: '150px' } }}
              />
              <IconButton
                color="error"
                onClick={() => handleRemoveExercise(index)}
                sx={{ alignSelf: { xs: 'flex-end', sm: 'center' } }}
              >
                <DeleteIcon />
              </IconButton>
            </Box>
          ))}
          <Button
            variant="outlined"
            startIcon={<AddIcon />}
            onClick={handleAddExercise}
            sx={{ mt: 2 }}
          >
            Add Exercise
          </Button>
        </DialogContent>
        <DialogActions sx={{ p: { xs: 2, sm: 3 } }}>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button
            variant="contained"
            onClick={handleCreateWorkout}
            sx={{
              backgroundColor: '#ff4d4d',
              '&:hover': {
                backgroundColor: '#ff3333',
              },
            }}
          >
            Create Workout
          </Button>
        </DialogActions>
      </Dialog>

      {/* Active Workout Overlay */}
      {activeWorkout && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            p: { xs: 2, sm: 4 }
          }}
        >
          <Card
            sx={{
              maxWidth: { xs: '100%', sm: '500px' },
              width: '100%',
              p: { xs: 2, sm: 4 },
              textAlign: 'center',
            }}
          >
            <Typography
              variant={isMobile ? "h5" : "h4"}
              gutterBottom
              sx={{ fontWeight: 'bold' }}
            >
              {activeWorkout.name}
            </Typography>
            <Typography
              variant={isMobile ? "h6" : "h5"}
              color="primary"
              gutterBottom
            >
              {activeWorkout.exercises[currentExercise].name}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Set {currentSet} of {activeWorkout.exercises[currentExercise].sets}
            </Typography>
            {activeWorkout.exercises[currentExercise].reps ? (
              <Typography variant="h6" gutterBottom>
                {activeWorkout.exercises[currentExercise].reps} reps
              </Typography>
            ) : (
              <Typography variant="h6" gutterBottom>
                {activeWorkout.exercises[currentExercise].duration} seconds
              </Typography>
            )}
            <Typography
              variant="h3"
              color="primary"
              sx={{ my: 4, fontSize: { xs: '2.5rem', sm: '3rem' } }}
            >
              {formatTime(timer)}
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNextSet}
                sx={{
                  px: { xs: 2, sm: 4 },
                  py: { xs: 1, sm: 1.5 }
                }}
              >
                Next Set
              </Button>
              <Button
                variant="outlined"
                color="error"
                onClick={() => {
                  setActiveWorkout(null);
                  setIsRunning(false);
                }}
                sx={{
                  px: { xs: 2, sm: 4 },
                  py: { xs: 1, sm: 1.5 }
                }}
              >
                End Workout
              </Button>
            </Box>
          </Card>
        </Box>
      )}
    </Box>
  );
};

export default Workouts; 