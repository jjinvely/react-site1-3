import React, { useEffect, useState } from "react";
import Contents from '../layout/Contents';
import TextCont from '../includes/TextCont'
import Footer from '../layout/Footer';




function Text() {
  const [textText, setText] = useState([]);

  useEffect(()=>{
    const requestOption ={
      method: "GET",
      redirect: "follow",
    };
    fetch(
      "https://raw.githubusercontent.com/jjinvely/react-site1-3/main/src/assets/json/Text.json",requestOption
    )
    .then((response) => response.json())
    // .then((result) => {console.log(result);})
    .then((result) => {setText(result.data.textText)})
    .then((error) => console.log("error", error))
}, []);

  return (
    <>
    <Contents>
    <TextCont textText={textText}/>
    </Contents>
    <Footer/>
    </>
  );
}

export default Text;
