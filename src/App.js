import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

function App() {
  const [color, setColor] = useState({});
  const colors = useSelector((state) => state.color);
  const dispatch = useDispatch();

  // (4) useSelector로, state값을 받아옴
  useEffect(() => {
    setColor(colors);
  }, []);

  function onClickRed() {
    // (5) dispatch 인스턴스 생성 후, action객체를 담아 함수 실행
    const value = dispatch({ type: "CHANGE_COLOR", color: "red" });

    // (8) dispatch로 return된 state로 색을 지정
    setColor(value.color);
  }

  function onClickBlue() {
    // (5) dispatch 인스턴스 생성 후, action객체를 담아 함수 실행
    const value = dispatch({ type: "CHANGE_COLOR", color: "blue" });

    // (8) dispatch로 return된 state로 색을 지정
    setColor(value.color);
  }

  function onClickGreen() {
    // (5) dispatch 인스턴스 생성 후, action객체를 담아 함수 실행
    const value = dispatch({ type: "CHANGE_COLOR", color: "green" });

    // (8) dispatch로 return된 state로 색을 지정
    setColor(value.color);
  }
  return (
    <>
      {color && (
        <>
          <div id="red">
            <div
              className="container"
              id="component_red"
              // (5) state 적용: 컴포넌트의 초기 color를 지정할 수 있게 됨
              style={{ backgroundColor: color }}
            >
              <h1>red</h1>
              <input type="button" value="click" onClick={onClickRed} />
            </div>
          </div>
          <div id="blue">
            <div
              className="container"
              id="component_red"
              // (5) state 적용: 컴포넌트의 초기 color를 지정할 수 있게 됨
              style={{ backgroundColor: color }}
            >
              <h1>blue</h1>
              <input type="button" value="click" onClick={onClickBlue} />
            </div>
          </div>
          <div id="green">
            <div
              className="container"
              id="component_red"
              // (5) state 적용: 컴포넌트의 초기 color를 지정할 수 있게 됨
              style={{ backgroundColor: color }}
            >
              <h1>Green</h1>
              <input type="button" value="click" onClick={onClickGreen} />
            </div>
          </div>
        </>
      )}
      <style jsx>{`
        .container {
          border: 5px solid black;
          padding: 10px;
        }
      `}</style>
    </>
  );
}

export default App;
