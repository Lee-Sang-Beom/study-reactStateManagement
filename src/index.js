import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { createStore } from "redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

// (2) reducer 생성
// dispatch에서 action이 들어오면, action과 기존 state를 참고해 새로운 state를 만들어주는 역할
function reducer(state, action) {
  // store 첫 생성 시, state를 초기화해줘야 하는데, state값이 초기에 아직 정의되지 않은 경우
  if (state === undefined) {
    // return하는 것이 초기 state값이 됨
    return { color: "red" };
  }
}

// (1) store 생성 -> const store는 전역변수로, 애플리케이션 어디서든지 참조할 수 있게 됨
const store = createStore(reducer);

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
