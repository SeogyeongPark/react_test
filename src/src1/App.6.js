import React, {Component} from 'react';
//3.if문 대신 조건부 연산자
//  JSX 내부의 자바스크립트 표현식에서 if문을 사용할수 없다.
//  하지만 조건에 따라 다른 것을 렌더링해야 할 때는 JSX 밖에서
//  if문을 사용해 작업하거나 {} 안에 삼항 연산자를 사용하면 된다.
class App extends Component {
  render() {
    const text = '당신은 어썸한가요?';
    const condition = true;
  return (
    <div>
      <h1>리액트 안녕!</h1>
      <h2>{text}</h2>
      {
        condition ? "참" : '거짓'
      }
    </div>
  );
}
}

export default App;
