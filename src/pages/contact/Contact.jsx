import React from 'react'
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  // FaFacebookF,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa'
import { FiSend } from 'react-icons/fi'
import './contact.css'

const Contact = () => {
  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact_data">
          <h3 className="contact__title">Don't be Shy !</h3>
          <p className='contact__description'>
            Welcome to my portfolio website! I'm thrilled to connect with you.
            Feel free to reach out via the provided contact information.
            Let's collaborate on exciting projects!
          </p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className='info__icon' />

              <div>
                <span className='info__title'> Mail me</span>
                <h4 className='info__desc'>architgupta225@gmail.com</h4>
              </div>
            </div>

            <div className='info__item'>
              <FaPhoneSquareAlt className='info__icon' />

              <div>
                <span className='info__title'>Call me</span>
                <h4 className='info__desc'>+91 9634867048</h4>
              </div>
            </div>
          </div>

          <div className='contact__details' >
            <a href='' className='contact__social-link'>
              {/* <FaFacebookF /> */}
            </a>
            <a href='' className='contact__social-link'>
              {/* <FaFacebookF /> */}
            </a>
            <a href='' className='contact__social-link'>
              {/* <FaFacebookF /> */}
            </a>
            <a href='' className='contact__social-link'>
              {/* <FaFacebookF /> */}
            </a>
          </div>

        </div>

        <form action="https://formsubmit.co/architgupta225@gmail.com" className="contact__form" method='POST'>
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                name='name'
                className="form__control"
                placeholder="Your Name"
                required
              />

            </div>
            <div className="form__input-div">
              <input
                type="email"
                name='email'
                className="form__control"
                placeholder="Your Email"
                required
              />
            </div>
          </div>

          <div className="form__input-div">
            <textarea placeholder='Your Message' name='message' className='form__control textarea' required></textarea>
          </div>

          <button className='button'>
            Send Message
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact