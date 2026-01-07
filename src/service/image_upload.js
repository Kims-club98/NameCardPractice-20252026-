// 클래스 선언
/*
  <form method="get|post|put|delete" action='http://localhost:8000'>
    <input type='file'>
  </form>
*/
class ImageUploader {
  //upload 함수 구현하기
  // @param : file(image/*)
  async upload(file) {// <input type='file'>
    const data = new FormData(); //폼 전송을 구현하기 - 화면이 없이 폼 전송의 형태로 처리
    data.append('file', file);
    data.append('upload_preset', 'gjjjqtxw');//
    const result = await fetch(//비동기처리 지원 -> axios
      'https://api.cloudinary.com/v1_1/dfxci8qyg/upload',
      {
        method: 'POST',
        body: data,
      }
    );
    return await result.json();
  }  
}
// 외부에서 import로 사용하기 위한 선언
// default는 한 번만 사용이 가능함
// 모듈화
export default ImageUploader;