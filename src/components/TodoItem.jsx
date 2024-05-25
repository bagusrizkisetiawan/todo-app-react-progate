import React from "react";

const TodoItem = ({ todo, toggleCompleted, deleteTodo }) => {
  function todoListStyle() {
    if (todo.completed) {
      return "text-success mb-0 fw-bold";
    } else {
      return "mb-0";
    }
  }

  return (
    <>
      <div className="card mb-2">
        <div className="card-body d-flex  justify-content-between align-items-center">
          <div className="d-flex gap-2">
            <input
              type="checkbox"
              name=""
              id=""
              onChange={() => toggleCompleted(todo.id)}
            />
            <p className={todoListStyle()}>{todo.title}</p>
          </div>
          <button
            className="btn btn-danger btn-sm align-self-end"
            onClick={() => {
              deleteTodo(todo.id);
            }}
          >
            hapus
          </button>
        </div>
      </div>
    </>
  );
};

export default TodoItem;
