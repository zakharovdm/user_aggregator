import { useState } from "react";
import InvalidModal from "../InvalidModal/InvalidModal";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import styles from "./UserInput.module.css";

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

  const clickHandler = () => {
    setIsValid(true);
  };

  let errorText = "";

  if (!isNotEmpty) {
    errorText = "Please enter a valid name and age (non-empty values).";
  }

  if (!isNotNegative) {
    errorText = "Please enter a valid age (> 0).";
  }

  return (
    <Card className={styles.input}>
      <form onSubmit={formSubmitHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          name="username"
          value={username}
          onChange={UserInputHandler}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          name="age"
          value={age}
          onChange={AgeInputHandler}
        />
        <Button type="submit">Add User</Button>
        <InvalidModal isValid={isValid} onClick={clickHandler}>
          {errorText}
        </InvalidModal>
      </form>
    </Card>
  );
};

export default UserInput;
