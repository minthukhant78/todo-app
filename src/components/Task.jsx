import React from 'react'

const Task = ({ job, deleteTask }) => {
  const handleDelete = () => {
   if (window.confirm('Are you sure you want to delete this task?')) {
    deleteTask(job)
   }
  }
  return (
    <div className=" flex justify-between items-center  border-2 p-3 rounded-lg mb-3 last:mb-0 border-slate-300">
        <p>{job}</p>

        <button onClick={handleDelete} className='text-sm bg-red-100 border-2 border-red-100  text-red-700  rounded-lg py-2 px-4'> Delete </button>
    </div>
  )
}

export default Task