import React, { useState } from 'react'

const CreateTask = ({ addTask }) => {
  const [job, setJob] = useState('');

  const handleChange = (e) => {
    // console.log(e.target.value)
    setJob(e.target.value);
  
  }
  const handleSubmit = () => {
    addTask(job);
    setJob('');
  }
  return (
    <div className=' flex mb-5'>
        <input className=' flex-grow   border-2 border-slate-300  rounded-l-lg p-2'
        // value={job}
        placeholder='Add Task'
        onChange={handleChange}
        />
        <button className=' bg-slate-300 border-2 border-slate-300  rounded-r-lg py-2 px-4' onClick={handleSubmit} >
            Add Task
        </button>
        
    </div>
  )
}

export default CreateTask