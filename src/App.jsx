import React from "react";
import Heading from "./components/Heading";
import TaskList from "./components/TaskList";
import CreateTask from "./components/CreateTask";

const App = () => {
  // const tasks = [
  //   "Task 1",
  //   "Task 2",
  //   "Task 3",
  //   "Task 4",
  //   "Task 5",
  // ]

  const [tasks, setTasks] = React.useState([
    "Task 1",
    "Task 2",
    "Task 3",
    "Task 4",
    "Task 5",
  ]);


  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  }

  const deleteTask = (taskToDelete) => {
    setTasks(tasks.filter((task) => task !== taskToDelete));
  }
  return (
    <div className="p-10">
      <Heading />
      <CreateTask addTask={addTask} />
      <TaskList deleteTask={deleteTask}  tasks={tasks} />
    </div>
  );
};

export default App;
