import React, { useEffect, useState } from "react";
import Contents from '../layout/Contents';
import ImageCont from '../includes/ImageCont';



function Image() {
  const [ImageText, setImageText] = useState([]);

  useEffect(()=>{
    const requestOption = {
      method: "GET",
      redirect: "follow",
    };
    fetch("https://raw.githubusercontent.com/jjinvely/react-site1-3/main/src/assets/json/Image.json",
    requestOption)
    .then((response) => response.json())
    // .then((result) => {console.log(result);})
    .then((result) => {setImageText(result.data.ImageText)})
    .then((error) => console.log("error", error))
}, []);

  return (
    <>

        <Contents>
        <ImageCont skill={['section', 'nexon']} ImageText={ImageText}/>
      </Contents>
    </>
  );
}

export default Image;
