import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

// React의 시작
const root = ReactDOM.createRoot(document.getElementById('root'));  // 화면에 보여주고 싶은 컴포넌트가 렌더링될 위치

// root에 렌더링될 컴포넌트
root.render(
  <React.StrictMode>
      <BrowserRouter>   {/* 리액트 라우터 적용을 위해 추가. 페이지를 새로 불러오지 않고도 주소를 변경하고 현재 주소의 경로에 관련된 정보를 리액트 컴포넌트에서 사용할 수 있도록 해줌. */}
          <App />
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
