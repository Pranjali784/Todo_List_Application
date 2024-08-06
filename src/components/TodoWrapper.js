// Import necessary modules from React and React Router
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Todo } from './Todo';
import { TodoForm } from './TodoForm';
import { EditTodoForm } from './EditTodoForm';
import { SearchTask } from './SearchTask';
import { v4 as uuidv4 } from 'uuid';

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');

  useEffect(() => {
    // Load initial data from JSON file
    fetch('/path-to-dummy-json/tasks.json')
      .then(response => response.json())
      .then(data => setTodos(data));
  }, []);

  useEffect(() => {
    setSearchParams({ search: searchTerm });
  }, [searchTerm, setSearchParams]);

  const addTodo = (todo) => {
    setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false, lastUpdated: new Date().toISOString() }]);
  };

  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed, lastUpdated: new Date().toISOString() } : todo
      )
    );
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing, lastUpdated: new Date().toISOString() } : todo
      )
    );
  };

  const filteredTodos = todos.filter((todo) =>
    todo.task.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="TodoWrapper">
      <h1>Get Things Done!</h1>
      <SearchTask searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <TodoForm addTodo={addTodo} />
      {filteredTodos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm key={todo.id} editTodo={editTask} task={todo} />
        ) : (
          <Todo
            key={todo.id}
            task={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleComplete={toggleComplete}
          />
        )
      )}
    </div>
  );
};
