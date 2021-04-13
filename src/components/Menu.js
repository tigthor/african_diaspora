import React from "react";
import MenuBg from "../img/menu-bg.png";
import FunPopupBg from "../img/funfact-bg.png";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    activateTourStart: (name) =>
      dispatch({ type: "ACTIVATE_TOUR_START", payload: name }),
  };
}

const Menu = (props) => {
  const active = props.state.menu.active;
  const items = props.state.menu.items;

  const activateTourStart = (name) => {
    props.activateTourStart(name);
  };

  const renderItems = () => {
    return items.map((item, index) => {
      return (
        <li key={index + 1}>
          <button
            className={item.available ? "available" : ""}
            onClick={() => activateTourStart(item.target)}
          >
            <span className="ad-tour-name">{item.name}</span>
            {item.available ? (
              ""
            ) : (
              <span className="ad-tour-status">(Not yet available)</span>
            )}
          </button>
        </li>
      );
    });
  };

  if (active) {
    return (
      <div className="ad-menu">
        <img className="menu-bg" src={FunPopupBg} alt="menu bg" />
        <div className="ad-menu-wrapper">
          <h4 className="menu-title">Welcome to African Diaspora Tour</h4>
          <h5 className="menu-subtitle">
            Select an available tour from below options
          </h5>
          <ul>{renderItems()}</ul>
        </div>
      </div>
    );
  } else {
    return "";
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
