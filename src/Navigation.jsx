import React, {} from 'react';
import {Link} from "react-router-dom";

const Navigation = () => {
	return (
		<div className="navigation">
			<div>
				<Link to={"/pageA/새로운타이틀"}>PAGE A</Link>
			</div>
			<div>
				<Link to={"/pageB"}>PAGE B</Link>
			</div>
			<div>
				<Link to={"/FAVORITES"}>FAVORITES</Link>
			</div>
			
			<br/>
		</div>
	);
};

export default Navigation;