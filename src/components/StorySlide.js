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
    triggerSlide: (mode) => dispatch({ type: "CHANGE_SLIDE", payload: mode }),
  };
}

const StorySlide = (props) => {
  const activeStory = props.state.slides.find((slide) => slide.active);

  const triggerSlide = (mode) => {
    props.triggerSlide(mode);
  };

  if (activeStory && activeStory.type === "story") {
    let storyName = activeStory.name;
    let currentStories = props.state.slides.filter(
      (story) => story.name === storyName
    );
    let storyLength = currentStories.length;
    let currentPage = currentStories.indexOf(activeStory) + 1;

    return (
      <div className="story-slide">
        <img src={activeStory.image} />

        <div className="story-desc-wrap">{activeStory.description}</div>

        <div className="slide-btn-wrap">
          <div
            className={`slide-btn-prev ${currentPage <= 1 ? "inactive" : ""}`}
            onClick={() => triggerSlide("prev")}
          >
            <MdPlayArrow />
            Previous
          </div>

          <div className="slide-pagination">
            {currentPage} of {storyLength}
          </div>

          <div className="slide-btn-next" onClick={() => triggerSlide("next")}>
            Next
            <MdPlayArrow />
          </div>
        </div>
      </div>
    );
  } else {
    return "";
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(StorySlide);
