import BackIcon from "../img/back-button-icon.png";
import { connect } from "react-redux";
import state from "../redux/state";

function mapStateToProps(state) {
  return {
    state,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    backToMenu: () => dispatch({ type: "BACK_TO_MENU" }),
    backToTourStart: () => dispatch({ type: "BACK_TO_TOUR_START" }),
    enableActiveSlide: () => dispatch({ type: "ENABLE_ACTIVE_SLIDE" }),
  };
}

const BackButton = (props) => {
  const isMenuActive = props.state.menu.active;
  const [_, ...stories] = props.state.slides;
  const isStoryActive = stories.find((item) => item.active === true);

  const backToStart = () => {
    props.backToTourStart();
    props.enableActiveSlide();
  };
  const backToMenu = () => {
    props.backToMenu();
  };

  return (
    <div className={`back-button ${isMenuActive ? "deactive" : ""}`}>
      <div className="back-button-icon">
        <img src={BackIcon} alt="back button" />
      </div>

      <div className="button-wrapper">
        <button
          className={`back-button-text ${isMenuActive ? "deactive" : ""}`}
          onClick={backToMenu}
        >
          Back to menu
        </button>
        <button
          className={`back-button-text ${!isStoryActive ? "deactive" : ""}`}
          onClick={backToStart}
        >
          Go to tour start
        </button>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(BackButton);
