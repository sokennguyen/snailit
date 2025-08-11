import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Intro from './Intro';
import Desc from './Desc';
import Showcase from './Showcase';
import Privacy from './Privacy';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/intro" element={<Intro />} />
        <Route path="/desc" element={<Desc />} />
        <Route path="/showcase" element={<Showcase />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="*" element={<Navigate to="/intro" replace />} />
      </Routes>
    </Router>
  );
}

export default App
