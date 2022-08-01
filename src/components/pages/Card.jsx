import React, { useEffect, useState } from "react";
import Contents from '../layout/Contents';
import CardCont from '../includes/CardCont'




function Card() {
  const [Cards, setCards] = useState([]);

  useEffect(()=>{
    const requestOption = {
      method : "GET",
      redirect: "follow",
    };
    fetch(
      "https://raw.githubusercontent.com/jjinvely/react-site1-3/main/src/assets/json/Card.json", requestOption
    )..then((response) => response.json())
    // .then((result) => {console.log(result);})
    .then((result) => {setCards(result.data.Cards)})
    .then((error) => console.log("error", error))
  })
  return (
    <>
        <Contents>
        <CardCont Cards={Cards}/>
      </Contents>
    </>
  );
}

export default Card;
