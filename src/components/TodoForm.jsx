import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Swal from "sweetalert2";

function TodoForm({ addTodo }) {
  // Definisikan state "title"
  const [title, setTitle] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(title);
    setShow(false);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Berhasil menambah Todo",
      showConfirmButton: false,
      timer: 1000,
    });
  };

  // Definisikan function "handleChangeTitle"
  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  // Periksa apakah function "handleChangeTitle" berfungsi
  console.log(title);

  return (
    <>
      <button className="btn btn-primary btn-sm px-4 p-2" onClick={handleShow}>
        Add Todo
      </button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title className="h6">Add Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body className="">
          <form
            onSubmit={(event) => {
              handleSubmit(event);
            }}
          >
            <input
              type="text"
              className="form-control mb-3 p-2"
              placeholder="Todo"
              onChange={(event) => {
                handleChangeTitle(event);
              }}
            />

            <input
              type="submit"
              value="Save"
              className="btn-primary btn btn-sm p-2 px-4"
            />
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default TodoForm;
