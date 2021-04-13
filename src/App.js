import Map from "./components/Map";
import Menu from "./components/Menu";
import { connect } from "react-redux";
import TourStart from "./components/TourStart";
import Slides from "./components/Slides";
import DialogBox from "./components/DialogBox";
import BackButton from "./components/BackButton";
import TourEnd from "./components/TourEnd";

function mapStateToProps(state) {
  return {
    state,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    activateSlides: () => dispatch({ type: "ACTIVATE_SLIDES" }),
  };
}

function App(props) {
  const handleStart = () => {
    props.activateSlides();
  };

  return (
    <div className="ad-main">
      <Menu />
      <TourStart />
      <Map />
      <Slides />
      <DialogBox />
      <BackButton />
      <TourEnd />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
