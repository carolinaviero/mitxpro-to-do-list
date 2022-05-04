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

  const handleIsComplete = id => {
    const foundItem = tasks.find(task => task.id === id);
    foundItem.isCompleted = !foundItem.isCompleted;
    const newArray = tasks.map(task => (task.id === id ? foundItem : task));

    setTasks(newArray);
  };

  const handleEdit = (taskId, editedTask) => {
    const editedArray = tasks.map(task => {
      if (task.id !== taskId) {
        return task;
      } else {
        return {
          id: taskId,
          description: editedTask,
        };
      }
    });

    setTasks(editedArray);
  };

  return (
    <div>
      <h1>
        To Do List
      </h1>
        {tasks.map((element) => (
          <div className="container">
            <ListItem task={element} key={element.id} handleEdit={handleEdit} handleIsComplete={handleIsComplete} />
          </div>
        ))}
        <FormList handleClick={handleClick} value={value} setValue={setValue} />
    </div>
  );
}

export default App;
