import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

const root = ReactDOM.createRoot(document.getElementById("root"));

// (2) reducer 생성
// dispatch에서 action이 들어오면, action과 기존 state를 참고해 새로운 state를 만들어주는 역할
function reducer(state, action) {
  // store 첫 생성 시, state를 초기화해줘야 하는데, state값이 초기에 아직 정의되지 않은 경우
  if (state === undefined) {
    // return하는 것이 초기 state값이 됨
    return { color: "yellow" };
  }

  // (7) dispatch 함수 내, action 객체 받기
  if(action.type === 'CHANGE_COLOR'){

    /* 객체 복사를 위해, assign 함수 사용
      1번째 인자: 빈 객체
      2번째 인자: 1번째 인자에 넣을, 복제할 속성을 가진 객체 (3번째 인자도 마찬가지로 2번째인자까지 복제한 결과에 추가됨) */

    // 첫 번째 인자의 빈 객체 안에 state의 프로퍼티가 들어간다 
      // -> {color:'red'} 가 state 프로퍼티가 있는 곳에 또 한번 복제된다.
      // action으로 color전송 시, action.color로 참조가능
    let newState = Object.assign({}, state, {color:action.color});
    console.log(state, newState);

    // 받은 state값을 그냥 수정해서 그걸 return하지 말고,
    // state값을 복제하고, 복사본을 변경하고 return한다.
    // 이는 undo, redo가 가능케하고, 애플리케이션이 예측 가능한 동작을 하게끔 한다.
    return newState;
  }
}

// (1) store 생성 -> const store는 전역변수로, 애플리케이션 어디서든지 참조할 수 있게 됨
const store = createStore(reducer, composeWithDevTools());

// (3) Provider로 <App/>을 감싸 프로젝트에 redux 적용
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
