import React from 'react'
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs'
import style from './style.module.css'

export const Sosials = () => {
  return (
    <div className={style.header__sosials}>
      <a href="https://www.linkedin.com/in/akbarhazura/" target="_blank" rel='noreferrer'><BsLinkedin /></a>
      <a href="https://github.com/abazer27" target="_blank" rel='noreferrer'><BsGithub /></a>
      <a href="https://www.instagram.com/akbarhazura/" target="_blank" rel='noreferrer'><BsInstagram /></a>
    </div>
  )
}

export default Sosials;
