import React, { useEffect, useState } from "react";
import Contents from '../layout/Contents';
import ImgTextCont from '../includes/ImgTextCont'



function ImgText() {
  const [ImgText, setImgText] = useState([]);
  
  useEffect(()=>{
    const requestOption ={
      method: "GET",
      redirect: "follow",
    };
    fetch(
      "https://github.com/jjinvely/react-site1-3/blob/main/src/assets/json/ImgText.json",requestOption
    )
    .then((response) => response.json())
    // .then((result) => {console.log(result);})
    .then((result) => {setImgText(result.data.ImgText)})
    .then((error) => console.log("error", error))
}, []);
   
  return (
    <>
    <Contents>
      <ImgTextCont skill={['section', 'nexon', 'gray']} ImgText={ImgText}/>
    </Contents>
    </>
  );
}

export default ImgText;
