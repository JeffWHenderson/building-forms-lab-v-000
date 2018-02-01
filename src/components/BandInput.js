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

  handleSubmit(e) {
    e.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_BAND',
      band: this.state.text
    })
    this.setState({
      text: ""
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
