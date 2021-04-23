import React from 'react';
import './Items.css';

export const Items = (props) => {
    return (
        <li  >
            <div className={props.hovered ? 'menu_widget_text_active' : 'menu_widget_text'}>
                <a onMouseEnter={() => props.toggleHover(props.className)} 
                 href={props.href}>{props.text}</a>
            </div>
        </li>
)}