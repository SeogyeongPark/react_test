import React, {Component} from 'react';
//2.자바스크립트 표현
//  JSX 안에서 자바스크립트 표현식 사용방법: JSX 내부에서 코드를{}로 감싸면 된다.
class App extends Component {
  render() {
    const text = '당신은 어썸한가요?';
  return (
    <div>
      <h1>리액트 안녕!</h1>
      <h2>{text}</h2>
    </div>
  );
}
}

export default App;
