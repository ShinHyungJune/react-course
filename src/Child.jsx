import React from 'react';

const Child = ({comment}) => {
   return (
       <div className="child">
		   {comment}
       </div>
   );
};

export default Child;