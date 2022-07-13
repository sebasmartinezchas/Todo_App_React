import React from "react";
import "./CreateTodoButton.css";

const CreateTodoButton = (props) => {
  const onCLickButton = () => {
    props.setOpenModal((prevState) => !prevState);
  };

  return (
    <button className="CreateTodoButton" onClick={onCLickButton}>
      +
    </button>
  );
};

export { CreateTodoButton };
