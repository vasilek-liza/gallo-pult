import React from 'react';
import './Menu.css'
import MenuCol from './MenuCol';


const Menu = (props) => {
    return (
        <div>
              <MenuCol  menuCol={props.menuCol} />
        </div>
    )
}

export default Menu;