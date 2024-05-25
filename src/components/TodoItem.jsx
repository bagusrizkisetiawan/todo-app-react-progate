import React from "react";

const TodoItem = ({ todo }) => {
  return (
    <>
      <div className="card mb-2">
        <div className="card-body">
          <p className="mb-0">{todo.title}</p>
        </div>
      </div>
    </>
  );
};

export default TodoItem;
