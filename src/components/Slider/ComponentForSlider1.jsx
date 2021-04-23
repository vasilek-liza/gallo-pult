import React from 'react';
import CaptionForSlider1 from './CaptionForSlider1';
import  './Sliders.css';


const ComponentsForSlider1 = (props) => {
    function createMarkup(props) {
        console.log(props.caption)
        return {__html: props.caption};
      }
  return (
    <div >
        <CaptionForSlider1 className='caption' altText={props.altText} altTextDetails={props.altTextDetails} />  
        <p className='altTextDetailsForSlider--1'><div dangerouslySetInnerHTML={createMarkup(props)} /></p>
             
    </div>
  );
}

export default ComponentsForSlider1;