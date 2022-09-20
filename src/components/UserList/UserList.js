import User from "../User/User";

const UserList = (props) => {
  return (
    <ul>
      {props.users.map((user) => {
        return (
          <User key={user.id} id={user.id} onDelete={props.onDeleteUser}>
            {`${user.name} (${user.age} years old)`}
          </User>
        );
      })}
    </ul>
  );
};

export default UserList;
