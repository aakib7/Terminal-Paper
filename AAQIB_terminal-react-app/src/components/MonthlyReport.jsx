import React, { useState } from "react";
import axios from "axios";
const MonthlyReport = () => {
    const [loading, setLoading] = useState(false);
    const [task, setTask] = useState([]);
  const getData = () => {
    setLoading(true);
    axios
      .get("/tasks/monthly")
      .then((res) => {
        setTask(res.data);
        setLoading(false);
      });
  };
  React.useEffect(getData, []);
    return ( <>
    <h1>Monthly</h1>
    <h2>
{task.map((t) => (
        <h3>{t}</h3>
      ))}
    </h2>
    </> );
}
 
export default MonthlyReport;