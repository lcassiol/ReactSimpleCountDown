import React, { Component } from 'react';
import './App.css';
import Youtube from './Youtube';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      showVideo : false,
      start: false

    }
  }

  componentDidMount() {
    setInterval(() => this.countDown(), 1000);
  }

  componentWillUnmount() {
   this.props.onRef(null)
 }

  leading0(num) {
    if(num < 1)
      return 0;

    num = num < 10 ? '0' + num : num;
    return num;
  }

  initialize(inputNumber) {
    this.setState({counter : inputNumber, showVideo : false, total : inputNumber, start: true});
  }

  countDown(newNumber){
    if(this.state.start){
      if(this.state.counter == 0 && !this.state.showVideo){
        this.setState({showVideo : true});
      }else{
        this.setState({counter : this.state.counter -1});
      }
    }
  }

  render() {
    return (
      <div>
        {
          this.state.showVideo ?  <Youtube video="8XpVIuUgABo" autoplay="1" rel="0" modest="1" />
            : <div className="Clock-days">{this.leading0(this.state.counter)}</div>
        }
      </div>
    )
  }
}

export default Clock;
