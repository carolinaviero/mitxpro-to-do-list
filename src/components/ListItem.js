import { useState } from 'react';
import '../App.css';

export function ListItem({ task, handleEdit, handleIsComplete }) {
    const [isEditMode, setIsEditMode] = useState(false);
    const [editedTask, setEditedTask] = useState(task.description);
  
    const handleEditClick = () => {
      setIsEditMode(!isEditMode);
  
      if (isEditMode) {
        handleEdit(task.id, editedTask);
      }
    };
  
    const handleEditInput = e => {
      setEditedTask(e.target.value);
    };
  
    return (
      <>
        <button onClick={() => handleIsComplete(task.id)}>{task.isCompleted ? '☑️' : '⚪️'}</button>
        {isEditMode ? (
          <input onChange={handleEditInput} value={editedTask} />
        ) : (
          <ul className={task.isCompleted ? 'crossListItem' : ''}>
            <li>{task.description}</li>
          </ul>
        )}
        <button onClick={() => handleEditClick()}>{isEditMode ? '✅' : '✍️'}</button>
      </>
    );
  }