import React from 'react';
import './App.scss';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Profile />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer/>
      </main>
    </div>
  );
}

export default App;
