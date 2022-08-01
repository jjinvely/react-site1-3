import React from 'react'




const BannerTitle= [
  {text: "유튜버 웹보이"},
  {desc: "더 다양한 강의는 유튜블 통해 제공하고 있습니다."},
  {address:"youtube.com/c/Webstoryboy"},
  {sub:"배너 영역01"}
]



function BannerCont(props) {
  return (
    <div>
        <section
        id="bannerType"
        className={`banner__wrap ${props.skill[0]} ${props.skill[1]}`}
      >
        <h2 className="ir_so">배너 영역</h2>
        <div className="banner__inner">
          <h3 className="banner__title">{BannerTitle[0].text}</h3>
          <p className="banner__desc">
            {BannerTitle.desc}
            <a href="/">{BannerTitle[0].address}</a>
          </p>
          <span className="banner__sub">{BannerTitle[0].sub}</span>
        </div>
      </section>
    </div>
  )
}

export default BannerCont