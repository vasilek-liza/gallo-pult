
import React from 'react';
import HeaderLabel from './HeaderLabel';
import Logo from './Logo';
import style from './Header.module.css'

const Header=() =>{
  return (
    <div className={style.header}>
      <a  href="https://www.pult.ru/" >
        <HeaderLabel />
      </a>
      <a href="https://www.pult.ru/">
         <Logo />
      </a> 
        
    </div>
  );
}

export default Header;