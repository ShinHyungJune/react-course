import React, {useState} from 'react';
import axios from 'axios';
import {connect} from "react-redux";
import {login} from "./actions/commonActions";

const Login = ({login, history}) => {
	let [form, setForm] = useState({
		email: "",
		password: ""
	});

	const changeForm = (event) => {
		setForm({
			...form,
			[event.target.name] : event.target.value
		});
	};

	const submit = (event) => {
		event.preventDefault();

		axios.post("/login", form)
			.then(response => {
				console.log(response);
				login({email: form.email}, response.data.accessToken, onLogin);
			})
	};

	const onLogin = () => {
		history.push("/");
	};

	return (
		<div id={"login"}>
			<p className="title">로그인</p>

			<form onSubmit={submit}>
				<input type="email" placeholder={"이메일 아이디를 입력해주세요."} name={"email"} onChange={changeForm}/>

				<input type="password" placeholder={"비밀번호를 입력해주세요."} name={"password"} onChange={changeForm}/>
				
				<button>로그인</button>
			</form>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		login: (user, token, onLogin) => {
			return dispatch(login(user, token, onLogin));
		}
	}
};

export default connect(null, mapDispatchToProps)(Login);