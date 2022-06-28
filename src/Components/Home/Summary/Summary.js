import React, { useEffect, useState } from 'react'
import './Summary.css'
import CountUp, { } from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';
function Summary() {

  return (
    <div className='py-5 text-center  summary-container'>
      <div className='container'>
        <h1 className='uppercase card-text_header pb-5 '>Numbers Speak</h1>
        <p>I’ve given up trying to reassure . ll let the numbers speak for themselves.</p>
        <div class="d-flex summary_container">
          <div class="card_col">
            <div class=" text-center h-100">
              <div class="card-body">
                <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                  {({ isVisible }) => (
                    <h1 className='card_counters' style={{ height: 70 }}>
                      {isVisible ? <CountUp end={1} /> : null}+
                    </h1>
                  )}
                </VisibilitySensor>
                <p class="card-text">Years of Experience</p>
                <p class="card-text">Be an agent of grace</p>
              </div>
            </div>
          </div>
          <div class=" card_col">
            <div class=" text-center h-100">
              <div class="card-body">
                <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                  {({ isVisible }) => (
                    <h1 className='card_counters' style={{ height: 70 }}>
                      {isVisible ? <CountUp end={1000} duration="1" /> : null}+
                    </h1>
                  )}
                </VisibilitySensor>
                <p class="card-text">Happy Clients</p>
                <p class="card-text">A satisfied customer is the best business strategy of all</p>
              </div>
            </div>
          </div>
          <div class=" card_col">
            <div class=" text-center h-100">
              <div class="card-body">
                <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                  {({ isVisible }) => (
                    <h1 className='card_counters' style={{ height: 70 }}>
                      {isVisible ? <CountUp end={50} duration="1" /> : null}
                    </h1>
                  )}
                </VisibilitySensor>
                <p class="card-text">Programs & Training's</p>
                <p class="card-text">Make yoga your life style</p>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Summary