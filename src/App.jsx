import { useState } from "react";
import Todos from "./components/todos";

function App() {
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

  return (
    <>
      <div className="container mt-5">
        <h4>My Todo List</h4>

        <Todos todos={todos} />
      </div>
    </>
  );
}

export default App;
