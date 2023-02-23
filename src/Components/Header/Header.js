import React from 'react'
import Row from '../BaseComponents/Row/Row'
import Col from '../BaseComponents/Col/Col'
import './Header.css'
import Logo from '../../image/logo1.webp'

export default function Header() {
  return (
    
    <Row classList={'bo h-wrapper'}>
        <Col classList="b">
            <img src={Logo} className="h-logo" alt="" />
        </Col>
        <Col classList="bo c-y-center">
            <Row classList="bo h-nav">
                <Col classList="bo h-nav-item">
                  <a href="#section-1">Home</a>
                </Col>
                <Col classList="bo h-nav-item">
                  <a href="#section-2">About</a>
                </Col>
                <Col classList="bo h-nav-item">
                  <a href="#section-3">Talent</a>
                </Col>
                <Col classList="bo h-nav-item">
                  <a href="#section-4">Stories</a>
                </Col>
                <Col classList="bo h-nav-item">
                  <a href="#section-5">Partners</a>
                </Col>                
            </Row>
        </Col>
    </Row>


  )
}
