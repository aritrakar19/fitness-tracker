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
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Progress = () => {
  const [measurements, setMeasurements] = useState([]);
  const [newMeasurement, setNewMeasurement] = useState({
    date: new Date().toISOString().split('T')[0],
    weight: '',
    chest: '',
    waist: '',
    hips: '',
  });

  const handleAddMeasurement = () => {
    if (newMeasurement.weight) {
      setMeasurements([...measurements, newMeasurement]);
      setNewMeasurement({
        date: new Date().toISOString().split('T')[0],
        weight: '',
        chest: '',
        waist: '',
        hips: '',
      });
    }
  };

  const handleDeleteMeasurement = (index) => {
    const updatedMeasurements = measurements.filter((_, i) => i !== index);
    setMeasurements(updatedMeasurements);
  };

  const chartData = {
    labels: measurements.map((m) => m.date),
    datasets: [
      {
        label: 'Weight (kg)',
        data: measurements.map((m) => m.weight),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Weight Progress',
      },
    },
  };

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Progress Tracker
      </Typography>

      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Add New Measurement
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                label="Date"
                type="date"
                value={newMeasurement.date}
                onChange={(e) =>
                  setNewMeasurement({ ...newMeasurement, date: e.target.value })
                }
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                label="Weight (kg)"
                type="number"
                value={newMeasurement.weight}
                onChange={(e) =>
                  setNewMeasurement({ ...newMeasurement, weight: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                label="Chest (cm)"
                type="number"
                value={newMeasurement.chest}
                onChange={(e) =>
                  setNewMeasurement({ ...newMeasurement, chest: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                label="Waist (cm)"
                type="number"
                value={newMeasurement.waist}
                onChange={(e) =>
                  setNewMeasurement({ ...newMeasurement, waist: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                label="Hips (cm)"
                type="number"
                value={newMeasurement.hips}
                onChange={(e) =>
                  setNewMeasurement({ ...newMeasurement, hips: e.target.value })
                }
              />
            </Grid>
          </Grid>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={handleAddMeasurement}
            sx={{ mt: 2 }}
          >
            Add Measurement
          </Button>
        </CardContent>
      </Card>

      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Progress Chart
          </Typography>
          <Box sx={{ height: 300 }}>
            <Line data={chartData} options={chartOptions} />
          </Box>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Measurement History
          </Typography>
          {measurements.length === 0 ? (
            <Typography color="text.secondary">
              No measurements added yet. Start by adding your first measurement!
            </Typography>
          ) : (
            <List>
              {measurements.map((measurement, index) => (
                <ListItem
                  key={index}
                  secondaryAction={
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => handleDeleteMeasurement(index)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemText
                    primary={measurement.date}
                    secondary={`Weight: ${measurement.weight}kg | Chest: ${measurement.chest}cm | Waist: ${measurement.waist}cm | Hips: ${measurement.hips}cm`}
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

export default Progress; 