import React, { useState } from "react"
import "./navbar.scss"

const NavBar = () => {
  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    setIsActive(!isActive)
  }

  const handleLinkClick = () => {
    setIsActive(false)
  }

  return (
    <nav className='navbar'>
      <div className='navbar__content'>
        <div className='navbar__logo'>
          LOREMIPSUM.<span className='navbar__span'>NET</span>
        </div>
        <div
          className={`hamburger ${isActive ? "active" : ""}`}
          onClick={handleClick}
        >
          <span className='hamburger__bar'></span>
          <span className='hamburger__bar'></span>
          <span className='hamburger__bar'></span>
        </div>
        <ul className={`navbar__menu ${isActive ? "active" : ""}`}>
          <li className='navbar__list'>
            <a className='navbar__link' href='#' onClick={handleLinkClick}>
              БИЗНЕС
            </a>
          </li>
          <li className='navbar__list'>
            <a className='navbar__link' href='#' onClick={handleLinkClick}>
              О НАС
            </a>
          </li>
          <li className='navbar__list'>
            <a className='navbar__link' href='#' onClick={handleLinkClick}>
              ЦЕНЫ
            </a>
          </li>
          <li className='navbar__list'>
            <a className='navbar__link' href='#' onClick={handleLinkClick}>
              ОФОРМИТЬ ЗАКАЗ
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
