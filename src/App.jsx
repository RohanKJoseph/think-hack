import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RotatingText from './styles/RotatingText';
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <RotatingText />;
  }

  return (
     
      <Routes>
 
        <Route path="/" element={<Layout />}>
     
          <Route index element={<HomePage />} />
         
        </Route>
      </Routes>
     
  );
}

export default App;