import React from 'react';
import Clock from './components/Clock';

class App extends React.Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.startCount = this.startCount.bind(this);
    this.stopCount = this.stopCount.bind(this);
    this.plusOne = this.plusOne.bind(this);
    this.plusFive = this.plusFive.bind(this);
    this.plusTen = this.plusTen.bind(this);
    this.resetCount = this.resetCount.bind(this);
    this.state = {
      minutes: 0,
      seconds: 0,
      working: false,
    };
  }


  componentDidMount() {

  }

  componentDidUpdate() {
    const { minutes, seconds, working } = this.state;
    if (minutes > 99 && working === false) {
      this.setState({ minutes: 99})
    }
    if (seconds > 60 && working === false) {
      this.setState({ seconds: 60})
    }
    if(seconds === 0 && minutes > 0 && working === true) {
      this.setState((previous, _prop) => ({ minutes: previous.minutes - 1, seconds: 60 }))
    }
    if (seconds === 0 && minutes === 0 && working === true) {
      clearInterval(this.myInterval)
      this.setState({ working: false });
      alert('FIM DO INTERVALO! #VQV')
    }
  }

  onChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: parseInt(value, 10)});
  }

  startCount() {
    const { working } = this.state;
    if (working === false) {
      this.setState({ working: true });
      this.myInterval = setInterval(() => this.setState((previous, _prop) => ({ seconds: previous.seconds - 1 })), 1000);
    }
  }

  stopCount() {
    this.setState({ working: false });
    clearInterval(this.myInterval);
  }

  plusOne() {
    this.setState((previous, _props) => ({ minutes: previous.minutes + 1 }));
  }

  plusFive() {
    this.setState((previous, _props) => ({ minutes: previous.minutes + 5 }));
  }

  plusTen() {
    this.setState((previous, _props) => ({ minutes: previous.minutes + 10 }));
  }

  resetCount() {
    const { working } = this.state;
    if (working) {
      clearInterval(this.myInterval);
      this.setState({ minutes: 0, seconds: 0, working: false })
    }
    if(!working) this.setState({ minutes: 0, seconds: 0, working: false })
    
  }

  render() {
    const { minutes, seconds } = this.state;
    return (
      <div>
        <header>
          StopWatch
        </header>
        <main>
          <Clock name='minutes' value={minutes} onChange={this.onChange} max='99' /> 
          <span>:</span>
          <Clock name='seconds' value={seconds} onChange={this.onChange} max='60' />
          <div>
          <button type='button' onClick={this.startCount}>START!</button>
          <button type='button' onClick={this.stopCount}>STOP!</button>
          <button type='button' onClick={this.resetCount}>RESET</button>
          </div>
          <div>
            <button type='button' onClick={this.plusOne}>+ 1min</button>
            <button type='button' onClick={this.plusFive}>+ 5min</button>
            <button type='button' onClick={this.plusTen}>+ 10min</button>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
