import React, { useEffect, useState } from 'react'
import Slide2 from './Slide2';
import Slide1 from './Slide';
import Slide3 from './Slide3';
import './Slider.css'

import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";


function Slider() {
    let compo=[<Slide2 />,<Slide1 />,<Slide3 />];
    let [cnt,setCnt]=useState(0);
    let [src,setSrc]=useState(compo[cnt])

    function Prew() {
        cnt===0?setCnt(2):setCnt(--cnt)
    }
    function Next() {
        cnt===2?setCnt(0):setCnt(++cnt)
    }

    useEffect(()=>{
        setSrc(compo[cnt]);
    },[cnt]);
    return (
        <div>
            <div className="sliderSell">
                <button className='prew1' onClick={Prew}><FaChevronLeft /></button>
                <button className='next1' onClick={Next}><FaChevronRight /></button>
               {src}
            </div>
           
        </div>
    )
}
export default Slider;