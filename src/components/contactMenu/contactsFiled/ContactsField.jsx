import classNames from 'classnames';
import React, { useRef, useState } from 'react';
import s from './ContactsField.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setName, setNumberOfPhone } from '../../../redux/contact';
import emailjs from 'emailjs-com'

const ContactsField = () => {


  const form = useRef();
  const dispatch = useDispatch()
  const name = useSelector((state) => state.contact.name)
  const number = useSelector((state) => state.contact.numberOfPhone)

  const changeInputName = (e) => dispatch(setName(e.target.value))
  const changePhone = (e) => dispatch(setNumberOfPhone(e.target.value))
  
  const clearForm = () => {
    dispatch(setName(''))
    dispatch(setNumberOfPhone(''))
  }

  const sendData = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      // process.env.REACT_APP_SERVICE_ID,
      'service_j2377ik',
      // process.env.REACT_APP_TEMPLATE_ID,
      'template_7o1awus',
      form.current,
      // process.env.REACT_APP_PUBLIC_KEY
      'vfVez2I2zHITj1jpX'
    )
      .then(
        (result) => {
          alert('message sent successfully...');
          console.log(result.text);
        },
        (error) => {console.log(error.text);},
      )
      clearForm()
  };

  return (
    <div className={s.box}>

      <form ref={form} onSubmit={ sendData}>

        <div className={s.inputs}>
          <input type="text" placeholder="Ваше Ім'я" onChange={changeInputName} value={name} 
          name='user_name'required minLength="2"
          />
          <input type="text" placeholder='Ваш телефон' onChange={changePhone} value={number} 
          name='user_phone' required minLength="10" maxLength="12"
          />
        </div>

        <div className={s.inputs2}>
          <span>
            *Ми нікому не передаємо ваші персональні дані.
          </span>
          <input type="submit" value="Зателефонуйте" />
        </div>

      </form>

    </div>

  );
}
export default ContactsField;