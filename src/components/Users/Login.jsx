import React, { useState } from "react";
import UserList from "./UserList";
import Card from "../UI/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button";
import ErrorModel from "../UI/ErrorModal";

function Login(props) {
  const [enteredUsername, setenteredUsername] = useState("");
  const [enteredAge, setenteredAge] = useState("");

  const [error, setError] = useState();
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please Enter valid name and age (no empty field allowed)",
      });

      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please Enter Valid Age(Age>0)",
      });

      return;
    }
    const enteredUserData = {
      id: Math.random().toString(),
      username: enteredUsername,
      age: +enteredAge,
    };

    setenteredUsername("");
    setenteredAge("");

    props.onAddingUser(enteredUserData);
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "username") {
      setenteredUsername(value);
    }
    if (name === "age") {
      setenteredAge(value);
    }
  };
  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModel
          title={error.title}
          message={error.message}
          onError={errorHandler}
        />
      )}{" "}
      :
      <Card className={classes.input}>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="">Username</label>

          <input
            id="username"
            type="text"
            name="username"
            value={enteredUsername}
            onChange={handleInputChange}
          ></input>

          <label htmlFor="age">Age (years)</label>
          <br />
          <input
            id="age"
            type="number"
            name="age"
            value={enteredAge}
            onChange={handleInputChange}
          ></input>

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
}

export default Login;
