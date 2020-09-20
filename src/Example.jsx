import React, {useEffect} from 'react';
import Axios from 'axios';

const Example = () => {
	useEffect(() => {
		Axios.get("http://localhost:80/me")
			.then(response => console.log(response));
	}, []);

	return (
		<div>
			아무나 들어올 수 있는 페이지입니다.
		</div>
	);
};

export default Example;