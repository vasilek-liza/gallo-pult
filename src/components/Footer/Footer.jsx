
import React from 'react';
import style from './Footer.module.css';
import FooterCall from './FooterCall';
import FooterColumns from './FooterColumns';

const Footer=(props) => {
  return (
    <span>
      <div className={style.footer}>
        <FooterCall className={style.footerCall} />
        <FooterColumns footer={props.footer} />
      </div>
      <p className={style.footer_copyring} >2021 © / pult.ru / все права защищены</p>
  
    </span>
      
  );
}

export default Footer;
