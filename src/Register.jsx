import React, {useState} from 'react';
import axios from "axios";
import {connect} from "react-redux";
import {login} from "./actions/commonActions";

const Register = ({login, history}) => {
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

		axios.post("/register", form)
			.then(response => {
				login({email: form.email}, response.data.accessToken, onLogin);
			})
	};

	const onLogin = () => {
		history.push("/");
	};

	return (
		<div id={"login"}>
			<p className="title">회원가입</p>

			<form onSubmit={submit}>
				<input type="email" placeholder={"이메일 아이디를 입력해주세요."} name={"email"} onChange={changeForm}/>

				<input type="password" placeholder={"비밀번호를 입력해주세요."} name={"password"} onChange={changeForm}/>

				<button>회원가입</button>
			</form>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		login: (user, token, onLogin) => {
			dispatch(login(user, token, onLogin));
		}
	}
};

export default connect(null, mapDispatchToProps)(Register);