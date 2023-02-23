import React from 'react'
import './Talent.css'

import Col from '../BaseComponents/Col/Col'
import SliderAnimated from '../SliderAnimated/SliderAnimated'

export default function Talent() {
  return (
    
      <Col classList={'b t-wrapper c-x-center'}>

            <div className='txt-l'>
                Top Talents
            </div>

            <div className="b t-outer-box">
                <div className="t-inner-box"> 
                    <SliderAnimated />
                </div>
            </div>
      </Col>

  )
}
