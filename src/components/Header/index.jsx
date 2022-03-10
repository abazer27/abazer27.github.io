import React from 'react'
import style from './style.module.css'
import CTA from './CTA'
import Me from '../../assets/img/Me.png'
import Sosials from './Sosials'

export const Header = () => {
  return (
    <div className={style.header}>
      <div className={`container ${style.header__container}`}>
        <h5>Hello I'm</h5>
        <h1 className={style.name}>Akbar Hazura Neldi</h1>
        <h5 className="text-light">
          Frontend Developer
        </h5>
        <CTA />
        <Sosials />
        <div className={style.profile}>
          <img src={Me} alt="Akbar" className={style.me} />
        </div>
        <a href="#footer" className={style.scroll__down}>Scroll Down</a>
      </div>
    </div>
  )
}

export default Header;
