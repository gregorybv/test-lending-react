import React, { useState } from "react"

import "./form.scss"
import file from "../../assets/icon/file.svg"

const Form = () => {
  const [value, setValue] = useState(33)

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  // Dropdown
  const [selectedValue, setSelectedValue] = useState("")

  function handleDropdownClick() {
    const dropdownList = document.querySelector(".dropdown__list")
    dropdownList.classList.toggle("dropdown__list--visible")
  }

  function handleListItemClick(e) {
    e.stopPropagation()
    const selectedListItem = e.target
    const value = selectedListItem.dataset.value
    setSelectedValue(value)
    const dropdownButton = document.querySelector(".dropdown__button")
    dropdownButton.innerText = selectedListItem.innerText
    dropdownButton.focus()
    const dropdownInput = document.querySelector(".dropdown__input-hidden")
    dropdownInput.value = value
    const dropdownList = document.querySelector(".dropdown__list")
    dropdownList.classList.toggle("dropdown__list--visible")
  }

  //

  return (
    <form className='form'>
      <div className='form__labels'>
        {/*  */}
        <div className='form-group'>
          <div className='dropdown'>
            <button
              type='button'
              className='dropdown__button'
              onClick={handleDropdownClick}
            >
              Выберите тип системы
            </button>
            <ul className='dropdown__list'>
              <li
                className='dropdown__list-item'
                data-value='travel'
                onClick={handleListItemClick}
              >
                Sed ut perspiciatis
              </li>
              <li
                className='dropdown__list-item'
                data-value='lessons'
                onClick={handleListItemClick}
              >
                Nemo enim ipsam
              </li>
              <li
                className='dropdown__list-item'
                data-value='photo'
                onClick={handleListItemClick}
              >
                Et harum quidem
              </li>
              <li
                className='dropdown__list-item'
                data-value='sports'
                onClick={handleListItemClick}
              >
                Temporibus autem
              </li>
              <li
                className='dropdown__list-item'
                data-value='sport'
                onClick={handleListItemClick}
              >
                Itaque earum rerum
              </li>
            </ul>
            <input
              type='text'
              name='select-category'
              value={selectedValue}
              className='dropdown__input-hidden'
              readOnly
            />
          </div>
        </div>

        {/*  */}

        <label className='form__label'>
          <input
            className='form__input'
            name='email'
            type='email'
            placeholder='Ваш e-mail'
            required
          />
        </label>

        <label className='form__label'>
          <input
            name='name'
            className='form__input'
            type='text'
            placeholder='Ваше имя'
            required
          />
        </label>
      </div>

      <div className='form__labels'>
        <label className='form__slider'>
          <div className='form__values'>
            Sed ut perspiciatis, unde omnis iste natus
            <p className='form__value'>{value}%</p>
          </div>
          <input
            className='form__slide'
            name='slide'
            type='range'
            min='0'
            max='100'
            value={value}
            onChange={handleChange}
          />
        </label>

        <label className='form__pin'>
          <input
            className='form__input'
            name='file'
            type='file'
            style={{ display: "none" }}
          />
          <img className='form__icon' src={file} alt='file' />
          <span class='form__text'>Прикрепить файл</span>
        </label>
      </div>

      <button type='submit' className='form__button'>
        Отправить
      </button>
    </form>
  )
}

export default Form
