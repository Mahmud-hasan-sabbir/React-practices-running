import { useEffect } from "react"
import { useState } from "react";

export default function FetchData()
{

 let fetchStyle = {
  border: "1px solid green",
  padding:"5px",
  borderRedius : "10px"


 }

   const [users, setUsers] = useState([]);

 useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error(err));
  }, []);



 
 return(

  <>

  
  <div style={fetchStyle}>
        <h1>This is Fetch Data Load</h1>

        {/* সব users render করা */}
        <ul>
          {users.map(user => (
            <li key={user.id}>
              {user.name} ({user.email})
            </li>
          ))}
        </ul>

      
      </div>
 </>

 )






}