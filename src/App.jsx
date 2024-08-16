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

  const [tasks, setTasks] =React.useState([
    { id: 1, task: "Complete JavaScript assignment", isDone: false },
    { id: 2, task: "Prepare for meeting with client", isDone: false },
    { id: 3, task: "Update project documentation", isDone: true },
    { id: 4, task: "Review code for new feature", isDone: false },
    { id: 5, task: "Plan team-building activity", isDone: true },
  ]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  }

  const deleteTask = (taskToDelete) => {
    setTasks(tasks.filter((task) => task.id !== taskToDelete));

  }
  const doneTask = (id) => {
    setTasks(tasks.map((el =>el.id === id ? {...el, isDone: !el.isDone} : el)))
  }
  return (
    <div className="p-10">
      <Heading />
      <CreateTask addTask={addTask} />
      <TaskList doneTask={doneTask}  deleteTask={deleteTask}  tasks={tasks} />
    </div>
  );
};

export default App;
