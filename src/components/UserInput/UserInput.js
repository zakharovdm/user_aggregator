import Button from "../UI/Button/Button";

const UserInput = () => {
  return (
    <form>
      <div>
        <label>Username</label>
        <input type="text" />
      </div>
      <div>
        <label>Age (Years)</label>
        <input type="number" />
      </div>
      <Button type="submit">Add User</Button>
    </form>
  );
};

export default UserInput;
