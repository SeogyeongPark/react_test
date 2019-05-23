import React, {Component} from 'react';
import './App.css';
//6.class 대신 className
//  리액트에서 class를 설정할 때는 class 키워드 대신 calssName으로 설정해야 한다.
//  class 키워드는 이미 자바스크립트에 존재하는 키워드이기 때문이다.
//  스타일이 입혀지기는 하지만 브라우저 콘솔창에 경고메시지가 표시된다.
//  => Warning: Invalid DOM property `class`. Did you mean `className`?
//     in div (at App.js:23)
//     in App (at src/index.js:7)
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
    <div class="my-div">
      <h1>리액트 안녕!</h1>
      <h2>{text}</h2>
      { condition && '보여주세요.' }
      <div style={style}></div>
    </div>
  );
}
}

export default App;
