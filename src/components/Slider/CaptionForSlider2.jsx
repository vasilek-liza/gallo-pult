import React from 'react';
import  './Sliders.css';


const CaptionForSlider2 = (props) => {
  return (
        <div className="sliderTextForSlider--2"> {props.caption}
            <p className="sliderTextDetailsForSlider--2">{props.captionDetails}</p>
        </div>
  );
}

export default CaptionForSlider2;