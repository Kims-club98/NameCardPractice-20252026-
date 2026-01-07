import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router';
import { auth } from "./service/authAPI"
import ImageUploader from './service/image_upload';
import ImageFileInput from './components/common/imageFileInput';
const imageUploader = new ImageUploader() 
// 왜 CardEditor에서 사용할 컴포넌트를 index.js에 선언하였나?
// props는 상위 컴포넌트에서 하위 컴포넌트로 만 전달 가능함.
// () => ()
// () => {return} 
// ... spread operation
// 이거가 없다면 새로고침이 된다.누적이 안됨 -> 덮어쓰기와 같다. 
const FileInput = props => (
  <ImageFileInput {...props} imageUploader={imageUploader} />
)
// public>index.html div 위치 파악
const root = ReactDOM.createRoot(document.querySelector('#root'));
console.log(auth)
root.render(
  <>
    <BrowserRouter>
      <App FileInput={FileInput}/>
    </BrowserRouter>
  </>
);

