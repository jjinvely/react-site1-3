import React from 'react';
import Contents from '../layout/Contents';
import ImgTextCont from '../includes/ImgTextCont'

function ImgText(props) {
  return (
    <>
    <Contents>
      <ImgTextCont skill={['section', 'nexon', 'gray']}/>
    </Contents>
    </>
  );
}

export default ImgText;
