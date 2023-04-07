import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter the text here");
  // change the state - setText("New text");
  const handleUppercase = () => {
    console.log("Uppercase cliked" + text);
    let newWord = text.toUpperCase();
    setText(newWord);
  };
  const handleOnChnage = (event) => {
    console.log("OnChnage");
    setText(event.target.value);
  };
  return (
    <div>
      <h3>{props.heading}</h3>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChnage}
          id="MyBox"
          rows="8"
        ></textarea>
      </div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleUppercase}
      >
        UpperCase
      </button>
    </div>
  );
}
