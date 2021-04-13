import React, { useEffect } from "react";
import { connect } from "react-redux";
import FunfactIcon from "../img/funfact-icon.png";
import MapButton from "./MapButton";
import funfactSound from "../sounds/funfact.mp3";
import blackPopupSound from "../sounds/black-popup.mp3";
import StartFlag from "../img/start-flag.png";
import FinishFlag from "../img/finish-flag.png";

function mapStateToProps(state) {
  return {
    state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    triggerSlide: (mode) => dispatch({ type: "CHANGE_SLIDE", payload: mode }),
    triggerFunPopup: (message) =>
      dispatch({ type: "TRIGGER_FUN_POPUP", payload: message }),
    blackPopupTrigger: (message) =>
      dispatch({ type: "TRIGGER_BLACK_POPUP", payload: message }),
  };
}

const MapSurface = (props) => {
  const [tour] = props.state.tourstart.filter((tour) => tour.active === true);
  // console.log(tour);
  const locations = props.state.locations;
  const popups = props.state.popups;
  const funfacts = props.state.funfacts;
  const map = props.state.map;

  // useEffect(() => {
  //   console.log(document);
  // });

  const triggerEuropeHover = (e) => {
    let customEurope = document.getElementsByClassName("custom-europe");
    customEurope[0].classList.add("hover");
    if (e.type === "mouseleave") {
      customEurope[0].classList.remove("hover");
    }
  };

  const renderLocations = () => {
    return locations.map((location, index) => {
      // Creating some inline styles to change dynamically according to state
      let position = {
        left: location.coords.x,
        top: location.coords.y,
      };

      let audio = new Audio(location.sound);
      function playSound() {
        if (!location.clickable) {
          audio.play();
        }
      }
      function stopSound() {
        audio.pause();
        audio.currentTime = 0;
      }

      function triggerSlide(mode) {
        if (location.clickable) {
          props.triggerSlide(mode);
        }
      }

      if (location.active) {
        return (
          <div
            key={index + 1}
            className={`map-location ${location.active ? "active" : ""}  ${
              location.blinking ? "blinking" : ""
            } ${location.name === "uk" ? "custom-uk" : ""} ${
              location.name === "europe" ? "custom-europe" : ""
            } ${location.name === "canada" ? "custom-canada" : ""}`}
            style={position}
            onMouseOver={(e) => {
              playSound();
              if (location.name === "uk") {
                triggerEuropeHover(e);
              }
            }}
            onMouseLeave={(e) => {
              stopSound();
              if (location.name === "uk") {
                triggerEuropeHover(e);
              }
            }}
            onClick={() => triggerSlide("next")}
          >
            <img src={location.image} alt={location.name} />
          </div>
        );
      } else {
        return;
      }
    });
  };

  const renderPopups = () => {
    return popups.map((popup, index) => {
      // Creating some inline styles to change dynamically according to state
      let position = {
        left: popup.coords.x,
        top: popup.coords.y,
      };

      const blackPopupTrigger = (message) => {
        props.blackPopupTrigger(message);
      };

      if (popup.active) {
        const playBlackPopupSound = () => {
          let audio = new Audio(blackPopupSound);
          audio.play();
        };

        return (
          <div
            className={`map-popup ${popup.isVisible ? "active" : ""}`}
            style={position}
            key={index + 1}
            onClick={() => {
              blackPopupTrigger(popup.description);
              playBlackPopupSound();
            }}
          >
            <div className="popup-ripple"></div>
            <div className="popup-pointer"></div>
          </div>
        );
      } else {
        return;
      }
    });
  };

  const renderFunfacts = () => {
    // Creating some inline styles to change dynamically according to state
    return funfacts.map((fact, index) => {
      const position = {
        left: fact.coords.x,
        top: fact.coords.y,
      };

      const triggerFunPopup = (message) => {
        props.triggerFunPopup(message);
      };

      if (fact.active) {
        const playFunSound = () => {
          let audio = new Audio(funfactSound);
          audio.play();
        };

        return (
          <div
            className="map-funfact"
            style={position}
            key={index + 1}
            onClick={() => {
              playFunSound();
              triggerFunPopup(fact.description);
            }}
          >
            <img src={FunfactIcon} alt="funfact" />
          </div>
        );
      } else {
        return;
      }
    });
  };

  const renderFlag = () => {
    const flagType = props.state.flag.type;
    const flagActive = props.state.flag.active;
    const position = {
      top: props.state.flag.position.y,
      left: props.state.flag.position.x,
    };

    if (flagActive) {
      return (
        <div className="flag-image" style={position}>
          {flagType === "start" ? (
            <img src={StartFlag} alt="start-flag" style={{ width: 40 }} />
          ) : (
            <img src={FinishFlag} alt="finisg flag" style={{ width: 40 }} />
          )}
        </div>
      );
    } else {
      return "";
    }
  };

  const renderTriangle = () => {
    const triangleActive = props.state.triangle.active;
    if (triangleActive) {
      return (
        <div
          className="triangle-image"
          style={{
            top: props.state.triangle.position.y,
            left: props.state.triangle.position.x,
          }}
        >
          <img src={props.state.triangle.image} alt="Triangular trade" />
        </div>
      );
    } else {
      return "";
    }
  };

  // Creating some inline styles to change dynamically according to state
  const locationBg = {
    width: `${map.dimension.x}px`,
    height: `${map.dimension.y}px`,
    backgroundColor: `rgba(0,0,0, ${map.darkness})`,
  };

  return (
    <div className="ad-map-surface" style={locationBg}>
      {renderLocations()}
      {renderPopups()}
      {renderFunfacts()}
      {renderFlag()}
      {renderTriangle()}
      <MapButton />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MapSurface);
