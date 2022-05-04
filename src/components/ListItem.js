import '../App.css';

export function ListItem({ task, handleIsComplete }) {
    return (
        <>
            <button onClick={() => handleIsComplete(task.id)}>{task.isCompleted ? '☑️' : '⚪️'}</button>
            <ul className={task.isCompleted ? 'crossListItem' : ''}>
                <li>{task.description}</li>
            </ul>
        </>
    )
};