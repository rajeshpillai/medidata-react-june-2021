import React, {useState, useEffect} from 'react';


const defaultTodos = [
  { id: 1, text: 'Use Redux', complete: true },
  { id: 2, text: 'Write a Redux lib', complete: false },
]

export default function CustomHookStorage() {
  const [todos, setTodos] = useState(defaultTodos);

  // Run this effect only one time
  useEffect(() => {
    const todosString = localStorage.getItem('medi-todos-app') || [];
    setTodos(JSON.parse(todosString));
  }, []);

  const addTodo = () => {
    let todoTitle = window.prompt("Enter new todo: ");

    const newTodo = { id: todos.length + 1, text: todoTitle, complete: false };
    setTodos(todos.concat(newTodo));  
  }


  const saveTodo = () =>{
    const todosJSON = JSON.stringify(todos);
    localStorage.setItem('medi-todos-app', todosJSON);
    alert("Todos saved successfuly.");
  }

  return (
    <div>
      <h1>Custom Hook Storage</h1>
      <button onClick={addTodo}>Add Todo</button>
      <button onClick={saveTodo}>Save to Local Storage</button>
      {
        todos.map((todo, index) =>  
          <div key={index}>
            {todo.text}
          </div>
        )
      }
    </div>
  );
}