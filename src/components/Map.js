import React, { useRef, useEffect } from "react";
import { connect } from "react-redux";
import ScrollContainer from "react-indiana-drag-scroll";
import WorldMap from "../img/world-map.png";
import MapSurface from "./MapSurface";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

// import StartBtnMap from "./StartBtnMap";

function mapStateToProps(state) {
  return {
    state,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

const Map = (props) => {
  const map = props.state.map;
  const container = useRef(null);
  const dimension = props.state.map.dimension;
  const isSlideActive = props.state.mapbutton.active;

  useEffect(() => {
    if (!isSlideActive) {
      container.current.container.current.scrollLeft = 0;
      container.current.container.current.scrollTop = 0;
    }
  });

  const zoomState = {
    transform: `scale(${map.zoomLevel}) translate(${map.position.x}px, ${map.position.y}px)`,
  };

  return (
    <div className="ad-map-wrapper">
      <div className="ad-map-img-wrapper">
        <ScrollContainer
          className="map-scroll-container"
          hideScrollbars={true}
          vertical={true}
          horizontal={true}
          ignoreElements={map.freezed ? ".ad-map-img" : ""}
          ref={container}
        >
          <div
            className={`
              ${map.isScrolling ? `ad-map-img` : `ad-map-img scroll-active`}
              ${map.blinking ? "blinking" : ""}
            `}
            style={{ ...zoomState, width: dimension.x, height: dimension.y }}
          >
            <img
              src={WorldMap}
              style={{ filter: `blur(${map.blurLevel}px)` }}
              id="ad-map-main-img"
              alt="map"
            />
            <MapSurface />
          </div>
        </ScrollContainer>
      </div>
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Map);
