import React from "react";
import classes from "./UserList.module.css";
import Card from "../UI/Card";
function UserList(props) {
  // console.log(props.users);
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.username} {user.age} (years Old) - {user.college}
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default UserList;
