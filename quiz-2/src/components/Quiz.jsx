import React, { Component } from "react";
import quizQuestion from "../resources/quizQuestion.json";

export default class Quiz extends Component {
  constructor() {
    super();
    this.state = {
      currIndex: 0,
    };
  }
  increaseCount = () => {
    if (this.state.currIndex == quizQuestion.length - 1) {
      this.setState({
        currIndex: 0,
      });
    } else {
      this.setState({
        currIndex: this.state.currIndex + 1,
      });
    }
  };
  decreaseCount = () => {
    if (this.state.currIndex == 0) {
      this.setState({
        currIndex: quizQuestion.length - 1,
      });
    } else {
      this.setState({
        currIndex: this.state.currIndex - 1,
      });
    }
  };
  render() {
    return (
      <div className="container two">
        <div className="big-box">
          <h1>Question</h1>
          <p className="two-two">{this.state.currIndex+1} of 15</p>
          <h4 className="two-three">
            {quizQuestion[this.state.currIndex].question}
          </h4>
          <div className="options">
            <button className="opt">
              {quizQuestion[this.state.currIndex].optionA}
            </button>
            <button className="opt">
              {quizQuestion[this.state.currIndex].optionB}
            </button>
          </div>
          <div className="options">
            <button className="opt">
              {quizQuestion[this.state.currIndex].optionC}
            </button>
            <button className="opt">
              {quizQuestion[this.state.currIndex].optionD}
            </button>
          </div>
          <div className="btns">
            <button className="blue" onClick={this.decreaseCount} >Previous</button>
            <button className="green" onClick={this.increaseCount}>Next</button>
            <button className="red" onClick={()=>{alert("Are you sure you want to quit?")}}>Quit</button>
          </div>
        </div>
      </div>
    );
  }
}
