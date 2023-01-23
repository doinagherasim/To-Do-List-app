import React from "react";
import { useState } from "react";
import classes from "./ToDoList.module.css";

function ToDoList () {
// default values for tasks

    const [tasks, setTasks] = useState([
{
    id: 0,
    title: "Task 1",
    complete: true
},
    {id: 1,
        title: "Task 2",
        complete: false 
},
    {id: 2,
        title: "Task 3",
        complete: false 
}
    ]);

    // Creating a new task
    const addTask = (e) => {
        e.preventDefault();
        const newTask = {
            id: e.target.item.index,
            title: e.target.item.value,
            complete: false
        };

        setTasks([...tasks, newTask]);
    };

    // Completing a task
    const completeTask = (index) => {
        const newTasks = [...tasks];
        newTasks[index].complete = true;
        setTasks(newTasks);
    };

    // Removing a task
    const removeTask = (index) => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };

    // Remaining tasks
     const pendingTasks = tasks.reduce(function (sum, task){
           if(task.complete === false){
            return sum +1; 
           } else {
            return sum;
           }
     },0);

    // Completed tasks
    const completedTasks = tasks.reduce((sum,task) => {
        if(task.complete === true){
            return sum +1;
        } else {
            return sum;
        }
    },0);

    return (
        <div className={classes.container}>
            <div className={classes.todo_wrap}>
                <h2 className={classes.title}><i>TO DO LIST</i></h2>
                <div className={classes.status_wrap}>
                <p className={classes.status}>Completed tasks ({completedTasks})</p>
                <p className={classes.status}>Pending tasks ({pendingTasks})</p>
                </div>
                <div className={classes.tasks}>
                    {
                        tasks.map((item, index)=>
                            <div className={classes.task_wrap} key={index} index={index}>
                                <p className={`${classes.task} ${tasks[index].complete ? classes.complete : ""}`} >{item.title}</p>
                                <button className={`${classes.btn} ${classes.btn_complete}`}  onClick={()=>completeTask(index)}>Complete</button>
                                <button className={`${classes.btn} ${classes.btn_X}`} onClick={() => {removeTask(index);}}>X</button>
                            </div>
                        )
                    }
                </div>
                <form onSubmit={addTask} className={classes.input}>
                    <input type="text" name="item" id="index" placeholder=" Add a new task"/>
                    <button type="submit" className={`${classes.btn} ${classes.btn_add}`}>Add</button>
                </form>
            </div>
        </div>
    );
}

export default ToDoList;