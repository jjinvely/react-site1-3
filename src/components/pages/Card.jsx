import React, { useEffect, useState } from "react";
import Contents from '../layout/Contents';
import CardCont from '../includes/CardCont'


function Card() {
  const [CardText, setCardText] = useState([]);

  useEffect(()=>{
    const requestOption = {
      method : "GET",
      redirect: "follow",
    };
    fetch(
      "https://raw.githubusercontent.com/jjinvely/react-site1-3/main/src/assets/json/Card.json", requestOption
    ).then((response) => response.json())
    // .then((result) => {console.log(result);})
    .then((result) => {setCardText(result.data.CardText)})
    .then((error) => console.log("error", error))
  })
  return (
    <>
        <Contents>
        <CardCont CardText={CardText}/>
      </Contents>
    </>
  );
}

export default Card;
