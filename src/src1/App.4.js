import React, {Component, Fragment} from 'react';
//1-3.Fragment
//  리액트 v16이상에서 Fragment 컴포넌트 도입.
//  div같은 것으로 감싸지 않고 여러 요소를 렌더링하고 싶다면 Component와 함께 Fragment를 불러와 사용
class App extends Component {
  render() {
  return (
    <Fragment>
      <h1>리액트 안녕!</h1>
      <h2>당신은 어썸한가요?</h2>
    </Fragment>
  );
}
}

export default App;
