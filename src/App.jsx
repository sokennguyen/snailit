import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Intro from './Intro';
import Showcase from './Showcase';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/intro" element={<Intro />} />
        <Route path="/showcase" element={<Showcase />} />
        <Route path="*" element={<Navigate to="/intro" replace />} />
      </Routes>
    </Router>
  );
}

export default App
