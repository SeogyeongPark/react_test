import React, {Component} from 'react';
//5.인라인 스타일링
//  리액트에서 DOM요소에 스타일을 적용할 때는 문자열 형태로 적용할수 없다.
//  그대신 CSS 스타일을 자바스크립트 객체 형식으로 만들어 적용해야한다.
//  자바스크립트에서 key에 '-'을 사용할수 없으므로 camelCase로 작성한다.
class App extends Component {
  render() {
    const text = '당신은 어썸한가요?';
    const condition = true;
    const style = {
      backgroundColor: 'gray',
      border: '1px solid black',
      height: Math.round(Math.random() * 300) + 50,
      width: Math.round(Math.random() * 300) + 50,
      WebkitTransition: 'all',
      MozTransition: 'all',
      msTransition: 'all'
    }
  return (
    <div>
      <h1>리액트 안녕!</h1>
      <h2>{text}</h2>
      {condition && '보여주세요'}
      <div style={style}></div>
    </div>
  );
}
}

export default App;
