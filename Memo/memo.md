## 1. Redux 사용 이유
 - 단방향 바이딩 특성 상, props를 길게 구현해야 하는 경우가 너무 많은 경우에 사용한다.
   - store에 어떤 state가 있다고 이해할 수 있다.
   - 어떤 컴포넌트에서 이 데이터를 변경시킬 때, 이 데이터가 달라졌다라고 store에 알려주는 로직이 있고,
   - store는 자신을 구독하는 모든 컴포넌트에게 state가 바뀌었으니 알아서 update하라고 한다.
   - 각 컴포넌트는 상태가 바뀌었을 때, 자신을 어떻게 변화시켜야하는지(렌더링)를 알고 있기 때문에 각자 알아서 update를 한다. 

 - 상태관리 목적 : 공유하는 state값에 접근하여, 값을 효율적이고 안전하게 수정할 수 있도록 하기 위해서 사용한다.
   - 컴포넌트는 reducer에게 수정 요청만 하도록 한다.(dispatch를 이용하여, action전달)
   - 실제 수정은 데이터를 관리하는 파일 내에 함수(reducer)를 만들어서 사용한다. 
 
 - 리덕스 사용 장점
  * 중앙집중적인 데이터 store를 통해, 애플리케이션을 쉽게 개발할 수 있다.
  * state관련 버그가 발생한 경우, 수정해야 하는 영역은 직접 그 state를 조작하는 영역으로 한정되니 살펴볼 곳이 줄어든다

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

## 5. dispatch()
- 만약 사용자가, 텍스트를 입력하고 submit 버튼을 누르면 어떤 일이 발생할까? 

- redux에서는, 이벤트 발생 시, dispatch 함수를 실행해 action이라는 객체를 전송한다.

- dispatch에는 action이 전달된다. 여기서 action이란, 객체를 의미하는데 아래 예제에선 type이 create이고, payload 프로퍼티를 가지는 객체를 전송한다.
 ```
 <form onSubmit = "
  ... 
  store.dispatch({type:'create', payload: {title:title, desc:desc}})
 "> ... </form>
 ```

- 그럼 dispatch() 사용 시, 무슨 일을 할까?
 1. reducer를 호출해 state 값을 바꾼다.
    - reducer는 state값을 입력으로 받고, action의 type에 따라 
      새로운 state를 만들어 리턴해야함. (state를 가공하여 return)

 2. reducer에 의해 state가 변경되어 새 state가 return되었으니,
    subscribe()를 호출한다. 
     - 그러면 subscribe()는 구독 목록에 등록된, 연결된 구독자를 모두 호출해 render()가 실행되어 UI를 갱신한다.
     - subscribe()함수에 인자로 전달된 수들은 값이 변경될 때마다 호출된다.

- dispatch가 reducer를 호출할 때 2개의 값을 전달하는데, 그는 아래와 같다.
 1. 현재 state값
 2. action 데이터 (객체)
 ```
 function reducer(state, action){
  if(action.type === 'create'){
    ...

    return state의 새로운 값
  }
 }
 ```

## 6. reducer() 사용과 state반환 시 주의점 
 - dispatch로 action객체를 전달받은 reducer는 기존 state값과 action객체를 받는다.
 - 여기서, reducer()는 새 state를 return한다.
 - 이 새로운 state는 Object.assign()을 통해 복사된 객체를 사용한다.

 ```
  function reducer(state, action) {
    if (state === undefined) {
      return { color: "yellow" };
    }

    if(action.type === 'CHANGE_COLOR'){

      /* 객체 복사를 위해, assign 함수 사용
        1번째 인자: 빈 객체
        2번째 인자: 1번째 인자에 넣을, 복제할 속성을 가진 객체 (3번째 인자도 마찬가지로 2번째인자까지 복제한 결과에 추가됨) */

      // 첫 번째 인자의 빈 객체 안에 state의 프로퍼티가 들어간다 -> {color:'red'} 가 state 프로퍼티가 있는 곳에 또 한번 복제된다.
      let newState = Object.assign({}, state, {color:'red'});
      console.log(state, newState);

      // 받은 state값을 그냥 수정해서 그걸 return하지 말고,
      // state값을 복제하고, 복사본을 변경하고 return한다.
      // 이는 undo, redo를 가능케하고, 애플리케이션이 예측 가능한 동작을 하게끔 한다.
      return newState;
    }
  }
 ```