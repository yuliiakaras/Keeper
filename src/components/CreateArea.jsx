import React, {useState} from "react";

function CreateArea(props) {


  return (
    <div>
      <form type="submit">
        <input onChange={props.handleChange} name="title" placeholder="Title" />
        <textarea onChange={props.handleChange} name="content" placeholder="Take a note..." rows="3" />
        <button onClick={props.addItem}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
