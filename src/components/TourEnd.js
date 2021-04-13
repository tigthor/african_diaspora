import TourEndBg from "../img/tour-end-bg.png";
import FinishFlag from "../img/finish-flag.png";
import { connect } from "react-redux";
function mapStateToProps(state) {
  return {
    state,
  };
}

const TourEnd = (props) => {
  const active = props.state.tourEnd.active;

  if (active) {
    return (
      <div className="tour-end">
        <img className="tour-end-bg" src={TourEndBg} />

        <div className="tour-end-content">
          <img src={FinishFlag} alt="tour finish flag" />
          <h4 className="tour-end-title">
            Congratulation, you have finished the tour
          </h4>
          <h5 className="tour-end-subtitle">Please click the below button</h5>
          <a
            href="https://www.reparationhub.com/end-of-tour"
            className="tour-end-button"
          >
            Click this button
          </a>
        </div>
      </div>
    );
  } else {
    return "";
  }
};

export default connect(mapStateToProps)(TourEnd);
