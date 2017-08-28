import React, { Component } from 'react';

export default class ChildComponent extends Component {
  render() {
    return (
      <button type="submit" onClick={this.props.onClick} className="btn btn-primary">Submit</button>
    );
  }
}
