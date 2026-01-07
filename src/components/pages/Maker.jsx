import styled from "styled-components"
import Header from "../include/Header"
import Footer from "../include/Footer"
import { logout } from "../../service/authAPI"
import { useNavigate } from "react-router"
import CardEditor from "./CardEditor"
import Preview from "./Preview"
import { useState } from "react"


const MarkerDiv = styled.div`
    width: 100%;
    height: 100%;
    max-width: 80rem;
    display: flex;
    flex-direction: column;
    background-color: makerWhite;
`
const ContainerDiv = styled.div`
  display: flex;
  flex: 1; /* 중간에 여백을 가득채우도록 1을 준다 */
  min-height: 0;
`

const Maker = ({FileInput}) => {

  const [cards, setCards] = useState({})// end of 더미데이터
    const navigate = useNavigate()
    const handleLogout = async() => {
      await logout()
      //로그아웃이 되고 나면 처음 화면으로 간다.
      navigate('/')
    }  


  // Firestore는 식별자가 존재하면 수정을 해주고 존재하지 않으면 새로 등록을 해줌. 
  // 따라서 입력과 수정은 같은 프로세스임
  // 새로 입력받는 값과 수정을 원하는 값들은 하위 컴포넌트인 CardEditorForm과 
  // CardAddForm에 있음. 
  // 이 두 개의 하위 컴포넌트에서 사용자가 입력한 값을 상위 컴포넌트로 올려서 사용할 땐
  // 함수의 파라미터 자리와 props(properties)를 사용하면 된다.
  // Firebase에서 조회된 결과를 상위 컴포넌트에서 가지고 있으니 상위 컴포넌트에서 
  // 수정,입력,삭제를 처리합니다 

  const insertOrUpdateCard = card => {
    console.log('insertOrUpdateCard 호출')
    console.log(card)
  }//end of insertOrUpdateCard

  const deleteCard = card => {
    console.log('deleteCard 호출')
    console.log(card)
    // delete from schedule where id = 2
    console.log(`삭제 카드 card.id ${card.id}`)
  }


  return (
    <MarkerDiv>
      <Header handleLogout={handleLogout} />
      <ContainerDiv>
        <CardEditor FileInput={FileInput} 
          cards={cards} deleteCard={deleteCard} 
          insertOrUpdateCard={insertOrUpdateCard} />
        <Preview cards={cards} />
      </ContainerDiv>
      <Footer />
    </MarkerDiv>
  )
}

export default Maker
