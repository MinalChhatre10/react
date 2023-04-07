import React, { useState } from "react";
import Alert from "./Alert";

function Alertbox() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <>
      <div>
        {alertVisible && (
          <Alert onClose={() => setAlertVisibility(false)}>
            <strong>Clicked!</strong>
          </Alert>
        )}

        <button
          type="button"
          className="btn btn-dark"
          onClick={() => setAlertVisibility(true)}
        >
          ClickMe
        </button>
      </div>
    </>
  );
}

export default Alertbox;
