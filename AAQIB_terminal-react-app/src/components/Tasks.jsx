import React, { useState } from "react";
import SingleTask from "./SingleTask";
import axios from "axios";
const Task = () => {
  const [task, setTask] = useState([]);
  const [loading, setLoading] = useState(false);
  const getData = () => {
    setLoading(true);
    axios
      .get("/tasks")
      .then((res) => {
        setTask(res.data);
        setLoading(false);
      });
  };
  React.useEffect(getData, []);
  return (
    <div>
        <h1>Hello</h1>
      {loading && <p>Loading...</p>}
      {task.length === 0 && !loading && (
        <p>Sorry We have No task to Show</p>
      )}
      {task.map((t) => (
        <SingleTask task={t} />
      ))}
    </div>
  );
};

export default Task;