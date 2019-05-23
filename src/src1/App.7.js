import React, {Component} from 'react';
//4.&&를 사용한 조건부 렌더링
//  특정 조건을 만족할 때와 만족하지 않을 때, 다른 결과를 보여주어야 할 때는 삼항 연산자를 사용한다.
//  단순히 특정 조건을 만족할 때는 보여주고, 만족하지 않을때는 보여주고 싶지 않다면 &&를 사용한다.
class App extends Component {
  render() {
    const text = '당신은 어썸한가요?';
    const condition = true;
  return (
    <div>
      <h1>리액트 안녕!</h1>
      <h2>{text}</h2>
      { condition ? '보여주세요' : null }
      { condition && '보여주세요'}
    </div>
  );
}
}

export default App;
