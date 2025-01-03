import { useState } from 'react';
import './App.css';
import Display from './components/Display';
import UserForm from './components/UserForm';

function App() {
  const [reload, setReload] = useState(false);
  const handleUserAdded = () => {
    setReload(!reload);
  };
  return (
    <div className="App">
     <UserForm/>
     {/* <Display key="reload"/> */}
    </div>
  );
}

export default App;
