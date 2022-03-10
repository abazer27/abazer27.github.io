import React from 'react'
import CV from '../../assets/doc/CV.pdf'
import style from './style.module.css'

export const CTA = () => {
  return (
    <div className={style.cta}>
      <a href={CV} download className='btn'>Download CV</a>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>  
    </div>
  )
}

export default CTA;
