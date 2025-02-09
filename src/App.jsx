import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Session from "./pages/Session";
import { AppProvider } from './context/Context';

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/session" element={<Session />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;