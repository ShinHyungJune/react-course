import React from 'react';
import Child from './Child';

const Children = ({ }) => {
   return (
       <div className="children">
           <Child/>
           <Child/>
           <Child/>
       </div>
   );
}
export default Children;