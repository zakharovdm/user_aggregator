import Button from "../Button/Button";
import Card from "../Card/Card";
import styles from "./InvalidModal.module.css";

const InvalidModal = (props) => {
  return (
    <div>
      <div className={styles.backdrop}/>
      <Card className={`${styles.modal} ${props.isValid ? "" : styles.invalid}`}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button type="button" onClick={props.onClick}>
            Ok
          </Button>
        </footer>
      </Card>
    </div>
  );
};

export default InvalidModal;
