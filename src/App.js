import { useState } from "react";
import UserInput from "./components/UserInput/UserInput";
import UserList from "./components/UserList/UserList";

const App = () => {
  const [users, setUsers] = useState([]);

  const addUserHandler = (newUser) => {
    setUsers((prevUser) => {
      return [...prevUser, newUser ];
    })
  };

  const deleteUserHandler = (userId) => {
    setUsers((prevUsers) => {
      const updateUsers = prevUsers.filter((user) => user.id !== userId);
      return updateUsers; 
    })
  };

  return (
    <div>
      <UserInput onAddUser={addUserHandler}/>
      <UserList users={users} onDeleteUser={deleteUserHandler}/>
    </div>
  );
};

export default App;
