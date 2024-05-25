import { createContext, useState } from "react";
import Todos from "./components/Todos";
import Swal from "sweetalert2";
import TodoForm from "./components/TodoForm";

export const TodoContext = createContext();

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Finish Progate React Course",
      completed: false,
    },
    {
      id: 2,
      title: "Have lunch with Bagus Rizki",
      completed: false,
    },
    {
      id: 3,
      title: "Study React with comcom",
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

  const addTodo = (todoTitle) => {
    if (todoTitle === "") {
      return;
    }

    const newTodo = {
      id: todos.length + 1,
      title: todoTitle,
      completed: false,
    };

    const updatedTodos = todos.concat(newTodo);
    setTodos(updatedTodos);
  };

  return (
    <>
      <TodoContext.Provider value={{ toggleCompleted, deleteTodo }}>
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="d-flex mb-4 justify-content-between align-items-center">
                <h4 className="mb-0">My Todo List</h4>
                <TodoForm addTodo={addTodo} />
              </div>

              <Todos
                todos={todos}
                // toggleCompleted={toggleCompleted}
                // deleteTodo={deleteTodo}
              />
            </div>
          </div>
        </div>
      </TodoContext.Provider>
    </>
  );
}

export default App;
