import React from 'react'
import style from './style.module.css'
import { MdOutlineCopyright } from 'react-icons/md'

export const Footer = () => {
  return (
    <section id='footer' className={style.footer__container}>
      <p className={style.footer__cr}>
        <MdOutlineCopyright /><span>Akbar Hazura Neldi</span>
      </p>
    </section>
  )
}

export default Footer;
