import React from "react";
import { connect } from "react-redux";
function mapStateToProps(state) {
  return {
    state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    triggerSlide: (mode) => dispatch({ type: "CHANGE_SLIDE", payload: mode }),
  };
}

const MapButton = (props) => {
  const button = props.state.mapbutton;

  const triggerSlide = (mode) => {
    props.triggerSlide(mode);
  };

  if (button.active) {
    const position = {
      left: button.coords.x,
      top: button.coords.y,
    };
    return (
      <button
        className="map-btn-visible"
        style={position}
        onClick={() => triggerSlide("next")}
      >
        {button.text}
      </button>
    );
  } else {
    return "";
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MapButton);
