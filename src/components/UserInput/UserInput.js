import { useState } from "react";
import Button from "../UI/Button/Button";
import InvalidModal from "../InvalidModal/InvalidModal";

const UserInput = (props) => {
  const [username, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [isNotEmpty, setIsNotEmpty] = useState(true);
  const [isNotNegative, setIsNotNegative] = useState(true);
  const [isValid, setIsValid] = useState(true);

  const UserInputHandler = (evt) => {
    setUserName(evt.target.value);
  };

  const AgeInputHandler = (evt) => {
    setAge(evt.target.value);
  };

  const formSubmitHandler = (evt) => {
    evt.preventDefault();
    const user = { name: username, age: age, id: Math.random().toString() };
    if (user.name.trim().length === 0 && user.age.trim().length === 0) {
      setIsNotEmpty(false);
      setIsValid(false);
      return;
    }

    if (user.age < 0) {
      setIsNotNegative(false);
      setIsValid(false);
      return;
    }

    props.onAddUser(user);
    setUserName("");
    setAge("");
  };

  let errorText = "";

  if (!isNotEmpty) {
    errorText = "Please enter a valid name and age (non-empty values).";
  }

  if (!isNotNegative) {
    errorText = "Please enter a valid age (> 0).";
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div>
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={UserInputHandler}
        />
      </div>
      <div>
        <label>Age (Years)</label>
        <input
          type="number"
          name="age"
          value={age}
          onChange={AgeInputHandler}
        />
      </div>
      <Button type="submit">Add User</Button>
      <InvalidModal isValid={isValid}>{errorText}</InvalidModal>
    </form>
  );
};

export default UserInput;
