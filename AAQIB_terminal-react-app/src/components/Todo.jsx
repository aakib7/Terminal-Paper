import { useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const Todo = () => {
    const [dueDate, setDueDate] = useState(new Date());
    const [task, setTask] = useState({
    task: "",
    isComplete: false,
    dueDate:dueDate
  });
    return ( <>
    <h1>Add Task</h1>
    <form action="" method="POST">
        <input placeholder="Task" name = "task"
            value={task.task}
            onChange = {(e) => {
            setTask({ ...task, task: e.target.value });}}/><br />
             <DatePicker selected={dueDate} onChange={(date) => setDueDate(date)} />
        <button type="submit"
            onClick={(e) => {
              axios.post("/tasks", task)
                .then((response) => {
                  console.log(response);
                })
                .catch((e) => {
                  console.log(e);
                });
            }}>Submit</button>
    </form>
    </> );
}
 
export default Todo;