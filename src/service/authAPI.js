import { GoogleAuthProvider, GithubAuthProvider, getAuth, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { app } from './firebase'

// auth 인스턴스는 앱에서 1개만 쓰는 것이 일반적임
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const githubProvider = new GithubAuthProvider()

// 로그인
// 3000번 서버에서 구글 서버에 요청하기 
export const loginWithGoogle = async() => {
  const result = await signInWithPopup(auth, googleProvider)
  console.log(result)
  return result.user
}

// 로그아웃
export const logout = async() => {
  await signOut(auth)
}

// 인증 상태 변화 감지(구독)
export const subscribeAuthChange = (callback) => {
  //callback(user) 형태로 호출됨(로그인/로그아웃 변화)
  const unsubcribe = onAuthStateChanged(auth, callback)
  return unsubcribe
}