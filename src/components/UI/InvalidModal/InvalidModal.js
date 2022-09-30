import { Fragment } from "react";
import ReactDOM from "react-dom";
import Button from "../Button/Button";
import Card from "../Card/Card";
import styles from "./InvalidModal.module.css";

const InvalidModal = (props) => {
  const Backdrop = (props) => {
    return <div className={styles.backdrop} onClick={props.onError} />;
  };

  const ModalOverlay = (props) => {
    return (
      <Card
        className={`${styles.modal} ${props.isValid ? "" : styles.invalid}`}
      >
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
    );
  };

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onError={props.onError} />,
        document.querySelector("#backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onError={props.onError}
        />,
        document.querySelector("#modal-root")
      )}
    </Fragment>
  );
};

export default InvalidModal;
