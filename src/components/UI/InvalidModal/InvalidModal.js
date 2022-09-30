import { Fragment } from "react";
import Button from "../Button/Button";
import Card from "../Card/Card";
import styles from "./InvalidModal.module.css";

const InvalidModal = (props) => {
  return (
    <Fragment>
      <div className={styles.backdrop} onClick={props.onError}/>
      <Card className={`${styles.modal} ${props.isValid ? "" : styles.invalid}`}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button type="button" onClick={props.onError}>
            Ok
          </Button>
        </footer>
      </Card>
    </Fragment>
  );
};

export default InvalidModal;
