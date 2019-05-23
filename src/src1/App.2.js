import React, {Component} from 'react';
//1-1.감싸인 요소
//  컴포넌트에 여러 요소가 있다면 부모 요소 하나로 꼭 감싸야 한다.
//  터미널 오류
//  Line 9:  Parsing error: Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?
class App extends Component {
  render() {
  return (
    <h1>리액트 안녕!</h1>
    <h2>당신은 어썸한가요?</h2>
  );
}
}

export default App;
