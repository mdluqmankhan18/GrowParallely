import React from 'react'
import './App.css';
import Header from './componenets/Header/Header';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './componenets/hero/Home';
import About from './componenets/about/About';
import CourseHome from './componenets/courses/CourseHome';
import Journals from './componenets/journals/Journals';
import Contact from './componenets/contact/Contact';
import Team from './componenets/team/Team';


const App = () => {
  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' exact Component={Home} />
        <Route path='/about' exact Component={About} />
        <Route path='/courses' exact Component={CourseHome} />
        <Route path='/team' exact Component={Team} />
        <Route path='/journal' exact Component={Journals} />
        <Route path='/contact' exact Component={Contact} />
      </Routes>
    </Router>
    </>
    
      
      
    
  )
}

export default App



