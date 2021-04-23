import React from 'react';
import  './Sliders.css';
import style from './Slider.module.css'


const CaptionForSlider1 = (props) => {
  return (
    <div >
      <p className={style.altTextSlider_1}>{props.altText}</p>
      <p className={style.altTextDetails}>{props.altTextDetails}</p> 
    </div>
  );
}

export default CaptionForSlider1;