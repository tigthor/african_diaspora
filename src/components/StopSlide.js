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

const StopSlide = (props) => {
  const activeStop = props.state.slides.find((slide) => slide.active);

  if (activeStop && activeStop.type === "stop") {
    return (
      <div className="story-slide">
        <div className="stop-title">
          <h1>{activeStop.title}</h1>
        </div>

        <div className="story-desc-wrap">{activeStop.description}</div>
      </div>
    );
  } else {
    return "";
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(StopSlide);
