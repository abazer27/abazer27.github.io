/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import style from './style.module.css'
import { AiOutlineHome, AiOutlineUser, AiOutlinePhone } from 'react-icons/ai'
import { BsBook } from 'react-icons/bs'

export const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#')

  return (
    <div className={style.nav}>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? `${style.active}` : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? `${style.active}` : ''}><AiOutlineUser /></a>
      <a href="#exp" onClick={() => setActiveNav('#exp')} className={activeNav === '#exp' ? `${style.active}` : ''}><BsBook /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? `${style.active}` : ''}><AiOutlinePhone /></a>
    </div>
  )
}

export default Navbar;
