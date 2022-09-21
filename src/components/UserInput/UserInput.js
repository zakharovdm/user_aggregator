import { useState } from "react";
import Button from "../UI/Button/Button";

const UserInput = (props) => {
  const [username, setUserName] = useState("");
  const [age, setAge] = useState("");

  const UserInputHandler = (evt) => {
    setUserName(evt.target.value);
  };

  const AgeInputHandler = (evt) => {
    setAge(evt.target.value);
  };

  const formSubmitHandler = (evt) => {
    evt.preventDefault();
    const user = { name: username, age: age, id: Math.random().toString() };
    props.onAddUser(user);
    setUserName("");
    setAge("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div>
        <label>Username</label>
        <input type="text" name="username" value={username} onChange={UserInputHandler} />
      </div>
      <div>
        <label>Age (Years)</label>
        <input type="number" name="age" value={age} onChange={AgeInputHandler} />
      </div>
      <Button type="submit">Add User</Button>
    </form>
  );
};

export default UserInput;
