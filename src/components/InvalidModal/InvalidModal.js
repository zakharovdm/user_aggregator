import Button from "../UI/Button/Button";
import styles from "./InvalidModal.module.css";

const InvalidModal = (props) => {
  return (
    <div className={`${styles.modal} ${props.isValid ? "" : styles.invalid}`}>
      <h2>Invalid input</h2>
      <p>{props.children}</p>
      <Button type="button" onClick={props.onClick}>
        Ok
      </Button>
    </div>
  );
};

export default InvalidModal;
