import React from "react";
import TourStartImage from "../img/tour-start.png";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    activateSlides: () => dispatch({ type: "ACTIVATE_SLIDES" }),
    enableActiveSlide: () => dispatch({ type: "ENABLE_ACTIVE_SLIDE" }),
  };
}

const TourStart = (props) => {
  const [tour] = props.state.tourstart.filter((tour) => tour.active === true);

  const activateSlides = () => {
    props.activateSlides();
    props.enableActiveSlide();
  };

  if (tour) {
    return (
      <div className="ad-tour-start">
        <div className="ad-tour-img-wrap">
          <img src={TourStartImage} alt="tour start" />
        </div>
        <div className="ad-tour-start-content">
          <h1 className="tour-start-title">{tour.title}</h1>
          {tour.description}
          <button className="tour-start-btn" onClick={activateSlides}>
            Start Tour
          </button>
        </div>
      </div>
    );
  } else {
    return "";
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TourStart);
