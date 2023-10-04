import React from 'react'
import { FaDownload } from 'react-icons/fa'
import CV from "../../assets/steve-Cv.pdf"
import Stats from '../../components/Stats'
import { personalInfo } from '../../data'
import './about.css'
import Skills from '../../components/Skills'
import { resume } from '../../data'
import ResumeItem from '../../components/ResumeItem'

const About = () => {
  return (
    <main className="section container">
      <section className='about'>
        <h2 className="section__title">
          About <span>Me</span>
        </h2>
        <div className="about__container grid">
          <div className="about__info">
            <h3 className="section__subtitle">Personal Infos</h3>
            <ul className="info__list grid">
              {personalInfo.map(({ title, description }, index) => (
                <li className="info__item" key={index}>
                  <span className='info__title'>{title}</span>
                  <span className='info__description'>{description}</span>
                </li>
              )
              )}
            </ul>
            <a href={CV} download='' className="button">
              Download CV <span className='button__icon'><FaDownload /></span>
            </a>
          </div>
          <div className="stats grid">
            <Stats />
          </div>
        </div>
      </section>
      <div className='separator' />

      <section className='skills'>
        <h3 className="section__subtitle">My Skills </h3>

        <div className="skills__container grid">
          <Skills />
        </div>
      </section>

      <div className='separator' />

      <section className="resume">
        <h3 className="section__subtitle subtitle__center">
          Experience and Education
        </h3>
        <div className="resume__container grid">
          <div className="resume__data">
            {resume.map((val) => {
              if(val.category === 'experience'){
                return <ResumeItem key={val.id} {...val} />
              }
            })}
          </div>
          <div className="resume__data">
            {resume.map((val) => {
              if(val.category === 'education'){
                return <ResumeItem key={val.id} {...val} />
              }
            })}
          </div>
        </div>
      </section>
    </main>
  )
}

export default About