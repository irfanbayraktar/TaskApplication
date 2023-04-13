import TaskShow from "./TaskShow";
import TasksContext from '../context/task'
import {useContext} from 'react'


function TaskList() {
    const{tasks} = useContext(TasksContext)
    if(!Array.isArray(tasks)){
        return null;
    }

    return ( 
    <div className="task-list">
        {tasks.map((task,index)=>{
            return (
                <TaskShow key={index} task={task}/>
            )
        })}
    </div> 
    );
}

export default TaskList;