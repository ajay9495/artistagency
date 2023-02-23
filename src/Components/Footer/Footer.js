import React from 'react'
import Wrapper from '../BaseComponents/Wrapper/Wrapper'
import Row from '../BaseComponents/Row/Row'
import Col from '../BaseComponents/Col/Col'
import Section from '../BaseComponents/Section/Section'
import FaceBookIcon from '../../image/facebook-icon.png'
import TwitterIcon from '../../image/twitter-icon.png'
import InstaIcon from '../../image/instagram-icon.png'
import './Footer.css'

export default function Footer() {
  return (

        <Wrapper>
            <Row classList={'bo r-x-center g-5 footer'} >
                <Col classList={'bo social-icon-wrapper'} >
                    <img className='social-icon' src={FaceBookIcon}  />
                </Col>
                <Col  classList={'bo social-icon-wrapper'} >
                    <img className='social-icon'  src={TwitterIcon}  />
                </Col>
                <Col  classList={'bo social-icon-wrapper'} >
                    <img  className='social-icon'  src={InstaIcon}  />
                </Col>
            </Row>
        </Wrapper>

  )
}
