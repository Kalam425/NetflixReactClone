
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MovieGrid from './components/MovieGrid';
import Footer from './components/Footer';
import React, { useState } from 'react';

import Movies from './components/Movies';
import TVShows from './components/TVShows';
import MyList from './components/MyList';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : "light"}>
      <Router>
        <Navbar toggleDarkMode={() => setDarkMode(!darkMode)} />
        <Routes>
          <Route path="/" element={<><Hero /><MovieGrid /></>} />
          <Route path="/tv-shows" element={<TVShows />} />
<Route path="/movies" element={<Movies />} />
<Route path="/my-list" element={<MyList />} />

     
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
