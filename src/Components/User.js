import React from 'react';
import '../index.css'; // Adjust the path as necessary
import {useState} from 'react';


const User = ({ name, role, email }) => {
   
  const [count, setCount] = useState(0);
  return (
    <div >
      <p>count : {count}</p>
        <h2>Name : {name}</h2>
        <h2>Role : {role}</h2>
        <h2>Email : {email}</h2>
        <p><b>About:</b>
            Santhosh is a passionate developer with a keen interest in testing scalable web applications. He loves coding, exploring new technologies, and creating seamless user experiences.
        </p>
    </div>
  );
}

export default User;