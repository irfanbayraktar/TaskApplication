import { useState } from "react";
import TaskCreate from "./TaskCreate";
import TasksContext from '../context/task'
import {useContext} from 'react'

function TaskShow({task}) {
    const{tasks, editTaskById, deleteTaskById}=useContext(TasksContext);

    const [showEdit, setShowEdit] = useState(false)

    const handleDeleteClick = () =>{
        //onDelete(task.id);
        deleteTaskById(task.id);
    };

    const handleEditClick = () =>{
        setShowEdit(!showEdit);
    };

    const handleSubmit = (id, updatedTitle, updatedTaskDesc) =>{
        setShowEdit(false);
        // onUpdate(id, updatedTitle, updatedTaskDesc);
        editTaskById(id, updatedTitle, updatedTaskDesc);
    };


    return (
    <div className="task-show">
      <div className="task-scroll">
        {showEdit ? (
        <TaskCreate task ={task} taskFormUpdate={true} onUpdate={handleSubmit}/>
         ): (
        <div>
        <h3 className="task-title">Göreviniz:</h3>
        <p>{task.title}</p>
        <h3 className="task-title">Yapılacaklar:</h3>
        <p>{task.taskDesc}</p>
        <div>
            <button className="task-delete" onClick={handleDeleteClick}>Sil</button>
            <button className="task-edit" onClick={handleEditClick}>Güncelle</button>
        </div>
     </div>
        )}
        </div>
    </div>
    );
}

export default TaskShow;