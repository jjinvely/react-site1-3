import React from 'react'



// const ImageText = [
//   {
//     title: "애교만점 웰시코기",
//     desc: "제목은 넥슨 풋볼 고딕 폰트입니다.<br/> 설명부분은 넥슨 LV1 고딕 16px 140% 입니다.",
//     image: "img/image_bg01.jpg"
// },
// {
//     title:"코카스 파니엘",
//     desc: "제목은 넥슨 풋볼 고딕 폰트입니다.<br/> 설명부분은 넥슨 LV1 고딕 16px 140% 입니다.",
//     image: "img/image_bg02.jpg"
// }
// ]






function ImageInfo({title,desc,image}){
  return(
    <article className="image">
    <div className="image__header">
      <figure className="image__figure">
        <img src={image} alt="애교만점 웰시코기" />
      </figure>
    </div>
    <div className="image__body">
      <h3 className="image__title">{title}</h3>
      <p className="image__desc">
        {desc}
      </p>
      <a href="/" className="image__btn">
        자세히 보기
      </a>
    </div>
  </article>
  )
}



function ImageCont({ImageText}) {
  return (
    <div>
       <section
        id="imageType"
        className="image__wrap nexon"
      >
        <h2>포트폴리오가 실력이다.</h2>
        <p>이미지 유형입니다. 마우스 오버시 자세한 정보가 나와는 구조입니다.</p>
        <div className="image__inner container">
        {ImageText.map((txt)=>(
            <ImageInfo 
            key={txt.title}
            title={txt.title}
            desc={txt.desc}
            image={txt.image}/>
          ))}
        </div>
      </section>

    </div>
  )
}

export default ImageCont