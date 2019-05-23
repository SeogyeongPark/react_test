import React, {Component} from 'react';
import './App.css';
//8.주석
//  일반적으로 주석을 작성할때는 {/*이런형식으로*/} 자바스크립트 표현식을 사용할 때 처럼 작성한다.
//  일반 자바스크립트의 주석을 작성할 때처럼 아무데나 작성하면 그 주석은 페이지에 고스란히 렌더링된다.
//  하지만 self-closed 요소(<br/>처럼 자체적으로 닫는 요소) 에서 />를 다음 줄에 작성할 때는
//  그 사이에서 주석을 {} 없이 작성할 수 있다. 
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
    <div className="my-div">
      {/* 요소 밖에서는 이렇게 작성해요. */}
      <h1>리액트 안녕!</h1>
      <h2>{text}</h2>
      { condition && '보여주세요.' }
      <div 
        style={style}
        // self-closed 태그에서만 작동하는 주석
        // 마지막 /> 가 꼭 새 줄에 있어야 합니다.
        /* 이렇게 작성할수도 있고요 */
        ></div>
        // 여기 쓰는 건 그대로 렌더링됩니다.
        /* 여기에선 주석 못 써요 */
    </div>
  );
}
}

export default App;
