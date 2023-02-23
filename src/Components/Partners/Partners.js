import React from 'react'
import './Partners.css'
import Row from '../BaseComponents/Row/Row'
import Col from '../BaseComponents/Col/Col'

import Flipkart from '../../image/flipkart-logo.png';
import Tvs from '../../image/tvs-logo.png';
import Uspolo from '../../image/uspolo-logo.png';
import Firstcry from '../../image/firstcry-logo.png';
import Lays from '../../image/lays-logo.png';
import Vodafone from '../../image/vodafone-logo.png';


export default function Partners() {
  return (

    <Col classList="bo c-x-center p-wrapper">
        <Col classList="bo txt-l">Our Partners</Col>
        <Col classList="bo g-5 w-10 p-col-wrapper">
            <Row classList="bo g-3 r-x-center fx-nowrap fx-wrap-s">
                <Col classList="bo w-3 w-12-s c-y-center c-x-center">
                    <img className='p-brand-logo' src={Flipkart} />
                </Col>
                <Col classList="bo w-3 w-12-s c-y-center c-x-center">
                    <img className='p-brand-logo' src={Firstcry} />
                </Col>
                <Col classList="bo w-3 w-12-s c-y-center c-x-center">
                    <img className='p-brand-logo' src={Tvs} />
                </Col>
            </Row>
            <Row classList="bo g-3 r-x-center fx-nowrap fx-wrap-s">
                <Col classList="bo w-3 w-12-s c-y-center c-x-center">
                    <img className='p-brand-logo' src={Vodafone} />
                </Col>
                <Col classList="bo w-3 w-12-s c-y-center c-x-center">
                    <img className='p-brand-logo' src={Lays} />
                </Col>
                <Col classList="bo w-3 w-12-s c-y-center c-x-center">
                    <img className='p-brand-logo' src={Uspolo} />
                </Col>
            </Row>
        </Col>
    </Col>

  )
}
