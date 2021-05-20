
import React ,{ useState } from 'react';
import './App.css';
import AddUser from './components/Users/AddUser';
import UsersLists from './components/Users/UsersLists';

function App() {
  const [usersLists, setUsersList] =useState([]);
  const addUserHandler =(uName,uAge)=>{
    setUsersList((prevUsersList)=>{
      return[...prevUsersList,
        {name:uName,age:uAge,id:Math.random().toString()}
      ];
    });
  }
  return (
    <div>
    <AddUser onAddUser={addUserHandler} />
    <UsersLists users={usersLists}/>
    </div>
  );
}

export default App;
