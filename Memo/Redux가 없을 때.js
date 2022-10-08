import logo from './logo.svg';
import './App.css';

function App() {
  function red(){
    document.querySelector("#red").innerHTML = `
      <div class="container" id="component_red">
        <h1>red</h1>
        <input type="button" value="click" onClick="
        document.querySelector('#component_red').style.backgroundColor ='red';
        document.querySelector('#component_green').style.backgroundColor ='red';
        document.querySelector('#component_blue').style.backgroundColor ='red';
        ">
      </div>
    `
  }
  red();

  function green(){
    document.querySelector("#green").innerHTML = `
      <div class="container" id="component_green">
        <h1>green</h1>
        <input type="button" value="click" onClick="
        document.querySelector('#component_red').style.backgroundColor ='green';
        document.querySelector('#component_green').style.backgroundColor ='green';
        document.querySelector('#component_blue').style.backgroundColor ='green';
        ">
      </div>
    `
  }
  green();

  function blue(){
    document.querySelector("#blue").innerHTML = `
      <div class="container" id="component_blue">
        <h1>blue</h1>
        <input type="button" value="click" onClick="
        document.querySelector('#component_red').style.backgroundColor ='blue';
        document.querySelector('#component_green').style.backgroundColor ='blue';
        document.querySelector('#component_blue').style.backgroundColor ='blue';
        ">
      </div>
    `
  }
  blue();
  
  return (
    <>
        <div id="red"></div>
        <div id="green"></div>
        <div id="blue"></div>
        <style jsx>{`
        .container{
          border: 5px solid black;
          padding:10px;
        }
        `}</style>
    </>

  );
}

export default App;
