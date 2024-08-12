import React from 'react'

function AddTaskform({handleSubmit,handleInputChange,newTask}) {
  return (
    <form onSubmit={handleSubmit} className="form">
    <label htmlFor="newItem"> Add to the todo list </label>
    <input
      type="text"
      id="newItem"
      value={newTask}
      onChange={handleInputChange}
    />
    <button type="submit">Add Item</button>
  </form>
  )
}

export default AddTaskform