import * as React from 'react';
import SVGInline from "react-svg-inline"
import cn from 'classnames';

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

      <div className="map__filters-container">
        <form action="#" className="map__filters" autoComplete="off">
          <select name="housing-type" id="housing-type" className="map__filter">
            <option value="any" selected>Любой тип жилья</option>
            <option value="palace">Дворец</option>
            <option value="flat">Квартира</option>
            <option value="house">Дом</option>
            <option value="bungalo">Бунгало</option>
          </select>

          <select name="housing-price" id="housing-price" className="map__filter">
            <option value="any" selected>Любая</option>
            <option value="middle">10000 - 50000&#x20bd;</option>
            <option value="low">до 10000&#x20bd;</option>
            <option value="high">от 50000&#x20bd;</option>
          </select>

          <select name="housing-rooms" id="housing-rooms" className="map__filter">
            <option value="any" selected>Любое число комнат</option>
            <option value="1">Одна комната</option>
            <option value="2">Две комнаты</option>
            <option value="3">Три комнаты</option>
          </select>

          <select name="housing-guests" id="housing-guests" className="map__filter">
            <option value="any" selected>Любое число гостей</option>
            <option value="2">Два гостя</option>
            <option value="1">Один гость</option>
            <option value="0">Не для гостей</option>
          </select>

          <fieldset id="housing-features" className="map__features">
            <input type="checkbox" name="features" value="wifi" id="filter-wifi"
            className="map__checkbox visually-hidden" />
            <label className="map__feature map__feature--wifi" htmlFor="filter-wifi">Wi-Fi</label>

            <input type="checkbox" name="features" value="dishwasher" id="filter-dishwasher"
            className="map__checkbox visually-hidden" />
            <label className="map__feature map__feature--dishwasher" htmlFor="filter-dishwasher">Посудомоечная
             машина</label>

            <input type="checkbox" name="features" value="parking" id="filter-parking"
            className="map__checkbox visually-hidden" />
            <label className="map__feature map__feature--parking" htmlFor="filter-parking">Парковка</label>

            <input type="checkbox" name="features" value="washer" id="filter-washer"
            className="map__checkbox visually-hidden" />
            <label className="map__feature map__feature--washer" htmlFor="filter-washer">Стиральная
            машина</label>

            <input type="checkbox" name="features" value="elevator" id="filter-elevator"
            className="map__checkbox visually-hidden" />
            <label className="map__feature map__feature--elevator" htmlFor="filter-elevator">Лифт</label>

            <input type="checkbox" name="features" value="conditioner" id="filter-conditioner"
            className="map__checkbox visually-hidden" />
            <label className="map__feature map__feature--conditioner"
            htmlFor="filter-conditioner">Кондиционер</label>
          </fieldset>
        </form>
      </div>
    </section>
  );
};

export default Map;
