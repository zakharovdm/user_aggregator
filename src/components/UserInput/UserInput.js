import { useState } from "react";
import InvalidModal from "../UI/InvalidModal/InvalidModal";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import styles from "./UserInput.module.css";

const UserInput = (props) => {
  const [username, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const UserInputHandler = (evt) => {
    setUserName(evt.target.value);
  };

  const AgeInputHandler = (evt) => {
    setAge(evt.target.value);
  };

  const formSubmitHandler = (evt) => {
    evt.preventDefault();
    const user = { name: username, age: age, id: Math.random().toString() };
    if (user.name.trim().length === 0 || user.age.trim().length === 0) {
      setError({
        title: "Input error",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }

    if (Number(user.age) < 1) {
      setError({
        title: "Age error",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    props.onAddUser(user);
    setUserName("");
    setAge("");
  };

  const errorHandler = () => {
    setError(null);
  }

  return (
    <div>
      {error && (
        <InvalidModal
          title={error.title}
          message={error.message}
          onError={errorHandler}
        />
      )}
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
        </form>
      </Card>
    </div>
  );
};

export default UserInput;
