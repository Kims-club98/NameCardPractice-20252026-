import styled from "styled-components";
import styles from './editorform.module.css'
import Button from "../common/button";
import { useRef } from "react";

const Input = styled.input`
  font-size: 0.8rem;
  width: 100%;
  border: 0;
  padding: 0.5em;
  border-bottom: 1px solid black;
  border-radius: 1px solid black;
  background: #f5ebe0;
  flex: 1 1 30%;
  &:focus {
    outline: none;
  }
`;

const Form = styled.form`
  display: flex;
  width: 100%;
  flex-wrap: wrap; /* 한 줄에 하나씩 떨어질 수 있도록 랩을 주고 */
  border-top: 1px solid black;
  border-left: 1px solid black;
  margin-bottom: 1em;
`;

const Select = styled.select`
  font-size: 0%.8rem;
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
`;

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
  background: #f5ebe0;
`;

const CardEditorForm = ({ FileInput, card }) => {
  const { name, theme, fileName, fileURL } = card;
  const handleChange = (event) => {
    console.log(event.currentTarget);
  };
  const onFileChange = () => {
    console.log("onFileChange");
  };
  const handleSubmit = () => {
    // 삭제 처리 버튼 -> 기능이다 == 함수 == 어디에 선언할 것인가?
    // 더미 데이터 적용해 화면을 출력해보기 -> 위에서 아래로 내림
    // 아래에서 위로 올려서 처리함 -> 이벤트 처리
    // 이벤트 처리는 부모에서 발생하지 않는다. -> 즉 자손태그에서 발동된다. -> 이벤트소스에도 자손이 있다.
    // 이것은 소스로부터 얻어낼 정보가 있음.
    // 이것과 전역적인 상태값이 함께 필요함.
  };
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  return (
    <Form ref={formRef} className={styles.form}>
      <Input ref={nameRef} name="name" placeholder="Name" />
      <Input ref={companyRef} name="company" placeholder="Company" />
      <Select ref={themeRef} name="theme" placeholder="Theme">
        <option placeholder="light">light</option>
        <option placeholder="dark">dark</option>
        <option placeholder="colorful">colorful</option>
      </Select>
      <Input ref={titleRef} name="title" placeholder="Title" />
      <Input ref={emailRef} name="email" placeholder="Email" />
      <TextArea ref={messageRef} name="message" placeholder="Message" />
      <FileInputDiv>
        <FileInput name={fileName} onFileChange={onFileChange} />
      </FileInputDiv>
      <Button name="Add" onClick={handleSubmit} />
    </Form>
  );
};

export default CardEditorForm;
