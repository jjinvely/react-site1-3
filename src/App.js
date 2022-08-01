import React from 'react';
import Slider from './components/pages/Slider';
import ImgText from './components/pages/ImgText';
import Image from './components/pages/Image';
import Card from './components/pages/Card';
import Banner from './components/pages/Banner';
import Text from './components/pages/Text';


//자바스크립트 : 동적인 부분(데이터)
//데이터 입력, 출력(데이터 저정하기, 데이터 불러오기)
//데이터 실행, 제어
//데이터 저장 : 변수, 상수, 배열(1개이상 여러개), 객체(키와 값으로 이루어진 정보 저장)
//데이터 출력 : 변수, 상수, 배열, 객체

function App() {
  return (
    <>
     
        <Slider/>
        <Image/>
        <ImgText/>
        <Card/>
        <Banner/>
        <Text/>
     
      
    </>
  );
}

export default App;