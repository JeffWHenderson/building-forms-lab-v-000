import React, { Component } from 'react';

class Bands extends Component {
  render(){
    const bands = this.props.store.getState().bands.map(band, index) => {
      return "hello"
    }
    
    return (
      <ul>
        {bands}
      </ul>
    );
  }
};

export default Bands;
