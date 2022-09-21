import Button from "../UI/Button/Button";

const InvalidModal = (props) => {
  return (
    <div>
      <h2>Invalid input</h2>
      <p>{props.children}</p>
      <Button type="button">Ok</Button>
    </div>
  )
};

export default InvalidModal;