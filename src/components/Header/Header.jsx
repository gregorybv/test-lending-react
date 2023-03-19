import React from "react"
import "./header.scss"
import NavBar from "../NavBar/NavBar"

const Header = () => {
  return (
    <header id='head' className='header'>
      <NavBar />
      <div className='container'>
        <div className='header__content'>
          <h1 className='header__title'>
            <span className='header__span'>Lorem ipsum</span> dolor sit <br />{" "}
            amet consectetur
            <span className='header__span'> adipiscing</span>
          </h1>
          <nav className='header__nav'>
            <p className='header__text'>
              At vero eos et accusamus et iusto odio dignissimos ducimus!
            </p>
            <ul className='header__list'>
              <li className='header__item'>- Totam rem aperiam eaque ipsa</li>
              <li className='header__item'>
                - Sit voluptatem accusantium doloremque laudantium
              </li>
              <li className='header__item'>
                - Sed ut perspiciatis, unde omnis iste natus error
              </li>
            </ul>
          </nav>
          <div className='header__buttons'>
            <button className='header__button' type='button'>
              заказать
            </button>
            <button className='header__button' type='button'>
              подробнее
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
