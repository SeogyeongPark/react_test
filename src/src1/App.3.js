import React, {Component} from 'react';
//1-2. 감싸인 요소
//  Virtual DOM에서 컴포넌트 변화를 감지해 낼 때 
//  효율적으로 비교할수 있도록 컴포넌트 내부는 DOM 트리 구조 하나여야 한다.
class App extends Component {
  render() {
  return (
    <div>
      <h1>리액트 안녕!</h1>
      <h2>당신은 어썸한가요?</h2>
    </div>
  );
}
}

export default App;
