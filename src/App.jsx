import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import BlogDirectory from './pages/BlogDirectory';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="site-wrapper" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <main className="container main-wrapper" style={{ flex: 1 }}>
          <div className="layout-grid">
            <div className="main-content-column">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/blog" element={<BlogDirectory />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
            <Sidebar />
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
