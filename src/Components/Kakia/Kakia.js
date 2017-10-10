import React from "react";

const Kakia2 = props => {
  console.log("from kakia.js", props.kakia);
  return (
    <div key={props.kakia.kakia_index}>
      <p>Hello {props.kakia.kakia_name}, You are from {props.kakia.kakia_school}.</p>
      <button>Edit Kakia</button>
      <button>Delete Kakia</button>
    </div>
  );
};

export default Kakia2;
