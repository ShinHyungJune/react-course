import React, {useState} from 'react';

const Example = () => {
	let [age, setAge] = useState(15);
	let [wish, setWish] = useState("딱히 뭐");
	
	// 나이 증가
	const increase = () => {
		setAge(age + 1);
	};
	
	// 나이 감소
	const decrease = () => {
		setAge(age - 1);
	};
	
	// 소원 변경
	const changeWish = (event) => {
		/*
		on[이벤트명]은 알아서 event 파라미터를 넘겨줌
		event.target은 이벤트가 일어난 대상으로,
		event.target.name은 해당 태그의 name
		event.target.value는 해당 태그의 value값을 얻을 수 있음
		*/
		setWish(event.target.value);
	};
	
	// 정보 제출
	const submit = (event) => {
		/*
		on[이벤트명]은 알아서 event 파라미터를 넘겨줌
		원래 form submit을 하면 페이지가 새로고침 됨
		그런데 보통 react나 vue를 사용하면 기본으로 Single Page Application(SPA)로
		제작을 할텐데, 새로고침되면 곤란함.
		이럴 때 event.preventDefault()를 쓰면 해당 이벤트가 원래 하던일을 막을 수 있음.
		* */
		
		event.preventDefault();
		
		alert("제출");
	};
	
	return (
		<div>
			<form action="" onSubmit={submit}>
				<p>나이: {age}</p>
				
				<button type="button" onClick={increase}>+</button>
				<button type="button" onClick={decrease}>-</button>
				
				<p>소원: {wish}</p>
				<input type="text" placeholder="소원을 입력해주세요" onChange={changeWish}/>
				
				<br/>
				<button>제출</button>
			</form>
		
		</div>
	);
};

export default Example;