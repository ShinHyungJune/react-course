import React from 'react';
import Children from './Children';
import Child from './Child';

const Parent = ({}) => {
	let comments = ["comment01", "comment02", "comment03"];

	return (
		<div className="parent">
			{
				comments.map((comment) => {
					return <Child comment={comment} />
				})
			}
		</div>
	);
};

export default Parent;   