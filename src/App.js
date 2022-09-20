import { useState } from "react";
import UserInput from "./components/UserInput/UserInput";
import UserList from "./components/UserList/UserList";

const App = () => {
  const [users, setUsers] = useState([]);

  const addUserHandler = (newUser) => {
    setUsers((prevUser) => {
      return [newUser, ...prevUser];
    })
  };

  const deleteUserHandler = (userId) => {
    setUsers((prevUsers) => {
      const updateUsers = prevUsers.filter((user) => user.id !== userId);
      return updateUsers; 
    })
  };

  let content = "";

  if (users.length > 0) {
    content = <UserList users={users} onDeleteUser={deleteUserHandler}/>;
  }

  return (
    <div>
      <section>
        <UserInput onAddUser={addUserHandler}/>
      </section>
      <section>{content}</section>
    </div>
  );
};

export default App;
