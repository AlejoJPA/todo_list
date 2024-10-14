import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]); // Initializes todos. Empty array indicates that there are not to-do items initially
  const [headingInput, setHeadingInput] = useState(''); // Initialize headingInput. Empty string intended for adding new to-do headers 
  const [listInputs, setListInputs] = useState({});  //Initialize listInputs as an empty object {}. This state will hold the value of input fields for each to-do item.

  //This function (handleAddTodo) gets the heading from the input box with className="heading-input". It is triggered by onClick={handleAddTodo},
  //JS trim() method is used to remove whitespace from both ends of a string.
  /*spread syntax (...) in JavaScript allows you to "spread" elements from an array (e.g., ...todos), object, or iterable into individual elements or properties.*/
  /*The display of the Todo heading is made by the function in div className="todo_main"*/

  const handleAddTodo = () => { 
    if (headingInput.trim() !== '') {
      setTodos([...todos, {heading: headingInput, list: []}]);
      setHeadingInput('');
    }
  };

  const handleDeleteTodo = (index) =>{
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <div className="todo-container">
        <h1 className="title">My Todo List</h1>
        <div className="input-container">
          <input
            type="text"
            className="heading-input"
            placeholder="Enter heading"
            value={headingInput}
            onChange={(e) => {setHeadingInput(e.target.value);}}
          />
          <button className="add-list-button" onClick={handleAddTodo}>Add Heading</button>
        </div>
      </div>

      <div className="todo_main">
        {todos.map((todo, index) => (
          <div key={index} className= "todo-card">
            <div className="heading_todo">
              <h3>{todo.heading}</h3>
              <button className="delete-button-heding" onClick={() => handleDeleteTodo(index)}>Delete Heading</button>
            </div>
          </div>
        ))}
        
      </div>
    </>
  );
};

export default TodoList;
