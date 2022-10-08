import logo from "./logo.svg";
import "./App.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function App() {

  const [color, setColor] = useState({});
  const colors = useSelector((state) => state.color);

  // (4) useSelector로, state값을 받아옴
  useEffect(()=>{
    setColor(colors);
  },[])

  return (
    <>
    {color &&
     <div id="red">
        <div
          className="container"
          id="component_red"
          // (5) state 적용: 컴포넌트의 초기 color를 지정할 수 있게 됨
          style={{ backgroundColor: color }}
        >
          <h1>red</h1>
          <input type="button" value="click" />
        </div>
      </div>}
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
