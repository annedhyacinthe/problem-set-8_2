import React from 'react';
import UserContext from './UserContext';


function Button(props){
        const { getUser } = React.useContext(UserContext) 
    
        return( 
          <div id={props.id} className='dropdown-item' onClick={async()=>{
              const res = await getUser(props.id)
              console.log(res)
          }}>
            {props.id}
        </div>
       
        )
    
    }

export default Button;