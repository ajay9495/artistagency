import React from 'react'
import Row from '../BaseComponents/Row/Row'
import Col from '../BaseComponents/Col/Col'
import './About.css'

export default function About() {
  return (

    <Col classList="bo c-x-center a-wrapper">
        <Col classList="bo txt-l txt-l-s">Why Choose Us</Col>
        <Col classList="bo w-10 w-11-s about-col">
            <Row classList="bo r-x-start">
                <Col classList="bo w-6 w-12-s">
                    <Row classList="bo fx-nowrap">
                        <Col classList="bo about-large">01</Col>
                        <Col classList="bo g-3  c-expand a-sub-left">
                            <Row classList={'txt-m txt-m-s txt-bold-m'}>
                                No 1 in the industry
                            </Row>
                            <Row classList={'txt-s'}>
                                We are a leading actor hiring agency dedicated to connecting 
                                talented actors with the right roles and productions
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row classList="bo r-x-center">
                <Col classList="bo w-6 w-12-s">
                    <Row classList="bo fx-nowrap">
                        <Col classList="bo about-large">02</Col>
                        <Col classList="bo g-3  c-expand a-sub-left">
                            <Row classList={'txt-m txt-m-s txt-bold-m'}>
                                Experienced team
                            </Row>
                            <Row classList={'txt-s'}>
                                Our experienced team works closely with casting directors 
                                and producers to find the best fit for each project
                            </Row>
                        </Col>
                    </Row>
                </Col>          
            </Row>
            <Row classList="bo r-x-end">
            <Col classList="bo w-6 w-12-s">
                    <Row classList="bo fx-nowrap">
                        <Col classList="bo about-large">03</Col>
                        <Col classList="bo g-3  c-expand a-sub-left">
                            <Row classList={'txt-m txt-m-s txt-bold-m'}>
                                Experts and beginers
                            </Row>
                            <Row classList={'txt-s'}>
                                Whether you're a seasoned actor or just starting out, 
                                we're here to help you navigate the industry and take your 
                                career to the next level
                            </Row>
                        </Col>
                    </Row>
                </Col>              
            </Row>
        </Col>
    </Col>

  )
}
