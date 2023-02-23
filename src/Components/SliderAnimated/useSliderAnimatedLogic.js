// import Hero from '../../Images/hero.png'
import Slide1 from '../../image/slide11.webp'
import Slide2 from '../../image/slide21.webp'
import Slide3 from '../../image/slide31.webp'

import { useState } from 'react'

export default function useSliderAnimatedLogic() {

  const [sliderIndex, setSliderIndex] = useState(0);
  const [Direction, setDirection] = useState(-1);

  var sliderList = [
        {id:0,image:Slide2},
        {id:1,image:Slide1},
        {id:2,image:Slide3}
  ];

  var animationVariant = {
    initial: Direction => {
      return{
        x: (Direction > 0)? 200 : -200,
        opacity:0
      }
    },
    animate:{
      x:0,
      opacity:1,
      transition:{
        type:'ease-in'
      }
    },
    exit: Direction => {
      return{
        x: (Direction > 0)? -200 : 200,
        opacity:0,
        transition:{
          type:'ease-in'
        }
      }

    }
  }


  function moveRight(){
    setSliderIndex((prevState)=>{

      setDirection(1);
          
      if(prevState != (sliderList.length -1)){
          return prevState+1;
      }
      else{
          return 0;
      }
    });
  }

  function moveLeft(){
    setSliderIndex((prevState)=>{

      setDirection(-1);
          
      if(prevState != 0){
          return prevState - 1;
      }
      else{
          return sliderList.length -1;
      }
    });
  }

  return {
    moveRight,moveLeft,sliderList,sliderIndex,animationVariant,Direction
  }
}
