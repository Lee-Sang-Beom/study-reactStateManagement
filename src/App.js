import logo from './logo.svg';
import './App.css';
import { createStoreHook } from 'react-redux';

function App() {


  // (2) reducer 생성 : dispatch에서 action이 들어오면, action과 기존 state를 참고해 새로운 state를 만들어주는 역할
  function reducer(state, action){

  }

  // (1) store 생성
  const store = createStoreHook(reducer);
  console.log(store);
  

  return (
    <>
        <div id="red"></div>
        
        <style jsx>{`
          .container{
            border: 5px solid black;
            padding:10px;
          }
        `}</style>
    </>

  );

  function red(){
    document.querySelector("#red").innerHTML = `
      <div class="container" id="component_red">
        <h1>red</h1>
        <input type="button" value="click" onClick="document.querySelector('#component_red').style.backgroundColor ='red'">
      </div>
    `
  }

  red();
}

export default App;
