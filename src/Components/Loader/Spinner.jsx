import React from 'react'
import {BeatLoader} from "react-spinners"
const Spinner = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "50vh",
      }}
    >
      <BeatLoader color="#febd69" />;
    </div>
  );
}

export default Spinner
