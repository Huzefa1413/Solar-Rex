import { createContext, useContext, useState, useEffect } from "react"


// Step 1
const ConfirmContext = createContext()

// Step 2
export const useConfirm = () => {
  return useContext(ConfirmContext);
}

// Step 3
export const ConfirmProvider = ({ children }) => {
  const [Confirm, set_confirm] = useState(false);
  const [showconfirm, set_showconfirm] = useState(false);
  const [customMsg, set_customMsg] = useState("");
  const [resolveFunction, setResolveFunction] = useState(null);

  async function Ask(msg) {
    set_showconfirm(true);
    if (typeof msg != "undefined" && msg != null && msg != "") set_customMsg(msg)
    return new Promise((resolve) => {
      setResolveFunction(() => resolve);
    });
  }

  async function CloseConfirm(result) {
    set_showconfirm(false);
    if (resolveFunction) {
      resolveFunction(result);
      setResolveFunction(null);
    }
  }

  async function Yes() {
    set_confirm(true);
    CloseConfirm(true);
  }

  async function No() {
    set_confirm(false);
    CloseConfirm(false);
  }

  return (
    <ConfirmContext.Provider value={{ Confirm, showconfirm, Yes, No, Ask, CloseConfirm, customMsg }}>
      {children}
    </ConfirmContext.Provider>
  );
};

export const ConfirmBox = () => {
  const { Yes, No, showconfirm, customMsg } = useContext(ConfirmContext);

  if (showconfirm) {
    return (
      <div className="confirm_alert">
        <div className="card">

          <div className="card_header">
            <h4>Confirmation</h4>
          </div>

          <div className="card_body">
            <p>{customMsg || "Do you want to continue?"}</p>
          </div>

          <div className="card_footer">
            <div className="d-flex jc-end">
              <button className="btn btn-cancel me-2" onClick={() => No()}>No, I don't want</button>
              <button className="btn btn-continue" onClick={() => Yes()}>Yes, Continue</button>
            </div>
          </div>

        </div>
      </div>
    );
  }

  return null;
};