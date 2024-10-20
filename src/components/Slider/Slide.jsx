import React, { useEffect, useState } from 'react'
import  './Slider.css'

//? Slider Imaages
import one from '../../Assests/SliderImages/one.jpg'
import two from '../../Assests/SliderImages/two.webp'
import three from '../../Assests/SliderImages/three.webp'
import five from '../../Assests/SliderImages/five.webp'
import four from '../../Assests/SliderImages/four.webp'

//? React Icons
import { MdArrowRight } from "react-icons/md";
import { IoMdArrowDropleft } from "react-icons/io";
function Slide() {
    let imgurl=[one,two,three,four,five]
    let [cnt,setCnt]=useState(0);
    let [src,setSrc]=useState(imgurl[cnt])
  


    function Prew() {
        cnt===0?setCnt(4):setCnt(--cnt)
      
    }

    function Next() {
        cnt===4?setCnt(0):setCnt(++cnt)
       
    }
    
    useEffect(()=>{
       setSrc(imgurl[cnt]);
    },[cnt]);

    // useEffect(()=>{
    //     setInterval(() => {
    //         Next();
    //     }, 3000);
    // });
  return (
    <div className='slider'>
         <button className='prew' onClick={Prew}><IoMdArrowDropleft className='icon' /></button>
         <button className='next' onClick={Next}><MdArrowRight className='icon' /></button>
           <img src={src} alt="img src" />
    </div>
  )
}

export default Slide;