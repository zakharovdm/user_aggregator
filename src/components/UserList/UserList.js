import User from "../User/User";
import Card from "../UI/Card/Card";
import styles from "./UserList.module.css";

const UserList = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((user) => {
          return (
            <User key={user.id} id={user.id} onDelete={props.onDeleteUser}>
              {`${user.name} (${user.age} years old)`}
            </User>
          );
        })}
      </ul>
    </Card>
  );
};

export default UserList;
