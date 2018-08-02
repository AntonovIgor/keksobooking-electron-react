import React from 'react';
import Promo from './components/promo';
import Map from './components/map';

export default class Main extends React.Component {
    state = {
      data: [],
      pinPosition: {
        left: 570 + "px",
        top: 375 + "px"
      },
      draggable: false,
      showMap: false
    };

  componentWillMount = () => {
    this.loadData();
  };

  onMouseMove = (evt) => {
    if (this.state.draggable) {
      const pinPosition = {
        left: evt.nativeEvent.offsetX - 32.5 + 'px',
        top: evt.nativeEvent.offsetY - 32.5 + 'px'
      };

      this.setState({pinPosition});
    }
  };

  onMouseDown = (evt) => {
    this.setState({draggable: true});
  };

  onMouseUp = (evt) => {
    this.setState({showMap: true, draggable: false});
  };

  async loadData () {
    const data = await fetch('https://js.dump.academy/kekstagram/data').then((response) => response.json());
    this.setState({data});
  }
  render () {
    return (
      [
        <Promo />,
        <Map onMouseMove={this.onMouseMove}
             onMouseDown={this.onMouseDown}
             onMouseUp={this.onMouseUp}
             showMap={this.state.showMap}
             pinPosition={this.state.pinPosition}
        />
      ]
    );
  }
}
