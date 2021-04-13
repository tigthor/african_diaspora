import { connect } from "react-redux";
import StorySlide from "./StorySlide";
import IntroSlide from "./IntroSlide";
import StopSlide from "./StopSlide";
import TourEnd from "./TourEnd";

function mapStateToProps(state) {
  return {
    state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    enableActiveSlide: () => dispatch({ type: "ENABLE_ACTIVE_SLIDE" }),
  };
}

const Slides = (props) => {
  const slide = props.state.slides.find((slide) => slide.active) || {
    type: "",
  };

  if (slide.type === "init") {
    return "";
  } else if (slide.type == "story") {
    return <StorySlide />;
  } else if (slide.type === "intro") {
    return <IntroSlide />;
  } else if (slide.type === "stop") {
    return <StopSlide />;
  } else {
    return "";
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Slides);
