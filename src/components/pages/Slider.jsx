import React, { useEffect, useState } from "react";
import Header from '../layout/Header';
import Contents from '../layout/Contents';
import SliderCont from '../includes/SliderCont';


function Slider() {
  const [sliders, setSliders] = useState([]);

  useEffect(()=>{
    const requestOption ={
      method: "GET",
      redirect: "follow",
    };
    fetch(
      "https://raw.githubusercontent.com/jjinvely/react-site1-3/main/src/assets/json/Slider.json",requestOption
    )
    .then((response) => response.json())
    // .then((result) => {console.log(result);})
    .then((result) => {setSliders(result.data.sliders)})
    .then((error) => console.log("error", error))
}, []);

  
  return (
    <>
      <Header/>
        <Contents>
        <SliderCont fonts={['slider__wrap', 'nexon']} sliders={sliders}/>
      </Contents>
    </>
  )
}

export default Slider;
