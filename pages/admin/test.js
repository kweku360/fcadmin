import React, { Component } from "react";
import Layout from "../../src/components/layout/master";

function Welcome(props) {
    return <h1>Hello, {props.Router}</h1>;
  }
  class App extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
        this.btnClicked = this.btnClicked.bind(this);
      }
      componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }
    
      componentWillUnmount() {
        clearInterval(this.timerID);
      }
      btnClicked(){
          clearInterval(this.timerID);
      }
      tick() {
        this.setState({
          date: new Date()
        });
      }
    render() {
      return (
     <div>
            <h1>{this.props.router.query.title}</h1>
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2><br/>
            <button onClick={this.btnClicked} >Reset</button>
          </div>)
    }
  }
  const TestWithLayout = Layout(App);
  export default  TestWithLayout;