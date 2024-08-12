import React from "react";
import TaskItem from "./TaskItem";

function Tasklist({
  tasks,
  showIncomplete,
  setTaskStatus,
  handleRemoveTask,
  setShowIncomplete,
}) {
  return (
    <>
      <ul className="task-list">
        {tasks
          .filter((task) => (showIncomplete ? task.status !== 1 : true))
          .map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              setTaskStatus={setTaskStatus}
              handleRemoveTask={handleRemoveTask}
            />
          ))}
      </ul>
      <div className="filter-wrapper">
        <label htmlFor="filter" className="filter-label">
          Show incomplete task only
        </label>
        <input
          type="checkbox"
          name=""
          id="filter"
          checked={showIncomplete}
          onChange={(e) => setShowIncomplete(e.target.checked)}
        />
      </div>
    </>
  );
}

export default Tasklist;
