import React from 'react';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Projects from './components/projects';
import Blog from './components/blog';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ImageCarousel from './components/imageCarousel';
import Carousel from './components/clientCarousel';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/imagecarousel" element={<ImageCarousel />}></Route>
          <Route path="/clientCarousel" element={<Carousel />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
