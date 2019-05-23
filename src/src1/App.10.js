import React, {Component} from 'react';
//7.꼭 닫아야 하는 태그
//  input, br같은 태그는 HTML코드를 작성할 때 닫지 않아도 문제가 생기지 않지만, JSX에서 이렇게 작성하면
//  Virtual DOM에서 트리 형태의 구조를 만들지 못하기 때문에 오류가 발생하므로 반드시 닫아주어야 한다. 
class App extends Component {
  render() {
  return (
    <form>
      First name:<br>
      <input type="text" name="firstname"><br>
      Last name:<br>
      <input type="text" name="lastname">
    </form>
  );
}
}

export default App;
