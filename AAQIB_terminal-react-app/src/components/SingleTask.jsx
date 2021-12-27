import React from "react";
const SingleTask = (props) => {
    const [complete, setComplete] = React.useState("uncomplete");
    const handleChange=(e)=>{
        setComplete(e.target.value);
    }

  return (
      <div>
      <h3>{props.task.name}</h3>
      <p>
        {/* <b>Complete</b> {props.task.isComplete}  */}
      </p>
      <form>
          <input type="radio" value="complete" id="comp"
              onChange={handleChange} name="comp" />
            <label for="comp">Complete</label>

            <input type="radio" value="uncomplete" id="unc"
              onChange={handleChange} name="uncomplete"/>
            <label for="uncom">uncomplete</label>
            </form>      
      </div>
  );
};

export default SingleTask;
