import { React, useEffect,useState } from 'react'

function Profile() {
    const [User,setUser]=useState([])
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
       console.log(user)
       setUser(user)
    },[]);

    return (
        <div>
            {(User!==null)?  
           <div>
             <p>{User.email}</p>
            <p>{User.uid}</p>
           </div>
            :<div>Login</div>

            }
          
        </div>
    )
}

export default Profile