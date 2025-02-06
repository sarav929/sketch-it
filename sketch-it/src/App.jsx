import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Session from "./pages/Session";
import "./styles/App.css";
import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
}

export const AppProvider = ({children}) => {
  const [subject, setSubject] = useState(null);
  const [timer, setTimer] = useState(0);

  const resetState = () => {
    setSubject(null);
    setTimer(0);
  };

  return (
    <AppContext.Provider value={{ subject, setSubject, timer, setTimer, resetState }}>
      {children}
    </AppContext.Provider>
  );
};

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