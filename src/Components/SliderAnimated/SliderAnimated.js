import React from 'react'
import Wrapper from '../BaseComponents/Wrapper/Wrapper'
import Row from '../BaseComponents/Row/Row'
import Col from '../BaseComponents/Col/Col'
import useSliderAnimatedLogic from './useSliderAnimatedLogic'
import { motion,AnimatePresence } from 'framer-motion'
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import ChevronRight from '@mui/icons-material/ChevronRight';

import './SliderAnimated.css'


export default function SliderAnimated() {

    const {moveRight,moveLeft,sliderList,sliderIndex,animationVariant,Direction} = useSliderAnimatedLogic();

  return (

    <>
        <div className="bo sa-wrapper">
            <AnimatePresence initial={false} custom={Direction}>
                <motion.img 
                    variants={animationVariant}
                    animate='animate'
                    initial='initial'
                    exit='exit'
                    className='sa-image' src={sliderList[sliderIndex].image} alt=""
                    key={sliderIndex}
                    custom={Direction}
                    />
            </AnimatePresence>
            <div className="bo sa-arrows sa-arrow-left" onClick={moveLeft}>
              <ChevronLeft  /> 
            </div>
            <div className="bo sa-arrows sa-arrow-right" onClick={moveRight}>
              <ChevronRight  /> 
            </div>
        </div>
      
    </>


  )
}
