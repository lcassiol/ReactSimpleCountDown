import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap';
import Clock from './Clock';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: '0',
      newNumber: ''
    }
  }

  changeCountdown() {
    this.refs.child.initialize(this.state.newNumber);
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">This project is a simple countdown - lcassiol</h1>
        </header>
        <Form inline>
          <FormControl
            className="Countdown-input"
            placeholder='new number'
            onChange={event => this.setState({newNumber: event.target.value})}
          />
          <Button onClick={() => this.changeCountdown()}>
            Submit
          </Button>
        </Form>
        <Clock
          number={this.state.number}
          ref="child"
        />
      </div>
    );
  }
}

export default App;
