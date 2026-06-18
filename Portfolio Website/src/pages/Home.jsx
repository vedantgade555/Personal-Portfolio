import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Work from '../components/Work'
import Contact from '../components/Contact'
import Education from '../components/Education'

const Home = () => {
  return (
    <div>
         <Hero></Hero>
         <About></About>
         <Education></Education>
         <Skills></Skills>
         <Projects></Projects>
         
         <Work></Work>
         <Contact></Contact>
    </div>
   
  )
}

export default Home