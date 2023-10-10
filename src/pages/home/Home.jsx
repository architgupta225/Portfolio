import React from 'react'
import Profile from "../../assets/head.svg"
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa"
import "./home.css"

const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt='' className='home__img' />

      <div className="home__content">
        <div className='home__data'>
          <h1 className='home__title'>
            <span>I'm Archit Gupta.</span>
            <br />
            Web Designer
          </h1>
          <p className='home__description'>
            I'm a dedicated front-end developer with 1.5+ years of ReactJS experience, specializing in HTML, CSS, JavaScript, and seamless REST API integration. I excel in user story grooming, ensuring alignment with requirements, and oversee the full SDLC, from
            ideation to deployment. Proficient in Agile Scrum, I facilitate effective project management, adapting to evolving needs. My skills drive
            successful outcomes.
          </p>

          <Link to='/about' className='button'>
            More About Me{' '}
            <span className='button__icon'>
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className='color__block'></div>
    </section>
  )
}

export default Home