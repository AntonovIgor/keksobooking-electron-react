import React from 'react';
import SVGInline from "react-svg-inline"
import cn from 'classnames';
import Filters from './filters';

const Map = (props) => {
  const mapClasses = cn({
    'map': true,
    'map--faded': !props.showMap
  });

  return (
    <section className={mapClasses} onMouseMove={props.onMouseMove}>
      <div className="map__pins">
        <div className="map__overlay">
          <h2 className="map__title">И снова Токио!</h2>
        </div>

        <button className="map__pin map__pin--main" style={{left: props.pinPosition.left, top: props.pinPosition.top}}
                onMouseDown={props.onMouseDown}
                onMouseUp={props.onMouseUp}
        >
          <img src="img/muffin-red.svg" width="40" height="44" draggable="false" alt="Метка объявления" />
          <SVGInline svg={`<svg viewBox="0 0 70 70" width="156" height="156" aria-label="Метка для поиска жилья">
            <defs>
              <path d="M35,35m-23,0a23,23 0 1,1 46,0a23,23 0 1,1 -46,0" id="tophalf"/>
            </defs>
            <ellipse cx="35" cy="35" rx="35" ry="35" fill="rgba(255, 86, 53, 0.7)"/>
            <text>
              <textPath xlink:href="#tophalf" startOffset="0">Поставь меня куда-нибудь</textPath>
            </text>
          </svg>`}/>

        </button>
      </div>
      <Filters/>
    </section>
  );
};

export default Map;
