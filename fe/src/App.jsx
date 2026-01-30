import { BrowserRouter, Route, Routes } from "react-router";
import { Feed, Users } from './pages'
import { Navbar } from './components/navigaton/Navbar';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
