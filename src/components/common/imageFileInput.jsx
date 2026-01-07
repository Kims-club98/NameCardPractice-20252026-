import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import styles from './imageFileInput.module.css'

const ContainerDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center; /* 아이템을 가운데 오게함 */
  align-items: center; /* 아이템을 중간 middle에 오게함 */  
`
const HiddenInput = styled.input`
  display: none;
`
//사용자 컴포넌트는 함수이다. - 일급객체, 일급함수, 고차함수
//화면이 다시 그려지면 함수도 새로 만들어진다.- 비효율적임(부분갱신이나 부분처리 가능함)
const ImageFileInput = ({name, imageUploader, onFileChange}) => {
  // input type file은 숨기고 버튼을 눌렀을 때 file컴포넌트 동작시키기
  // file 컴포넌트가 loading과 같은 상태가 바뀔 때마다 다시 생성된다.???
  // 상태가 바뀌더라도 원래값을 유지해주는 훅이 있다. - useRef
  const inputRef = useRef() //앞에 use로 시작되는 함수는 모두 Hook임
  // file명을 선택하고 업로드 중일 때 상태 관리
  //const a = 10 //a에 값이 변하더라도 새로 그려지지 않음
  //일반변수 a는 값이 아무리 변경되더라도 다시 그려지지 않는다.
  //함수가 새로 생성되지 않는다 | 새로 생성됨. -> useEffect에 의존성배열 관련
  //useEffect내부에 실행문이 실행이 된다 | 실행이 되지 않는다.
  const [loading, setLoading] = useState(false)
  // input type file에 변화가 생기면 호출되는 함수 입니다.
  const handleChange = async (event) => {
    //로딩 애니메이션 효과 발동 -> 상태값을 false -> true변경해줌
    setLoading(true)
    console.log(event.target.files[0])
    const uploaded = await imageUploader.upload(event.target.files[0])
    console.log(uploaded) //여기서 클라우디너리가 반환해주는 새로운 파일이름과  클라우드URL 담김
    setLoading(false)
    //후처리하기 -> CardAddForm.jsx에 있는 useState에 반영하기
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url 
    })

    
  }//end of file
  // button의 디폴트 type은 submit이다.
  // submit이슈
  const onButtonClick = (event) => {
    event.preventDefault() //의도하지 않은 이벤트가 전이되지 않도록
    //폼전송에서 사용하면 사용자가 입력한 값을 잃어버린다.
    // No file이 클릭되었을 때 버튼 클릭하기
    inputRef.current.click()
  }
  return (
    <ContainerDiv>
      <HiddenInput type='file'
      ref={inputRef}
      accept='image/*' name='file'
      onChange={handleChange}
      />
      {/* 로딩중이 아니면 아래 코드가 적용되고 */}
      {!loading && (
        <button 
          className={`${styles.button} ${name ? styles.ping : styles.grey}`}
          onClick={onButtonClick}
        >
          {name || 'No file'}
        </button>
      )}
      {/* 로딩중이면 아래 코드 적용됨 */}
      { loading && <div className={StyleSheet.loading}></div> }
    </ContainerDiv>

)
}

export default ImageFileInput
