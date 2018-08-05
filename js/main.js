import React from 'react';
import Promo from './components/promo';
import Map from './components/map';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      pinPosition: {
        left: 570,
        top: 375
      },
      draggable: false,
      showMap: false
    };
  }

  componentWillMount() {
    this.loadData();
  }

  onMouseMove(evt) {
    if (this.state.draggable) {
      evt.preventDefault();
      const shift = {
        x: this.state.pinPosition.left - evt.nativeEvent.clientX,
        y: this.state.pinPosition.top - evt.nativeEvent.clientY
      };

      const pinPosition = {
        left: this.state.pinPosition.left - shift.x - 32.5,
        top: this.state.pinPosition.top - shift.y - 32.5
      };

      this.setState({pinPosition});
    }
  }

  onMouseDown(evt) {
    evt.preventDefault();
    this.setState({draggable: true});

    const pinPosition = {
      left: evt.nativeEvent.clientX - 32.5,
      top: evt.nativeEvent.clientY - 32.5
    }

    this.setState({pinPosition});
  }

  onMouseUp(evt) {
    this.setState({showMap: true, draggable: false});
  }

  async loadData () {
    const data = await fetch('https://js.dump.academy/kekstagram/data').then((response) => response.json());
    this.setState({data});
  }
  render () {
    return (
      [
        <Promo />,
        <Map onMouseMove={this.onMouseMove.bind(this)}
             onMouseDown={this.onMouseDown.bind(this)}
             onMouseUp={this.onMouseUp.bind(this)}
             showMap={this.state.showMap}
             pinPosition={this.state.pinPosition}
        />
      ]
    );
  }
}
