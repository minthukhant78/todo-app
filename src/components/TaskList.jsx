import React from 'react'
import Task from './Task'

const TaskList = ( { tasks, deleteTask } ) => {
 
  return (
    <div>
        <h1 className=' font-bold font-serif p-2 text-xl mb-4'>TaskList ( Total { tasks.length }, Done { tasks.filter ((el) => el.isDone).length} )</h1>
        {  tasks.map ((el) => <Task deleteTask={deleteTask} key={el} job={el}/>) }
    </div>
  )
}

export default TaskList