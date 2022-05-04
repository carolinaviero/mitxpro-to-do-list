import { useState } from 'react';
import { ListItem } from './components/ListItem'
import { FormList } from './components/FormList'
import './App.css';

function App() {
  const [value, setValue] = useState('');
  const [tasks, setTasks] = useState([
    { id: 1, description: "Buy milk", isCompleted: true }, 
    { id: 2, description: "Walk the dog", isCompleted: false },
    { id: 3, description: "Go shopping", isCompleted: false },
    { id: 4, description: "Cook dinner", isCompleted: false }
  ])

  const handleClick = (event) => {
    event.preventDefault();
    setTasks([ ...tasks, { description: value, isCompleted: false } ]);
    setValue('');
  }

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
        <FormList handleClick={handleClick} value={value} setValue={setValue} />
    </div>
  );
}

export default App;
