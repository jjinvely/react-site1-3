import React from 'react'




// const BannerText= [
//   {title: "유튜버 웹보이".
//   desc: "더 다양한 강의는 유튜블 통해 제공하고 있습니다.".
//   link:"youtube.com/c/Webstoryboy".
//   span:"배너 영역01"}
// ]


function CardInfo({text, desc, address,sub}){
  <h3 className="banner__title">{text}</h3>
          <p className="banner__desc">
            {desc}
            <a href="/">{address}</a>
          </p>
          <span className="banner__sub">{sub}</span>
}


function BannerCont({BannerTitle}) {
  return (
    <div>
        <section
        id="bannerType"
        className="banner__wrap">
        <h2 className="ir_so">배너 영역</h2>
        <div className="banner__inner">
        {BannerText.map((txt) => (
        <Bannerinfo 
          key = {txt.id}
          title = {txt.title}
          desc = {txt.desc}
          link = {txt.link}
          span = {txt.span}
        />
      ))}

        </div>
      </section>
    </div>
  )
}

export default BannerCont