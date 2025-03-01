import React, { useRef } from "react";

const UncontrolledInput = () => {
  const inputRef = useRef(); // Creating a reference

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Entered value: ${inputRef.current.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} placeholder="Enter something" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UncontrolledInput;
