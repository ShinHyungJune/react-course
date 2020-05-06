import React, {useState} from 'react';

const Counter = () => {
	
	let [count, setCount] = useState(0);
	
	let normalCount = 0;
	
	const increase = () => {
		setCount(count + 1);
		
		normalCount = normalCount + 1;
	};
	
	const decrease = () => {
		setCount(count - 1);
		
		normalCount = normalCount - 1;
	};
	
	return (
		<div>
			<div>
				state를 쓴 카운트 : {count}
			</div>
			
			<div>
				state를 안 쓴 카운트 : {normalCount}
			</div>
			
			<button onClick={increase}>증가</button>
			<button onClick={decrease}>감소</button>
		</div>
	);
};

export default Counter;