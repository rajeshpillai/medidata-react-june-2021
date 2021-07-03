import React, {useState} from 'react';


export default function MultipleStates(){
  const [user, setUser] = useState({username: 'rajesh', password: 'secret'});


  function handleChange(e) {
    setUser({
      ...user,
      [e.target.name] : e.target.value
    });
  }
  
  
  return (
    <div className="app">
    <header>
      <h1>useState with Object(property merge issue) </h1>
      <h2>As you type in one field, the other value disappears</h2>
    </header>
    
    <h2>{user.username}</h2>
    <h2>{user.password}</h2>
    <div className="row">
      <div className="fields">
        <label>Username</label>    
        <input type="text" name="username" onChange={handleChange} placeholder="enter username" />
      </div>
    </div>
    <div className="row">
      <div className="fields">
        <label>Password</label>    
        <input type="text" name="password" onChange={handleChange} placeholder="enter password" />
      </div>
    </div>
   
    <footer>
      <h2>useState does not merge state by default </h2>
    </footer>
  </div>
  )
}