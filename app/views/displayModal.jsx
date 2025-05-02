import React from "react";
import Button from "react-bootstrap/cjs/Button.js";
import Modal from "react-bootstrap/cjs/Modal.js";

function DisplayModal({ setShow, onYes }) {
  function onYesClick() {
    setShow(false);
    onYes();
  }

  return (
    <Modal show={true} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>You are about to delete this...</Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Button className="btn-moccasin" onClick={onYesClick}>
          Yes, Delete
        </Button>
        <Button variant="secondary" onClick={() => setShow(false)}>
          No, don't
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DisplayModal;
