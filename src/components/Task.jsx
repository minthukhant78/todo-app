import React from "react";

const Task = ({ job: { id, task, isDone }, deleteTask, doneTask }) => {
  // console.log(job)
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      deleteTask(id);
    }
  };

  const handleOnChange = () => {
    doneTask(id);
  };
  return (
    <div className=" flex justify-between items-center  border-2 p-3 rounded-lg mb-3 last:mb-0 border-slate-300">
      <div className="flex items-center gap-3">
        <input type="checkbox" checked={isDone} onChange={handleOnChange} />
        <p className={isDone ? "line-through" : ""}>{task}</p>
      </div>

      <button
        onClick={handleDelete}
        className="text-sm bg-red-100 border-2 border-red-100  text-red-700  rounded-lg py-2 px-4"
      >
        {" "}
        Delete{" "}
      </button>
    </div>
  );
};

export default Task;
