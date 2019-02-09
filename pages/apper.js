import React, { Component } from "react";
import fetch from 'isomorphic-unfetch'
import ReactDOM from "react-dom";

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }
  class App extends Component {
    // static async getInitialProps () {
    //   // eslint-disable-next-line no-undef
    //   const res = await fetch('https://api.github.com/repos/zeit/next.js')
    //   const json = await res.json()
    //   console.log(json)
    //   return { stars: json.stargazers_count }
    // }
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
            <h1>Hello, world!</h1>
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2><br/>
            <button onClick={this.btnClicked} >Reset</button>
          </div>)
    }
  }
//   setInterval(App.render(),1000)
  export default App;