//Lifting up data usning fun onAddingUser and called this fun in chalid Login.jsx with userData
//this will send the userdata to App.js as user users now from here we can passed that data to <userList> as props.

import { useState } from "react";
import "./App.css";
import Login from "./components/Users/Login";
import UserList from "./components/Users/UserList";

function App() {
  const [users, setUsers] = useState([]);
  const onSaveUser = (user) => {
    setUsers((prevState) => {
      return [...prevState, user];
    });
    console.log(user);
  };
  return (
    <>
      <Login onAddingUser={onSaveUser} />
      <UserList users={users} />
    </>
  );
}

export default App;
