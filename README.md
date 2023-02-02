
# 📓 Todolist with Redux

![투두리스트](https://user-images.githubusercontent.com/82587107/207487927-f4287995-94b3-4211-8b2a-acc757576d83.png)


🔗  [배포 URL](https://todolist-redux-theta.vercel.app/)

* 리코일을 이용해서 상태관리하는 투두리스트
* 진행기간 : 2022.12.12~13


* **✨ 업데이트 : 2023.01.17~18 리덕스 툴킷과 타입스크립트로 리팩토링**
* **✨ 업데이트 : 2023.02.02 리코일로 리팩토링**

<br/>
<br/>
<br/>

## 🖥 기술 스택

`React` `Recoil` `react-router-dom` `Styled-Components` `TypeScript`


<br/>
<br/>


## 🗂 디렉토리 구조
```
📦src
 ┣ 📂components
 ┃ ┣ 📂header
 ┃ ┣ 📂todoDetail
 ┃ ┣ 📂todoForm
 ┃ ┣ 📂todoItem
 ┃ ┃ ┣ 📜Buttons.jsx
 ┃ ┃ ┣ 📜TodoItem.jsx
 ┃ ┃ ┗ 📜style.js
 ┃ ┣ 📂todoList
 ┃ ┣ 📜Container.js
 ┃ ┗ 📜GlobalStyle.js
 ┣ 📂pages
 ┣ 📂redux
 ┃ ┣ 📂config
 ┃ ┗ 📂modules
 ┣ 📂shared
 ┃ ┗ 📜Router.js
 ┣ 📜App.css
 ┣ 📜App.jsx
 ┣ 📜App.test.js
 ┣ 📜index.css
 ┗ 📜index.js
```

* components
  - header : 헤더 관련 컴포넌트
  - todoDetail : 상세페이지 관련 컴포넌트
  - todoForm : 투두 추가 관련 컴포넌트
  - todoItem : 투두 관련 컴포넌트
    - Buttons : 버튼 컴포넌트 (삭제, 완료, 뒤로 등 사용이 많은 컴포넌트라 별도로 분리)
  - todoList : 투두리스트 관련 컴포넌트
  - Container.js : 정렬용 레이아웃 컴포넌트
  - GlobalStyle.js : 전체적인 CSS 설정 컴포넌트
* pages : 페이지 컴포넌트들
* recoil : 리코일 관련 파일들
* shared : 라우터 설정 파일


<br/>
<br/>


## 💡 구현 기능

* 투두 작성
* 투두 조회
* 투두 상세페이지 이동
* 투두 완료/취소 토글
* 투두 수정
* 투두 삭제


<br/>
<br/>


## 🤔 고민한 점

### 👀 map 메서드 리턴 값에 고유 key 매핑
![image](https://user-images.githubusercontent.com/82587107/207489227-730d928d-d485-4959-b2f4-8c097b5431c7.png)![image](https://user-images.githubusercontent.com/82587107/207492839-e9f863ea-e727-4185-943e-34901ccac2a5.png)


index나 todo의 length를 key로 매핑했을 때, 투두를 삭제되고 다시 추가하는 경우 key가 꼬일 수 있습니다. <br/>
고유 key를 매핑해주기 위해 `uuid` 라이브러리를 사용하여 투두가 삭제되어도 key에 영향이 가지 않도록 했습니다.

<br/>

### 👀 Button 컴포넌트의 재사용
![image](https://user-images.githubusercontent.com/82587107/207491268-1f6c30f9-434b-44a3-bf21-36e8d54de11e.png)

삭제, 완료, 취소 등에 쓰인 Button 컴포넌트는 각각의 투두에 해당하는 TodoItem 컴포넌트만큼 많이 사용되고 있는 컴포넌트입니다. <br/>
Button 컴포넌트를 재사용하기 위해 각각 클래스를 넣어주기 보다 props를 이용했습니다. <br/>
props로 넘기는 값중 `type`에 따라 다른 배경색, 테두리 색, 폰트 색상 등을 스타일링 할 수 있도록 했습니다. <br/>
또한 `type`은 Button 컴포넌트의 클릭 시 실행되는 함수를 결정하는 데도 사용됩니다.

<br/>
<br/>
<br/>
<br/>


## 📑 관련 기록

🔗 [React onClick에 함수 넘길 때의 매개변수 처리](https://i-ten.tistory.com/242)

🔗 [Redux-toolkit 투두리스트를 TS로 마이그레이션하며 발생한 오류모음 (1)](https://i-ten.tistory.com/278)

🔗 [Redux-toolkit 투두리스트를 TS로 마이그레이션하며 발생한 오류모음 (2)](https://i-ten.tistory.com/279)


<br/>
<br/>

