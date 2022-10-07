## 1. Redux 사용 이유
 - 단방향 바이딩 특성 상, props를 길게 구현해야 하는 경우가 너무 많은 경우에 사용한다.
 - 상태관리 목적 : 공유하는 state값에 접근하여, 값을 효율적이고 안전하게 수정할 수 있도록 하기 위해서 사용한다.
   - 컴포넌트는 reducer에게 수정 요청만 하도록 한다.(dispatch)
   - 실제 수정은 데이터를 관리하는 파일 내에 함수(reducer)를 만들어서 사용 (장점: 버그 발생 시, 수정해야 하는 영역이 한정됨)

## 2. Store
 - 비유적으로 은행이라 생각할 수 있다. 기본적으로 이 Store라는 곳에 정보(State)가 저장된다.
 - Store를 만들면서, reducer라는 함수를 함께 만들어야 한다.
 ```
 function reducer(oldState, action){

 }

 var store = Redux.createStore(reducer); // store 생성 (생성 시, 함수인 reducer를 인자로 넘겨줘야 한다.)
 ```

- 사용 시, Store 안에 있는, state에 직접 접근하는 것이 아니라, 요청을 통해 수정하는 과정을 거쳐야 한다. 이것과 관련있는 것이 dispatch, subscribe, getState이다.

## 3. render()
- 그리고 또, render()라는 것이 있다. 이것은 store에 포함되지 않은, UI를 만들기 위해 개발자가 직접 만드는 코드을 의미한다.

- 아래 예제는 render() 실행 시, getState()로 state값을 간접적으로 불러오고, 그렇게 받아온 결과를 가지고 UI를 그린다.

 ```
 // img/study1.jpg 참고

 function render(){
  var state = store.getState(); // getState로 state값을 간접적으로 가져옴

  ...

  document.querySelector(#app).innerHTML = <h1>{state}<h1> // 실제로 ui작업을 함. 이게 render
 }
 ```

## 4. subscribe()
 - render는 언제나 실행 시, 현재 state를 반영한 UI를 만든다. 그러므로, State값이 바뀔 때 마다 render()를 실행하면, 알아서 데이터가 동기화된 UI를 만들 수 있다.

 - 알아서 state값이 바뀔 때 마다 UI를 바뀌게 하려면 subscribe()를 사용해야 한다.

 - 아래 예시처럼, store의 메소드인 subscribe()인자에 render를 전달하면 된다. 이렇게 하면, state값이 바뀔때마다 render()가 호출되며 UI가 새롭게 갱신된다.

 ```
 store.subscribe(render)
 ```
