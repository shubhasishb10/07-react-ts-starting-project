import React, { useState } from 'react';
import Todos from './components/Todos';
import Todo from './models/todo';
import NewTodo from './components/NewTodo';

function App() {

  const [todos, setTodos] = useState<Todo[]>([])

  // const todos = [
  //   new Todo("Learn ReactJS"),
  //   new Todo("Learn TypeScript"),
  // ]

  const addTodoHandler = (text: string) => {
    const newTodo = new Todo(text);
    setTodos(prev => {
      return [
        ...prev,
        newTodo
      ]
    })
  }

  const removeTodoHandler = (id: string) => {
    setTodos(prev => {
      return prev.filter(p => p.id !== id);
    })
  }

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onRemoveTodo={removeTodoHandler} />
    </div>
  );
}

export default App;
