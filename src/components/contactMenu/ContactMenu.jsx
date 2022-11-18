import React from 'react';
import s from './ContactMenu.module.scss'
import ContactsField from './contactsFiled/ContactsField';
import Contactinfo from './contactsInfo/Contactinfo';



const ContactMenu = () => {

    const bgUrl = `url(${process.env.PUBLIC_URL + "images/ContactMenu.png"})`
    return (
        <div className={s.box} style={{ backgroundImage: bgUrl }} id='ContactMenu'>
            <div className={s.effect}>
                <div className={s.content}>

                        <Contactinfo />
                        <ContactsField />


                </div>
            </div>
        </div>
    );
}
export default ContactMenu;
