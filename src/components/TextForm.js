import React from "react";

function TextForm(props) {
  console.log(props.editTxt);
  return (
    <div className="container">
      <div className="form-group">
        <textarea
          cols="100"
          rows="10"
          value={props.text}
          onChange={props.editTxt.textEdit}
        ></textarea>
      </div>
			<p className="text-right">{props.editTxt.wordCount} Words and {props.editTxt.textCount} Characters. | Reading Time : {props.editTxt.time} Minutes</p>
      <button onClick={props.editTxt.textUpper} className="btn btn-primary">Uppercase</button>

      <button onClick={props.editTxt.textClear} className="btn btn-danger mx-2">
        Clear
      </button>
    </div>
  );
}

export default TextForm;
