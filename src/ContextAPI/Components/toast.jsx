import { createContext, useContext, useState } from 'react';
import { Col, Row, Toast } from 'react-bootstrap';
import { HiCheckCircle } from 'react-icons/hi2';

// Step 1
const ToastContext = createContext();

// Step 2
export const useToast = () => {
  return useContext(ToastContext);
};

// Step 3
export const ToastProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  const [customMsg, set_customMsg] = useState('');
  const [toastType, setType] = useState('info');
  const [autohide, setAutohide] = useState('true');

  // toast-success toast-warning toast-error
  async function alert(msg, __toastType, _autohide = 'true') {
    setShow(true);
    set_customMsg(msg);

    if (typeof __toastType != 'undefined' && __toastType != null)
      setType(
        __toastType.toString() === 'true'
          ? 'success'
          : __toastType.toString() === 'false'
          ? 'error'
          : __toastType
      );
    if (typeof _autohide != 'undefined' && _autohide != null)
      setAutohide(
        _autohide.toString() === 'true' || _autohide === true ? true : false
      );
  }

  async function CloseToast() {
    setShow(false);
  }

  return (
    <ToastContext.Provider
      value={{ show, toastType, alert, CloseToast, customMsg, autohide }}
    >
      {children}
    </ToastContext.Provider>
  );
};

export const ToastBox = () => {
  const { show, toastType, CloseToast, customMsg, autohide } =
    useContext(ToastContext);

  if (show) {
    return (
      <Row>
        <Col xs={12}>
          <Toast
            className={`toast toast-${toastType}`}
            onClose={() => CloseToast()}
            show={show}
            delay={3000}
            autohide={autohide}
          >
            <Toast.Header>
              <HiCheckCircle className="toast-icon me-2" />
              <strong className="me-auto text-capital">{toastType}</strong>
            </Toast.Header>
            <Toast.Body className="text-capital">{customMsg}</Toast.Body>
          </Toast>
        </Col>
      </Row>
    );
  }

  return null;
};
