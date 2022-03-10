import React, { useRef } from 'react'
import style from './style.module.css'
import { HiOutlineMail } from 'react-icons/hi'
import { FaTelegramPlane, FaLinkedinIn } from 'react-icons/fa'
import emailjs from 'emailjs-com';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gvku3or', 'template_vakqho4', form.current, 'DgwvN-7Tw6gtB6Snf')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get In TOuch</h5>
      <h2>Contact Me</h2>
      <div className={`container ${style.contact__container}`}>
        <div className={style.contact__options}>
          <article className={style.contact__option}>
            <HiOutlineMail className={style.contact__option_icon} />
            <h4>Email</h4>
            <h5>akbarhazura@gmail.com</h5>
            <a href="mailto:akbarhazura@gmail.com">Send a messege</a>
          </article>
          <article className={style.contact__option}>
            <FaLinkedinIn className={style.contact__option_icon} />
            <h4>LinkedIn</h4>
            <h5>Akbar Hazura</h5>
            <a href="www.linkedin.com/in/akbarhazura" target="_blank" rel='noreferrer'>Send a messege</a>
          </article>
          <article className={style.contact__option}>
            <FaTelegramPlane className={style.contact__option_icon} />
            <h4>Telegram</h4>
            <h5>Akbar Hazura</h5>
            <a href="https://t.me/akbarhazura" target="_blank" rel='noreferrer'>Send a messege</a>
          </article>
        </div>
        <form onSubmit={sendEmail} ref={form} className={style.contact__form}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Massage' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Massage</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;
