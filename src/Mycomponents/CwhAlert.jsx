import React from "react";

function CwhAlert(props) {
  // const capitalize = (word) => {
  //   word = word.toLowerCase();
  //   const lower = word;
  //   return lower.charAt(0).toUpperCase() + lower.slice(1);
  // };
  return (
    <>
      {
        <div
          className={`alert alert-${props.Alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{props.Alert.type}</strong>
          {props.Alert.msg}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      }
    </>
  );
}

export default CwhAlert;
