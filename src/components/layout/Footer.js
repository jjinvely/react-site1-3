import React from 'react'

const menuList =[
  {text:"레이아웃유형",
  menu1:"레이아웃유형01",
  menu2:"레이아웃유형02",
  menu3:"레이아웃유형03",
  menu4:"레이아웃유형04",
  menu5:"레이아웃유형05"},
  {text:"헤더영역",
  menu1:"메뉴유형01",
  },
  {text:"메인영역",
  menu1:"이미지유형01",
  menu2:"동영상유형02",
  menu3:"슬라이드유형03",
  menu4:"레이아웃유형04",
},
  {text:"컨텐츠영역",
  menu1:"텍스트유형01",
  menu2:"이미지유형02",
  menu3:"이미지/텍스트유형03",
  menu4:"카드유형04",
  menu5:"배너유형05"},
  {text:"푸터영역",
  menu1:"컨탠트유형01",
  menu2:"푸터유형02"},
  {text:"사이트영역",
  menu1:"웹표준사이트",
  menu2:"반응형사이트",
  menu3:"패럴랙스",
  menu4:"포트폴리오사이트",}
]

function Info({text,menu1,menu2,menu3,menu4,menu5}){
  return (
  <>
     <div>
              <h3>{text}</h3>
              <ul>
                <li>
                  <a href="/">{menu1}</a>
                </li>
                <li>
                  <a href="/">{menu2}</a>
                </li>
                <li>
                <a href="/">{menu3}</a>
                </li>
                <li>
                <a href="/">{menu4}</a>
                </li>
                <li>
                <a href="/">{menu5}</a>
                </li>
              </ul>
      </div>
  </>)
}

function Footer() {
  return (
    <div>
      <footer id="footerType" className="footer__wrap section nexon gray">
        <h2 className="ir_so">푸터 영역</h2>
        <div className="footer__inner container">
          <div className="footer__menu">
          {menuList.map((txt) => (
                <Info text={txt.text} 
                key={txt.text}
                text={txt.text}
                menu1={txt.menu1}
                menu2={txt.menu2}
                menu3={txt.menu3}
                menu4={txt.menu4}
                menu5={txt.menu5}
                />))}               
          
          </div>
          <address className="footer__right">
            ©2022 webstroyboy. All rights reserved.
          </address>
        </div>
      </footer>
    </div>
  )
}

export default Footer