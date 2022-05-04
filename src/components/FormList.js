export function FormList({ handleClick, value, setValue })  {
    return (
        <form>
          <label htmlFor="task">Enter your task: </label>
          <input type="text" name="task" id="task" onChange={(e) => setValue(e.target.value)} value={value} />
          <input type="submit" value="Add task" onClick={handleClick} />
        </form>   
    )
}