import React from "react";

export default function Alert(props) {
    const caseChange = (word) => {
        const lower = word.toLowerCase();
        return lower;
    }
  return (
    props.alert && <div className={`alert alert-${caseChange(props.alert.type)} alert-dismissible fade show`} role="alert">
      <strong>{props.alert.type}:- </strong> {props.alert.msg}
    </div>
  );
}
