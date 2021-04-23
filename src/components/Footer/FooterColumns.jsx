import React from 'react';
import style from './Footer.module.css';
import FooterColumn from './FooterColumn';

const  FooterColumns = (props) => {
    
    let footerColomns_1 = props.footer.footerList_1.map (p=> ( 
        <FooterColumn  text={p.text} />
    ));
    let footerColomns_2 = props.footer.footerList_2.map (p=> ( 
        <FooterColumn  text={p.text} />
    ));
    let footerColomns_3 = props.footer.footerList_3.map (p=> ( 
        <FooterColumn  text={p.text} />
    ));
    return (
        <span className={style.footerColumns}>
            <div>{footerColomns_1}</div>
            <div>{footerColomns_2}</div>
            <div>{footerColomns_3}</div>
        
        </span>
    )
    
}
export default FooterColumns;

