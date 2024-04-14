import React from 'react';

import home from '../assets/Images/gettingstarted/svghome.svg';
import background from '../assets/Images/gettingstarted/svgbackground.svg';
import indicator from '../assets/Images/gettingstarted/svgIndicator.svg';
import arrow from '../assets/Images/gettingstarted/arrow-long-right.svg';
//*//
<img
          loading="lazy"
          src={background}
          className="image-full"
        />
        //**/ */

function GettingStarted() {
  return (
    <div className="flex-container">
      <div className="outer-container">
        <div className="inner-container">
          <div className="home">
              <img
              loading="lazy"
              srcSet={home}
              className="image-stretch"
              />
          </div> 
          <img
            loading="lazy"
            src={indicator}
            className="logo"
          />
          <div className="title">Welcome in SMARTHOME</div>
          <div className="subtitle">
            You will need to login or register to enjoy our application.
          </div>
          <div className="button-container">
            <div className="button">
              <div className="button-text">Get Started</div>
              <img
                loading="lazy"
                src={arrow}
                className="button-icon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GettingStarted;
