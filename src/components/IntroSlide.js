import React, { Component } from "react";
import { MdPlayArrow } from "react-icons/md";
import { connect } from "react-redux";
function mapStateToProps(state) {
  return {
    state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    triggerNextSlide: (mode) =>
      dispatch({ type: "CHANGE_SLIDE", payload: mode }),
  };
}

const IntroSlide = (props) => {
  const activeIntro = props.state.slides.find((slide) => slide.active);

  const triggerNextSlide = (mode) => {
    props.triggerNextSlide(mode);
  };

  if (activeIntro && activeIntro.type === "intro") {
    return (
      <div className="story-intro">
        {activeIntro.description}
        <div
          className="intro-icon-wrap"
          onClick={() => triggerNextSlide("next")}
        >
          Go <MdPlayArrow />
        </div>
      </div>
    );
  } else {
    return "";
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(IntroSlide);
