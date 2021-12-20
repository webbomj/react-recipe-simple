import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './modalWindow.css';
import {setModal} from '../Store/RecipesReducer'
import InputMask from 'react-input-mask';

const ModalWindow = () => {

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const isModal = useSelector(state => state.data.isModal)
  const dispatch = useDispatch()
  
  const handleClick = (e) => {
    e.preventDefault()
    if (name.length > 30 || name.length < 3) {
      let label = document.querySelector('#modalInput-name');
      label.classList.add('modalWindow__label--error');
      setName('')
      return
    } 
    if (phone.trim().length === 0) {
      return
    }
    if (name.trim().length === 0) {
      return
    }

    if (phone.match(/\d/g).join('').length !== 11) {
      let label = document.querySelector('#modalInput-phone');
        label.classList.add('modalWindow__label--error');
        setPhone('')
        return
    }

    if (name.trim().length > 3 && name.trim().length < 30 && phone.trim().match(/\d/g).length === 11 ) {
      console.log('оправили данные, поменялся в модалке контент на спасибо за заказ. мы вам перезвоним в течении 15 минут')
    }
    
  }

  const handleNameInput = (e) => {
    let label = document.querySelector('#modalInput-name')
    label.classList.remove('modalWindow__label--error');
    let name = e.target.value
      .trim()
      .replace(/[а-яё]/gi, '');
   setName(name);
    
  }

  const handlePhoneInput = (e) => {
    let label = document.querySelector('#modalInput-phone')
    label.classList.remove('modalWindow__label--error');
    setPhone(e.target.value)
    // if (e.target.value.length === 0) {
    //   let label = document.querySelector('#modalInput-phone');
    //   label.classList.add('modalWindow__label--error');
    //   let input = document.querySelector('.modalWindow__input');
    //   input.value = '';
    //   return
    // }
    // if (phone.match(/\d/g).length === 11) {
    //   setPhone(e.target.value)
    // } else {
    //   let label = document.querySelector('#modalInput-phone');
    //   label.classList.add('modalWindow__label--error');
    //   let input = document.querySelector('.modalWindow__input');
    //   input.value = '';
    // }
    
  }

  const clickCloseModal = (e) => {
    if (e.target.id === 'modalWindow__back' || e.target.id === "modalWindow__close-button") {
      let modal = document.querySelector('.modalWindow__wrapper');
      modal.classList.add('modalWindow-disabled')
      dispatch(setModal(false))

    }
  }

  return ( 
    <div className={isModal ? 'modalWindow__wrapper' : 'modalWindow__wrapper modalWindow-disabled' }>
      <div className='modalWindow__back' id="modalWindow__back" onClick={(e) => clickCloseModal(e)} >
      </div>
      <div className='modalWindow' >
        <div className='modalWindow__close-button' id="modalWindow__close-button"  onClick={(e) => clickCloseModal(e)}></div>
        <span className='modalWindow__title'>Buy recipie`s book</span>
        <form className='modalWindow-form'>
          <label className='modalWindow__label' htmlFor='modal-name' id="modalInput-name">Name must be between 3 characters and 30</label>
          <input className='modalWindow__input' type="text" id='modal-name' placeholder='Your name' value={name} onChange={(e) => handleNameInput(e)}/>
          <label className='modalWindow__label' htmlFor='modal-phone' id="modalInput-phone">The phone number must be in the format +7 (999) -999-99-99</label>
          {/* <input className='modalWindow__input' type='tel' id='modal-phone' placeholder="Your phone number" value={phone} onChange={(e) => handlePhoneInput(e)}/> */}
          <InputMask 
            mask="+7(999)-999-99-99" 
            maskChar={null} 
            className='modalWindow__input' type='tel' id='modal-phone' placeholder="Your phone number" value={phone} onChange={(e) => handlePhoneInput(e)}
            />
          <button className='modalWindow__button' onClick={(e) => handleClick(e)}>Buy</button>
        </form>
      </div>
    </div>

  );
};

export default ModalWindow;