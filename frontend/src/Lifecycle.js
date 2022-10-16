import React, { Component } from "react";

export class Lifecycle extends Component {
  constructor() {
    super();
    this.state = {};
    console.log("constructor");
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps");
    return {
      isChanged: false
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpdate");
    return 'snapshot';
  }

  componentDidUpdate(preProps, preState, snapshot) {
    console.log("componentDidUpdate");
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    console.log("render");
    console.log(this.state)
    return (
      <div style={{border: "1px solid black"}}>
        <h1>Lifecycle</h1>
        <button onClick={() => this.setState({})}>setState</button>
        <button onClick={()=>this.forceUpdate()}>forceUpdate</button>
      </div>
    );
  }
}

export default Lifecycle;
