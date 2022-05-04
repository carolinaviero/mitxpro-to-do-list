import { useState } from 'react';
import { ListItem } from './components/ListItem'
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, description: "Buy milk", isCompleted: false }, 
    { id: 2, description: "Walk the dog", isCompleted: false },
    { id: 3, description: "Go shopping", isCompleted: false },
    { id: 4, description: "Cook dinner", isCompleted: false }
  ])

  return (
    <div>
      <h1>
        To Do List
      </h1>
        {tasks.map((element) => (
          <div className="container">
            <ListItem task={element} key={element.id} />
          </div>
        ))}
    </div>
  );
}

export default App;
