import React from 'react';
import CaptionForSlider2 from './CaptionForSlider2';
import  './Sliders.css';

const ComponentsForSlider2 = (props) => {
  
  return (
    <div >
        <CaptionForSlider2 className='caption' caption={props.caption} captionDetails={props.captionDetails} />  
        <p className='altTextDetailsForSlider--2'>{props.altText}</p>
             
     </div>
  );
}

export default ComponentsForSlider2;