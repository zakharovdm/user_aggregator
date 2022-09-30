import Button from "../Button/Button";
import Card from "../Card/Card";
import Wrapper from "../../Helpers/Wrapper";
import styles from "./InvalidModal.module.css";

const InvalidModal = (props) => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default InvalidModal;
