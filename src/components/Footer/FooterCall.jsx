import React from 'react';
import Logo from '../Header/Logo';
import style from './Footer.module.css'

const  FooterCall = () => {
    return (
        <div className={style.footerCallElements}>
            <div className={style.footerCall_Logo}><a href="https://www.pult.ru/"> <Logo /></a></div>
            
            <div>
             <a className={style.footerCallNamber} href="tel:+78005555152" target="_blank" rel="noreferrer">8(800)555-51-52</a>
             <div><p className={style.footerCall_text}>Звонок по России бесплатный</p></div>
            </div>
            
        </div>
        
    )
    
}
export default FooterCall;