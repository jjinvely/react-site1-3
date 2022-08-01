import React, { useEffect, useState } from "react";
import Contents from '../layout/Contents';
import BannerCont from '../includes/BannerCont'

function Banner() {
  const [BannerText, setBannerText]= useState([]);
  
  useEffect(()=>{
    const requestOption ={
      method: "GET",
      redirect: "follow",
    };
    fetch(
      "https://raw.githubusercontent.com/jjinvely/react-site1-3/main/src/assets/json/Banner.json",requestOption
    )
    .then((response) => response.json())
    // .then((result) => {console.log(result);})
    .then((result) => {setBannerText(result.data.BannerText)})
    .then((error) => console.log("error", error))
}, []);


   
  
  
  
  return (
    <>
    <Contents>
     <BannerCont BannerText={BannerText}/>
    </Contents>
    </>
  
  );
}

export default Banner;
