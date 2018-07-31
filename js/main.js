import * as React from 'react';
import Promo from './components/promo';
import Map from './components/map';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentWillMount() {
    this.loadData();
  }

  async loadData () {
    const data = await fetch('https://js.dump.academy/kekstagram/data').then((response) => response.json());
    this.setState({data});
  }
  render () {
    return (
      [<Promo />,
      <Map />]
    );
  }
}
