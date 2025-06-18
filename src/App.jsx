import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaEnvelope } from 'react-icons/fa';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import User from './components/User';
import Oldbook from './components/Oldbook';
import Newbook from './components/NewBook';
import Dashboard from './components/Dashboard';
import Login from './components/Login'

export default function App() {
  return (
    <BrowserRouter>
      <nav style={styles.navbar}>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <Link to="/" style={styles.link}><FaHome /> Home</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/about" style={styles.link}><FaInfoCircle /> About</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/contact" style={styles.link}><FaEnvelope /> Contact</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/User/1" style={styles.link}><FaEnvelope /> User1</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/User/2" style={styles.link}><FaEnvelope /> User2</Link>
          </li>
         
          <li style={styles.navItem}>
            <Link to="/User/3" style={styles.link}><FaEnvelope />User3</Link>
          </li>
           <li style={styles.navItem}>
            <Link to="/new/Oldbook" style={styles.link}><FaEnvelope />Oldbook</Link>
          </li>
           
           <li style={styles.navItem}>
            <Link to="/login" style={styles.link}><FaEnvelope />login</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/:id" element={<User/>}/>
                      <Route path="/new">
                          <Route path="Oldbook" element={<Oldbook />}/>
                          <Route path="Newbook" element={<Newbook />}/>
                      </Route>
       
        <Route path="/login" element={<Login />}/>
         <Route path="/dashboard" element={<Dashboard />}/>
      </Routes>
    </BrowserRouter>
  );
}

const styles = {
  navbar: {
    background: '#282c34',
    padding: '1rem',
  },
  navList: {
    display: 'flex',
    gap: '2rem',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  navItem: {
    fontSize: '18px',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
};
