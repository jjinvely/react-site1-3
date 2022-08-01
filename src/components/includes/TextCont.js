import React from 'react'


// const textText = [
//   {
//     title: "웹 디자인",
//     desc:"웹디자이너가 포함된 웹 및 멀티미디어 디자이너는 다른 직업과비교하여 임금과 복리후생이 낮은 편이다.",
//     id:"0"

//   },
//   {
//     title: "웹 퍼블리셔",
//     desc:" 퍼블리싱은 웹 사이트를 제작할 때, 웹 디자이너가 디자인한 것을 웹표준성과 접근성에 부합하도록 재정",
//     id:"1"

//   },
//   {
//     title: "프론트앤드개발자",
//     desc:"사이트와 상호작용하는 모든 부분에 대한 개발, 관리, 유지 보수를 하는 것 솔루션의 프로세스",
//     id:"2"

//   },
//   {
//     title: "백앤드 개발자",
//     desc:" 용어 자체에서 알 수 있듯이, 백엔드는 웹사이트나 웹 애플리케이션 또는 모바일 솔루션의 프로세스와 관련된입니다.",
//     id:"3"
//   },
//   {
//     title: "웹 디자인",
//     desc:"웹디자이너가 포함된 웹 및 멀티미디어 디자이너는 다른 직업과 비교하여 임금과 복리후생이 낮은 편이다.",
//     id:"4"

//   },
//   {
//     title: "웹퍼블리셔",
//     desc:"퍼블리싱은 웹 사이트를 제작할 때, 웹 디자이너가 디자인한 것을 웹표준성과 접근성에 부합하도록 재정",
//     id:"5"

//   }
// ]

function TextInfo({title,desc,image,id}){
  return (
     <div className="text">
            <h3>{title}</h3>
            <p>
              {desc}
            </p>
          </div>
  )
}


function TextCont({textText}) {
  return (
    <div>
       <section id="textType" className="text__wrap section nexon">
        <h2>코딩과 관련된 직업</h2>
        <p>
          너무 무리하지 말아요! 이미 당신은 해내고 있고 앞으로도 잘 할 수
          있을거예요!{' '}
        </p>
        <div className="text__inner container">
        {textText.map((txt)=>(
            <TextInfo  key={txt.id}
            title={txt.title}
            desc={txt.desc} />
          ))}     
        </div>  
      </section>

    </div>
  )
        }
export default TextCont