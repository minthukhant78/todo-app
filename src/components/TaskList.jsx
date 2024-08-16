import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, deleteTask, doneTask }) => {
  return (
    <div>
      <h1 className=" font-bold font-serif p-2 text-xl mb-4">
        TaskList ( Total {tasks.length}, Done{" "}
        {tasks.filter((el) => el.isDone).length} )
      </h1>
      {tasks.map((el) => (
        <Task
          doneTask={doneTask}
          deleteTask={deleteTask}
          key={el.id}
          job={el}
        />
      ))}
    </div>
  );
};

export default TaskList;
