import React, { Component } from 'react';
import ChildComponent from './ChildComponent.js';
import DisplayComponent from './DisplayComponent.js';

export default class ParentComponent extends Component {
  constructor(props){
    super(props);

    //state lives here
    this.state = {
      whatToSay: "",
      whatWasSaid: "",
    }

    // bind event handlers
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  handleInput(e) {
    e.preventDefault();
    //set the state on input change
    let whatToSay = e.target.value;
    this.setState({whatToSay: whatToSay});

  }
  handleSubmit(e) {
    e.preventDefault();
    //check console to see if firing
    console.log("fired");
    //set the state for props and for value (prevents output from appearing when typing)
    this.setState({whatToSay: this.state.whatToSay, whatWasSaid: this.state.whatToSay});
    //clear our input by resetting state
    this.setState({whatToSay: ""});


  }
  render() {
    return (
      <div className="form-group">
        <form action="">
          <div>
            <input onChange={this.handleInput} type="email" placeholder="Write something!" className="form-control" />
          </div>
          <ChildComponent onClick={this.handleSubmit}/>
        </form>
        <DisplayComponent sayWhat={this.state.whatWasSaid}/>
      </div>
    );
  }
}
