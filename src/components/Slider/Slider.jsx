import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ComponentForSlider1 from './ComponentForSlider1';
import ComponentForSlider2 from './ComponentForSlider2';
import style from './Slider.module.css'

const Slider = (props) => {
  const slides = props.itemsForSlider.map((item) => {
    
    return (
      <Carousel.Item interval={1000}>
        <img
          className={style.slider}
          src={item.src}
          alt={item.altText}
        />
        <Carousel.Caption>
          <div style={props.className ? {display: 'block'} :  {display:'none'} }> <ComponentForSlider1  caption={item.caption} altTextDetails={item.altTextDetails}  altText={item.altText} /></div>
          <div style={props.className ? {display: 'none'} :  {display:'block'} }><ComponentForSlider2  caption={item.caption} captionDetails={item.captionDetails}  altText={item.altText} /></div>
          
        </Carousel.Caption>
      </Carousel.Item>
    
    );
  });
  return (
    <Carousel>
      {slides}
    </Carousel>
  );
}

export default Slider;

