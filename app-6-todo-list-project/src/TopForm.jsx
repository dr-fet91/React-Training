import React, { Fragment, useContext, useState } from "react";
import { taskContext } from "./taskContext";
const TopForm = () => {
    const [task, setTask] = useState("");
    const {taskItems, setTaskItems} = useContext(taskContext);
    const handleSetTask = (e)=>{
        setTask(e.target.value);
    }
    const handleAddTask = (e)=>{
        e.preventDefault();
        setTaskItems([...taskItems, {id:Math.random(), title:task, done:false}]);
        setTask("");
    }
    return (
        <Fragment>
            <h4 className="text-center text-info tex-shadow">به این آموزش خوش آمدید</h4>
            <form action="" onSubmit={handleAddTask}>
                <div className="form-group d-flex">
                    <input type="text" className="form-control" onChange={handleSetTask} value={task} placeholder="" />
                    <button className="btn btn-success me-1" type="submit">ثبت</button>
                </div>
            </form>
        </Fragment>
    );
}

export default TopForm;