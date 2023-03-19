import React from "react"
import "./navbar.scss"

const NavBar = () => {
  return (
    <nav className='navbar'>
      {/* <div className='container'> */}
        <div className='navbar__content'>
          <p className='navbar__logo'>
            LOREMIPSUM.<span className='navbar__span'>NET</span>
          </p>
          <ul className='navbar__menu'>
            <li className='navbar__list'>
              <a className='navbar__link' href='#'>
                БИЗНЕС
              </a>
            </li>
            <li className='navbar__list'>
              <a className='navbar__link' href='#'>
                О НАС
              </a>
            </li>
            <li className='navbar__list'>
              <a className='navbar__link' href='#'>
                ЦЕНЫ
              </a>
            </li>
            <li className='navbar__list'>
              <a className='navbar__link' href='#'>
                ОФОРМИТЬ ЗАКАЗ
              </a>
            </li>
          </ul>
        </div>
      {/* </div> */}
    </nav>
  )
}

export default NavBar
