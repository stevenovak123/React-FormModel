
import './App.css';
import AddUser from './components/Users/AddUser';
import UsersLists from './components/Users/UsersLists';

function App() {
  return (
    <div>
    <AddUser />
    <UsersLists users={[]}/>
    </div>
  );
}

export default App;
