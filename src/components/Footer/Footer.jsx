import React from "react"
import "./footer.scss"
import qiwi from "../../assets/icon/qiwi.svg"
import yandex from "../../assets/icon/yandex.svg"
import webmoney from "../../assets/icon/webmany.svg"
import info from "../../assets/icon/infomail.svg"
import vk from "../../assets/icon/vk.svg"

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer__content'>
          <p className='footer__text'>
            © 2023 «LoremIpsum.net» Все права защищены.
          </p>
          <div className='footer__blocks'>
            <div className='footer__block'>
              <img src={qiwi} alt='qiwi' />
              <p className='footer__subtext'>QIWI wallet</p>
            </div>
            <div className='footer__block'>
              <img src={yandex} alt='qiwi' />
              <p className='footer__subtext'>Yandex Money</p>
            </div>
            <div className='footer__block'>
              <img src={webmoney} alt='qiwi' />
              <p className='footer__subtext'>Web Money</p>
            </div>
          </div>
          <div className='footer__blocks'>
            <a
              href='info@ipsum228.com'
              target='_blank'
              className='footer__block'
            >
              <img src={info} alt='qiwi' />
              <p className='footer__subtext'>info@ipsum228.com</p>
            </a>
            <a href='https://vk.com/' target='_blank' className='footer__block'>
              <img src={vk} alt='qiwi' />
              <p className='footer__subtext'>Мы вконтакте</p>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
