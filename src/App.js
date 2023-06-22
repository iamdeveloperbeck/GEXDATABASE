import './App.css';
import { Route, Routes } from 'react-router-dom';
import Admin from './components/Admin';
import { Hero } from './components/Hero';

function App() {
  return (
    <>
      <Routes>
        <Route path='/admin' element={<Admin />} />
        <Route path='/hero' element={<Hero />} />
      </Routes>
    </>
  );
}

export default App;
