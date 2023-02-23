import React from 'react'
import './Hero.css'
import Row from '../BaseComponents/Row/Row'
import Col from '../BaseComponents/Col/Col'

import Image from '../../image/subject.png'

export default function Hero() {
  return (
    
        <Row classList="hero-row">
          <Col classList="bo w-7 w-12-s c-x-start h-txt-wrapper">
            <div className='h-outer-box '>
              <div className='h-inner-box'>
                <div className="txt-xl txt-xl-s">
                  Thespian
                </div>
              </div>
              <div className="h-subtitile txt-s txt-s-s">
                  No 1 actor hiring company
              </div>
            </div>
          </Col>
          <Col classList="bo w-5 w-12-s c-x-start c-x-center-s h-image-col">
            <img className='h-image' src={Image} alt="" />
          </Col>
        </Row>    
  )
}
