import React, { useState } from 'react'
import styled from 'styled-components'
import "./common.css";
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


const Signup = () => {

	const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (event) => {
    event.preventDefault();
    const auth = getAuth();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      alert(`${email}님은 회원으로 등록되셨습니다`)
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(`다시 입력해주세요`)
    }
  };

	const handleGoogleLogin = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    try {
      const userCredential = await signInWithPopup(auth, provider);
      const user = userCredential.user;
      alert(`${user.email}님은 로그인하셨습니다`)
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(`등록되지 않은 사용자입니다`)
    }
  };

	return (
		<Container>
      <Form onSubmit={handleSignup}>
				<Logo></Logo>
				<Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="이메일"
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호"
        />				
				<Button type="submit">회원가입</Button>
				<Divider></Divider>
				<LoginGoogle onClick={handleGoogleLogin} type="submit">Google 계정으로 로그인</LoginGoogle>
				<SignupButton type="submit">로그인</SignupButton>
			</Form>
    </Container>
	)
}



export default Signup

const Container = styled.div`
	width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
	background-color: var(--bgcolor);
`
const Form = styled.form`
	width: 300px;
	height: 469px;	
	background-color: #fff;
	border-radius: 10px;
	justify-content: center;
	align-items: center;
	box-shadow: 1px 1px 10px var(--darkgray);	
`
const Logo = styled.div`
	vertical-align: middle;
	height: 18px;
	margin: 48px auto;
	background: url("../img/petcam_logo.svg") no-repeat center center;
`

const Input = styled.input`
	width: 250px;
	height: 40px;
	margin: 5px 20px;
	border-radius: 10px;
	border: 1px solid var(--yellow);
	text-align: center;	
	font-size: 14px;
	font-family: var(--pre-reg);
`
const Button = styled.button`
	width: 256px;
	height: 44px;
	margin: 5px 20px;
	border-radius: 10px;
	border: none;
	background-color: var(--yellow);
	text-align: center;
	font-size: 14px;
	font-family: var(--pre-reg);
	cursor: pointer;
	transition: .3s;

	&:hover {
		background-color: var(--hoveryellow);
	}
`
	
const Divider = styled.div`
width: 256px;
height: 1px;
margin: 10px 20px;
background-color: var(--darkgray);
`
const LoginGoogle = styled.button`
	width: 256px;
	height: 44px;
	margin: 5px 20px;
	border-radius: 10px;
	border: none;
	color: var(--darkgray);
	background-color: var(--lightgray);
	text-align: center;
	font-family: var(--pre-reg);
	cursor: pointer;

	&::before {
		content: "";
    display: inline-block;
    vertical-align: middle;
    height: 18px;
    width: 18px;
    margin-right: 15px;
    background: url("../img/Google__G__logo.svg") no-repeat center center;
	}
`
const SignupButton = styled.button`
	width: 256px;
	height: 44px;
	margin: 5px 20px;
	border-radius: 10px;
	border: none;
	color: var(--darkgray);
	background-color: var(--lightgray);
	text-align: center;
	font-family: var(--pre-reg);
	cursor: pointer;
`