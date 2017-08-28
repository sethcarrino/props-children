import React, { Component } from 'react';

export default class DisplayComponent extends Component {

  render() {
    return (
      <div>
        <div className="card">
          <div className="card-block">
            <h3>State, props, children, function, fun</h3>
            <h5>Message</h5>
            <p>{this.props.sayWhat}</p>
          </div>
        </div>

      </div>
    );
  }
}
