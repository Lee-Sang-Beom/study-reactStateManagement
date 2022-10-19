## 계획이유
 - 북스탬프에서 사용한 Recoil보다 대중적으로 사용되고 있는 상태관리 라이브러리인 redux의 기초적인 사용 방법에 대해 학습하기 위해 계획하였습니다.
 
## 학습 내용
 1. CDN을 이용한 redux 문법 학습 (src/html_Example/study_redux.html) : CRUD
    - 해당 CRUD 실습 내용은, React 환경에서도 실습할 필요를 느꼈기 때문에 다른 repository에서 해당 실습을 스스로 진행할 예정
    - 실습 링크 -> [이동하기](https://github.com/Lee-Sang-Beom/studyRedux_reactEnvironment)

 2. React 환경 redux 적용법 학습 (src/App.js, index.js) : 버튼 클릭 시, 박스 요소들의 색깔 공통 적용

## install
### 1. react-redux
- html의 head태그 내, CDN링크 추가
```
<head>
    ...
    <script src="https://cdnjs.cloudflare.com/ajax/libs/redux/4.2.0/redux.min.js"></script>
</head>
```

### 2. react-redux
 1. React Project 설치
    ```
    npx create-react-papp projectname
    ```

 2. Redux 모듈 설치
    - react와 redux 바인딩을 할 수 있도록 하는 react-redux 설치
        ``` 
        npm i redux react-redux 
        ```
    - redux 상태를 확인하기 위한 redux-devtools 설치
        ``` 
        npm i --save-dev redux-devtools-extension
        ```
