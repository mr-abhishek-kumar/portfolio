import React from 'react'
import Hero from '../Hero/Hero'
import Skills from '../Skills/Skills'
import WorkExperience from '../WorkExperience/WorkExperience'
import ContactMe from '../ContactMe/ContactMe'
import Projects from '../Projects/Projects'

export default function Home() {
  return (
    <>
        <Hero/>
        <Skills/>
        <WorkExperience/>
        <Projects/>
        <ContactMe/>
    </>
  )
}
