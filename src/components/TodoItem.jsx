import React from "react";

const TodoItem = ({ todo, toggleCompleted }) => {
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
        <div className="card-body d-flex gap-2">
          <input
            type="checkbox"
            name=""
            id=""
            onChange={() => toggleCompleted(todo.id)}
          />
          <p className={todoListStyle()}>{todo.title}</p>
        </div>
      </div>
    </>
  );
};

export default TodoItem;
