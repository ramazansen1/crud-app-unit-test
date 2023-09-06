import { useState } from "react";
import FormList from "./components/FomList/FormList";
import UserList from "./components/UserList/UserList";

function App() {
  const [users, setUsers] = useState([
    { name: "Ali", email: "ali@gmail.com" },
    { name: "ahmet", email: "ahmet@gmail.com" },
    { name: "elif", email: "elif@gmail.com" },
  ]);

  // kullanıcı ekleme fonksiyonu
  const addUser = (user) => {
    setUsers([...users, user]);
  };
  return (
    <>
      <div className="container my-4">
        <h1 className="text-center">Crud App Vite Test</h1>
        <FormList addUser={addUser} />
        <UserList users={users} />
      </div>
    </>
  );
}

export default App;
