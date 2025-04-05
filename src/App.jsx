import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Classes from './pages/Classes';
import Trainers from './pages/Trainers';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Workouts from './pages/Workouts';
import Footer from './components/Footer';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff4d4d',
    },
    secondary: {
      main: '#333333',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/trainers" element={<Trainers />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/workouts" element={<Workouts />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
