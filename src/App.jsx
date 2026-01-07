import { Routes, Route } from "react-router";
import styled from "styled-components";
import Login from "./components/pages/Login";
import Maker from "./components/pages/Maker";

const AppDiv = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e8e7e6;
`  
const App = ({FileInput}) => {

  //선언부
  return (
    <>
      <AppDiv>
        <Routes>
          {/* 리액트 컴포넌트는 일급함수이다  */}
          <Route path="/" element={<Login />} />
          <Route path="/maker" element={<Maker FileInput={FileInput} />} />
        </Routes>
      </AppDiv>
    </>
  );
}

export default App;
/*
일급 함수(First-class function)
함수를 값처럼 다룰 수 있다. 
변수에 담을 수 있다.
함수의 파라미터로 전달 할 수 있다
함수에서 함수를 반환할 수 있다 
자료구조(배열/객체)에 넣을 수 있다 
*/