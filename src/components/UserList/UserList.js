import User from "../User/User";

const UserList = (props) => {
  return (
    <ul>
      {props.users.map((user) => {
        return (
          <User key={user.id}>{`${user.name} (${user.age} years old)`}</User>
        );
      })}
    </ul>
  );
};

export default UserList;
