import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  TextField,
  Grid,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

const Nutrition = () => {
  const [meals, setMeals] = useState([]);
  const [newMeal, setNewMeal] = useState({
    name: '',
    type: '',
    calories: '',
    protein: '',
    carbs: '',
    fat: '',
  });

  const mealTypes = ['Breakfast', 'Lunch', 'Dinner', 'Snack'];

  const handleAddMeal = () => {
    if (newMeal.name && newMeal.type && newMeal.calories) {
      setMeals([...meals, newMeal]);
      setNewMeal({
        name: '',
        type: '',
        calories: '',
        protein: '',
        carbs: '',
        fat: '',
      });
    }
  };

  const handleDeleteMeal = (index) => {
    const updatedMeals = meals.filter((_, i) => i !== index);
    setMeals(updatedMeals);
  };

  const calculateTotal = (nutrient) => {
    return meals.reduce((total, meal) => total + Number(meal[nutrient] || 0), 0);
  };

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Nutrition Tracker
      </Typography>

      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Add New Meal
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Meal Name"
                value={newMeal.name}
                onChange={(e) =>
                  setNewMeal({ ...newMeal, name: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel>Meal Type</InputLabel>
                <Select
                  value={newMeal.type}
                  label="Meal Type"
                  onChange={(e) =>
                    setNewMeal({ ...newMeal, type: e.target.value })
                  }
                >
                  {mealTypes.map((type) => (
                    <MenuItem key={type} value={type}>
                      {type}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Calories"
                type="number"
                value={newMeal.calories}
                onChange={(e) =>
                  setNewMeal({ ...newMeal, calories: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Protein (g)"
                type="number"
                value={newMeal.protein}
                onChange={(e) =>
                  setNewMeal({ ...newMeal, protein: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Carbs (g)"
                type="number"
                value={newMeal.carbs}
                onChange={(e) =>
                  setNewMeal({ ...newMeal, carbs: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Fat (g)"
                type="number"
                value={newMeal.fat}
                onChange={(e) =>
                  setNewMeal({ ...newMeal, fat: e.target.value })
                }
              />
            </Grid>
          </Grid>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={handleAddMeal}
            sx={{ mt: 2 }}
          >
            Add Meal
          </Button>
        </CardContent>
      </Card>

      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Daily Summary
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6">Total Calories</Typography>
              <Typography variant="h4">{calculateTotal('calories')}</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6">Protein</Typography>
              <Typography variant="h4">{calculateTotal('protein')}g</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6">Carbs</Typography>
              <Typography variant="h4">{calculateTotal('carbs')}g</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Today's Meals
          </Typography>
          {meals.length === 0 ? (
            <Typography color="text.secondary">
              No meals added yet. Start by adding your first meal!
            </Typography>
          ) : (
            <List>
              {meals.map((meal, index) => (
                <ListItem
                  key={index}
                  secondaryAction={
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => handleDeleteMeal(index)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemText
                    primary={`${meal.type}: ${meal.name}`}
                    secondary={`${meal.calories} calories | Protein: ${meal.protein}g | Carbs: ${meal.carbs}g | Fat: ${meal.fat}g`}
                  />
                </ListItem>
              ))}
            </List>
          )}
        </CardContent>
      </Card>
    </Container>
  );
};

export default Nutrition; 