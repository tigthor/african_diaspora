import React, { Component } from "react";
import Rodal from "rodal";

const FunfactPopup = (props) => {
  const closeModal = () => {};

  return (
    <Rodal visible={props.visible} onClose={closeModal}>
      <div className="funfact-popup-inner">{props.funfact}</div>
    </Rodal>
  );
};
export default FunfactPopup;
