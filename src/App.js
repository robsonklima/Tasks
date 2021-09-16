import { useState } from 'react';
import './App.css';
import Tasks from './components/Tasks';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Task 1',
      completed: false
    },
    {
      id: '2',
      title: 'Task 2',
      completed: false
    }
  ]);
  
  return (
    <>
      <div className="container">
        <Tasks tasks={tasks} />
      </div>
    </>
  );
}

export default App;
