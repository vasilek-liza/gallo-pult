import React from 'react';
import style from './Footer.module.css'

const  FooterColumn = (props) => {
    
    return (
        <ul className={style.footerColumns}>
            <li>        
                 <a  className={style.footerColumn}  href="#">{props.text}</a>   
             </li>
        </ul>
       
        
    )
    
}
export default FooterColumn;

