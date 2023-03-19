import React from "react"
import "./hero.scss"
import loop from "../../assets/icon/loop.svg"
import percent from "../../assets/icon/percent.svg"
import add from "../../assets/icon/add.svg"
import email from "../../assets/icon/email.svg"
import many from "../../assets/icon/many.svg"
import line from "../../assets/icon/line.svg"
import Form from "../Form/Form"

import { FaArrowUp } from "react-icons/fa"

const Hero = () => {
  return (
    <div className='hero'>
      <div className='container'>
        <div className='hero__hat'>
          <h2
            className='hero__title'
            data-aos='zoom-in'
            data-aos-duration='1500'
          >
            Оформление <span className='hero__span'>Заказа</span>
          </h2>
          <p className='hero__subtitle'>
            Перед заполнением формы ознакомьтесь с нашей схемой работы!
          </p>
        </div>
        <div className='hero__content'>
          <div className='hero__block'>
            <div
              className='hero__icons'
              data-aos='fade-right'
              data-aos-duration='1200'
            >
              <img className='hero__icon' src={loop} alt='loop' />
            </div>
            <p className='hero__text'>Lorem ipsum dolor sit amet</p>
          </div>

          <div
            className='hero__lines'
            data-aos='zoom-in'
            data-aos-duration='1300'
          >
            <img className='hero__line' src={line} alt='/' />
          </div>

          <div className='hero__block'>
            <div className='hero__icons'>
              <img className='hero__icon' src={percent} alt='percent' />
            </div>
            <p className='hero__text'>Сonsecteturadipiscing elit</p>
          </div>

          <div
            className='hero__lines'
            data-aos='zoom-in'
            data-aos-duration='1300'
          >
            <img className='hero__line' src={line} alt='/' />
          </div>

          <div className='hero__block'>
            <div className='hero__icons'>
              <img className='hero__icon' src={add} alt='add' />
            </div>
            <p className='hero__text'>Sed do eiusmod tempor</p>
          </div>

          <div
            className='hero__lines'
            data-aos='zoom-in'
            data-aos-duration='1300'
          >
            <img className='hero__line' src={line} alt='/' />
          </div>

          <div className='hero__block'>
            <div className='hero__icons'>
              <img className='hero__icon' src={email} alt='email' />
            </div>
            <p className='hero__text'>Esse cillum dolore eu fugiat</p>
          </div>

          <div
            className='hero__lines'
            data-aos='zoom-in'
            data-aos-duration='1300'
          >
            <img className='hero__line' src={line} alt='/' />
          </div>

          <div className='hero__block'>
            <div
              className='hero__icons'
              data-aos='fade-left'
              data-aos-duration='1200'
            >
              <img className='hero__icon' src={many} alt='many' />
            </div>
            <p className='hero__text'>
              Excepteur sint occaecat cupidatat non proident
            </p>
          </div>
        </div>
        <Form />
      </div>
      <a href='#head' className='hero__reverse'>
        <FaArrowUp className='hero__up' size={30} />
      </a>
    </div>
  )
}

export default Hero
