import React, { Component } from 'react';

class BandInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: ""
    }
  }

  handleChange(e) {
    this.setState({
      text: e.target.value
    })
  }
  render() {
    return (
      <div>
        bands component
      </div>
    );
  }
};

export default BandInput;
