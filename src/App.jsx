import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Finish Progate React Course",
      completed: false,
    },
    {
      id: 2,
      title: "Have lunch with Guru Domba",
      completed: false,
    },
    {
      id: 3,
      title: "Study React with Ninja Ken",
      completed: false,
    },
  ]);

  console.log(todos);

  return (
    <>
      <div className="container mt-5">
        <h4>My Todo List</h4>

        {todos.map((todo) => {
          return <p key={todo.id}>{todo.title}</p>;
        })}
      </div>
    </>
  );
}

export default App;
