// import { useState } from 'react';
import './App.css';
import UserForm from './components/UserForm';
import StudentList from './components/StudentList';
import Chart from './components/Chart';
function App() {
  // const [reload, setReload] = useState(false);
  // const handleUserAdded = () => {
  //   setReload(!reload);
  // };
  return (
    <div className="App">
     <UserForm/>
     <StudentList/>
     <Chart/>
    </div>
  );
}

export default App;
