import React from 'react'

const ImgText = [
  {   small:"이미지/텍스트 유형",
      title: "유용한 사이트<br/>살펴보기",
      desc: " 사이트 제작에 있어 이미지와 텍스트를 혼합해서 사용하는 경우가 많다.<br/>기본 레이아웃은 동일하기 때문에 이미지나 배치에 따라서 느낌은 얼마든지 다르게 표현할 수 있다.<br/>Gmarket Sans 50px, Medium<br/>NEXON Lv1 Gothic 18px (153%)",
      btn:"더 많은 유형 살펴보기"
    }]


function ImgInfo({small,title,desc,btn}){
  return(
    <>
    <span className="small">{small}</span>
    <h3 className="title">{title}</h3>
    <p className="desc">
    {desc}
    </p>
    <a href="/" className="btn">
    {btn}
    </a>
    </>
  )
}


function ImgTextCont(props) {
  return (
    <div>
      <section id="imgTextType" className="imgText__wrap section nexon gray">
      <h2 className="ir_so">이미지 텍스트 영역</h2>
        <div className="imgText__inner container">
          <div className="txt">
          {ImgText.map((txt)=>(
            <ImgInfo 
            key={txt.small}
            title={txt.small}
            title={txt.title}
            desc={txt.desc}
            btn={txt.btn}/>
          ))}      
          </div>
          <div className="img bg1"></div>
          <div className="img bg2"></div>
        </div>
       </section>
    </div>
  )
}

export default ImgTextCont