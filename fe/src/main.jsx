import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router";
import { Feed, Users } from './pages'
import { Navbar } from './components/navigaton/Navbar';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={  <Feed /> } />
      <Route  path="/users" element={  <Users /> } />
    </Routes>
    
  </BrowserRouter>
)
