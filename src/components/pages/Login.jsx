import styled from "styled-components"
import Header from "../include/Header"
import Footer from "../include/Footer"
import { useNavigate } from "react-router"
import { useState } from "react"
import { loginWithGoogle } from "../../service/authAPI"

const LoginDiv = styled.div`
    width: 30em;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: transparent;    
`
const Section = styled.div`
    background-color: white;    
`
const ListUl = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    list-style: none;
    padding: 0.5rem; 
`
const ItemLi = styled.li`
    margin-bottom: 0.5em;
`
const BtnLogin = styled.button`
    width: 80%;
    height: 2.5em;
    font-size: 1.2rem;
    border-radius: 1.2rem;
    background-color: transparent;
    cursor: pointer;
    border: 0.2rem solid lightgray;
    outline: 0;
    &:hover{
      background-color: #e8e7e6;//#FEFCF3 , #F5EBE0
    }
`


const Login = () => {
  const navigate= useNavigate()
  const [uid, setUid] = useState();
  const goToMaker = (uid) => {
    navigate({
      pathname: '/maker',
      state: {id:uid}
    })
  } 
  const handleLogin = async() => {
    try {
      const user = await loginWithGoogle()
      console.log("로그인 성공시: ", user.uid, user.email)
      if(user.uid){
        goToMaker(user.uid)
      }
    } catch (error) {
      console.error("로그인 실패 : ", error)
    }
  }//end of handleLogin
  return (
    <>
      <LoginDiv>
        <Header />
        <Section>
          <h1>Login</h1>
          <ListUl>
            <ItemLi>
              <BtnLogin onClick={handleLogin}>Google</BtnLogin>
            </ItemLi>
            <ItemLi>
              <BtnLogin onClick={handleLogin}>Github</BtnLogin>
            </ItemLi>            
          </ListUl>
        </Section>
        <Footer />
      </LoginDiv>
    </>
  )
}

export default Login