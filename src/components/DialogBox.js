import { useState } from "react";
import { connect } from "react-redux";
import FunPopupImage from "../img/funfact-bg.png";
import BlackPopupImage from "../img/black-popup-bg.png";
import { MdClose } from "react-icons/md";

function mapStateToProps(state) {
  return {
    state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    closePopup: () => dispatch({ type: "CLOSE_POPUP" }),
  };
}
const DialogBox = (props) => {
  const popup = props.state.popup;
  const closePopup = () => {
    props.closePopup();
  };

  if (popup.active) {
    return (
      <div className="dialog-box-outer" onClick={closePopup}>
        <div className="dialog-box">
          <MdClose
            className={`dialog-close-icon ${
              popup.type === "black" ? "dark" : ""
            }`}
            onClick={closePopup}
          />

          {popup.type === "fun" ? (
            <img
              className="dialog-bg"
              src={FunPopupImage}
              alt="Fun fact popup"
            />
          ) : (
            <img
              className="dialog-bg"
              src={BlackPopupImage}
              alt="Fun fact popup"
            />
          )}

          <div
            className={`dialog-content ${popup.type === "black" ? "dark" : ""}`}
          >
            {popup.description}
          </div>
        </div>
      </div>
    );
  } else {
    return "";
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(DialogBox);
