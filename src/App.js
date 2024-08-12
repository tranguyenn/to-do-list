import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm";
function App() {
  const [tasks, setTasks] = useState([
    { id: "task_1", title: "Demo Learn Js", status: 1 },
    { id: "task_2", title: "Demo Learn Js2", status: 0 },
  ]);
  const [showIncomplete, setShowIncomplete] = useState(true);
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask) {
      const task = {
        id: Date.now(),
        title: newTask,
        status: 0,
      };
      setTasks([...tasks, task]);
      setNewTask("");
    }
  };

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleRemoveTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const setTaskStatus = (taskId, status) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          status ? status=1 :status=0;
          return { ...task,status };
        }
        return task;
      })
    );
  };
  return (
    <div className="container">
      <Header title="To do list" subTitle="Let punch your deadline" />
      <TaskList
        tasks={tasks}
        showIncomplete={showIncomplete}
        setTaskStatus={setTaskStatus}
        handleRemoveTask={handleRemoveTask}
        setShowIncomplete={setShowIncomplete}
      />

     <AddTaskForm
     handleSubmit={handleSubmit} 
     handleInputChange={handleInputChange}
     newTask={newTask}/>
    
    </div>
  );
}

export default App;
