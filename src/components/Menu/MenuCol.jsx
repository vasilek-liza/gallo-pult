import React, { useRef, useState } from 'react';
import { Items } from './components/Items';
import './Menu.css';


const MenuCol = (props) => {
    const ref = useRef(null);
    const [hovered, setHovered] = useState(false);
    const toggleHover = (className) => {
        let removeClass;
        if (ref.current.classList[1]) {
            removeClass = ref.current.classList[1];
            ref.current.classList.remove(removeClass);
        }
            ref.current.classList.add(className);
    }
    return (
        <div style={{display: 'flex', flexWrap: 'nowrap'}} className='menu'>
            <ul className="menu__widget widget">
                {props.menuCol.map(p => <Items  {...p} hovered={hovered} toggleHover={toggleHover}/>)}    
            </ul>
            <div ref={ref} className={'default-class ' + `${props.menuCol[0].className}`} style={{flexGrow: "1"}}/>
        </div>     
    );
  
}

export default MenuCol;