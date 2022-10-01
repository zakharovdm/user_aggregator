import { useState, Fragment, useRef } from "react";
import InvalidModal from "../UI/InvalidModal/InvalidModal";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import styles from "./UserInput.module.css";

const UserInput = (props) => {
  const [error, setError] = useState();
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const formSubmitHandler = (evt) => {
    evt.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    const user = {
      name: enteredName,
      age: enteredAge,
      id: Math.random().toString(),
    };
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Input error",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }

    if (Number(enteredAge) < 1) {
      setError({
        title: "Age error",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    props.onAddUser(user);
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Fragment>
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
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            name="age"
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default UserInput;
