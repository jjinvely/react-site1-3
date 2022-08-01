import React, { useEffect, useState } from "react";
import React from 'react';
import Header from '../layout/Header';
import Contents from '../layout/Contents';
import SliderCont from '../includes/SliderCont';

function Slider() {
  return (
    <>
      <Header/>
        <Contents>
        <SliderCont fonts={['slider__wrap', 'nexon']}/>
      </Contents>
    </>
  )
}

export default Slider;
