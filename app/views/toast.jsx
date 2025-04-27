import { useState } from "react";
import Toast from "react-bootstrap/Toast";
import { ToastContainer } from "react-bootstrap";
function MessageToast({ header, children }) {
  const [show, setShow] = useState(true);

  return (
    <ToastContainer position="top-end" className="p-3">
      <Toast
        onClose={() => setShow(false)}
        show={show}
        delay={5000}
        autohide
        className="bg-white">
        <Toast.Header className="bg-secondary text-white">
          <strong className="me-auto">{header}</strong>
        </Toast.Header>
        <Toast.Body>{children}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

export default MessageToast;
