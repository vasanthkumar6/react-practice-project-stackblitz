import React, { useState, useEffect } from 'react';
// import './style.css';
import './color:.css';

export default function App() {
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);
  const [user, setUser] = useState('');

  const h1Style = {
    color: 'white',
    align: 'center',
    backgroundColor: 'lightgrey',
  };
  const handleChange = (e) => {
    // console.log(e.target.value);
    setUser(e.traget.value);
  };
  // function handleChange(event) {
  //   console.log(event.target);
  // }
  // useEffect(() => {
  //   console.log(count);
  // }, [count]);
  return (
    <div>
      {/* <div className="stack"> */}
      {/* <h1 style={h1Style}>Hello StackBlitz!</h1> */}
      {/* <button
          onClick={() => {
            // setName('onClick');
            setCount(count + 1);
            // console.log('clicked');
          }}
        >
          Click Here
        </button>
        <br /> */}
      {/* </div> */}
      {/* <p>Start editing to see some magic happen :)</p> */}
      <input
        type="text"
        placeholder="userName"
        value={user}
        name="user"
        onChange={handleChange}
      />
      {/* <p>{name}</p>
      <p>{count}</p> */}
      <p>{user}</p>
    </div>
  );
}
