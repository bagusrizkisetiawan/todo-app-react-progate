import { useState } from "react";
import Todos from "./components/Todos";
import Swal from "sweetalert2";

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

  function toggleCompleted(todoId) {
    const updateTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    setTodos(updateTodos);
  }

  function deleteTodo(todoId) {
    const newTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(newTodos);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Berhasil Terhapus",
      showConfirmButton: false,
      timer: 1000,
    });
  }

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <h4 className="mb-4">My Todo List</h4>

            <Todos
              todos={todos}
              toggleCompleted={toggleCompleted}
              deleteTodo={deleteTodo}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
