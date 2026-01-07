import styled from 'styled-components'
import styles from './editorform.module.css'

import { useRef, useState } from 'react'
import Button from '../common/button'

const Form = styled.form`
  display: flex;
  width: 100%;
  flex-wrap: wrap; /* 한 줄에 하나씩 떨어질 수 있도록 랩을 주고 */
  border-top: 1px solid black;
  border-left: 1px solid black;
  margin-bottom: 1em;    
`
const Input = styled.input`
  font-size: 0.8rem;
  width: 100%;
  border: 0;
  padding: 0.5em;
  border-bottom: 1px solid black;
  border-radius: 1px solid black;
  background: #F5EBE0;
  flex: 1 1 30%;
  &:focus {
    outline: none;
  }
`
const Select = styled.select`
  font-size: 0.8rem;
  width: 100%;
  border: 0;
  padding: 0.5em;
  border-bottom: 1px solid black;
  border-radius: 1px solid black;
  background: white;
  flex: 1 1 30%;
  &:focus {
    outline: 0;
  }
`
const TextArea = styled.textarea`
  font-size: 0.8rem;
  flex-basis: 100%;
  width: 100%;
  border: 0;
  padding: 0.5em;
  border-bottom: 1px solid black;
  border-radius: 1px solid black;
  background: #F5EBE0;
  &:focus {
    outline: 0;
  }
`
const FileInputDiv = styled.div`
  font-size: 0.8rem;
  width: 100%;
  border: 0;
  padding: 0.5em;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  background: #F5EBE0;    
`	 

const CardAddForm = ({FileInput}) => {

  // 왜 useRef사용하나? - 입력받은 값을 card 리터럴에 담기
  // 화면이 다시 그려진다??? -> 기존 값을 잃어버린다.
  //값들을 읽어와서 Card에 추가하기
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  // 폼 전송 중에서 이미지 업로드 부분만 클라우드 서비스를 활용하여 처리함. 
  // 업로드가 성공한 후에야 업로드된 이미지 이름과 file url(로컬 PC)이 아닌
  // 클라우디너리에 업로드 된 후에 결정된 fileName과 fileURL을 수정해야함(후처리)
  const [file, setFile] = useState({ fileName: null, fileURL: null })
  const onFileChange = (file) => {
    console.log("file : "+file) //호출이 안되고 있어요...... 상위컴포넌트
    setFile({
      fileName: file.name, 
      fileURL: file.url 
    })
  }
  // CardAddForm.jsx에서 Add버튼 클릭하면 호출됨
  const onSubmit = (event) => {
    event.preventDefault() //화면이 자동으로 새로고침일어남 -> 입력값을 기억못함
    const card = {
      id: Date.now(), //uuid
      name: nameRef.current.value || '', //입력값이 있으면 쓰고 없으면 빈문자열로 치환
      company: companyRef.current.value || '',
      theme: themeRef.current.value,
      title: titleRef.current.value || '',
      email: emailRef.current.value || '',
      message: messageRef.current.value || '',
      fileName: file.fileName || '',
      fileURL: file.fileURL || ''
    }
    formRef.current.reset() //사용자가 입력해서 제출하면 폼이 다시 리셋되도록 함
    //NoSQL에 전달하기 전에 card리터럴에 초기화된 값을 확인하기
    console.log(card)
    // card에 필요한 정보를 받고 나면 file상태를 초기화 하기 - 
    setFile({ fileName: null, fileURL: null })
    // TODO - NoSQL(firestore)과 연동하여 저장하기 - feature/step3
    // 수정, 입력, 삭제 처리는 Maker쪽에서 하기

  }
  return (

		<Form ref={formRef} className={styles.form}>
      <Input ref={nameRef} name='name' placeholder='Name' />
      <Input ref={companyRef} name='company' placeholder='Company' />
      <Select ref={themeRef} name="theme" placeholder="Theme">
        <option placeholder="light">light</option>
        <option placeholder="dark">dark</option>
        <option placeholder="colorful">colorful</option>
      </Select>
      <Input ref={titleRef} name="title" placeholder='Title'  />
      <Input ref={emailRef} name="email" placeholder='Email' />
      <TextArea ref={messageRef} name='message' placeholder='Message' />
			<FileInputDiv>
        <FileInput name={file.fileName} onFileChange={onFileChange} />
      </FileInputDiv>
      <Button name="Add" onClick={onSubmit}/>
		</Form>

  )
}

export default CardAddForm
