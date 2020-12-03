import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import SingleTodo from "./components/SingleTodo";
import TodoForm from "./components/TodoForm";
import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    { text: "read a book", is_completed: false },
    { text: "take a nap", is_completed: false },
    { text: "play basketball", is_completed: false },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  console.log(todos);

  // const removeTodo = (index) => {
  //   const newTodos = [...todos];
  //   newTodos.splice(index, 1);
  //   setTodos(newTodos);
  // };
  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].is_completed = true;
    setTodos(newTodos);
  };

  const [users, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  console.log(users);

  //fetching data from an API
  const url = "https://randomuser.me/api/";

  const fetchData = async () => {
    setLoading(true);
    await fetch(url)
      .then((response) => response.json())
      .then((data) => setUser(data));
  };

  React.useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="App">
      <h1>My TODO</h1>
      <Header count={todos.length} />
      {todos.map((todo, index) => (
        <SingleTodo
          todo={todo}
          key={index}
          removeTodo={removeTodo}
          index={index}
          completeTodo={completeTodo}
        />
      ))}
      <TodoForm addTodo={addTodo} />

      {users &&
        users.results.map((user, index) => (
          <div key={index}>
            <p>First Name: {user.name.first}</p>
            <p>Last Name: {user.name.last}</p>
            <img src={user.picture.large} />
          </div>
        ))}
    </div>
  );
}

export default App;
