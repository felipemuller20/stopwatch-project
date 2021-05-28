import React from 'react';
import Timer from './components/Timer';
import './App.css'
import gatoImg from './images/gato.gif';
import TimerSettings from './components/TimerSettings';
import MoreMinutes from './components/MoreMinutes';
import SecondsAndReduce from './components/SecondsAndReduce';

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
    this.halfSecond = this.halfSecond.bind(this);
    this.lessHalfSecond = this.lessHalfSecond.bind(this);
    this.lessMinute = this.lessMinute.bind(this);
    this.state = {
      minutes: 0,
      seconds: 0,
      working: false,
    };
  }

  componentDidUpdate() {
    const { minutes, seconds, working } = this.state;
    if (minutes > 99 && working === false) {
      this.setState({ minutes: 99})
    }
    if (seconds >= 60 && working === false) {
      this.setState({ seconds: 59})
    }
    if(seconds === -1 && minutes > 0 && working === true) {
      this.setState((previous, _prop) => ({ minutes: previous.minutes - 1, seconds: 59 }))
    }
    if (seconds === -1 && minutes === 0 && working === true) {
      clearInterval(this.myInterval)
      this.setState({ working: false, seconds: 0 });
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

  halfSecond() {
    const { seconds } = this.state;
    if (seconds === 30) {
      this.setState((previous, _props) => ({ minutes: previous.minutes + 1, seconds: 0 }));
    } else if (seconds + 30 <= 60) {
      this.setState((previous, _props) => ({ seconds: previous.seconds + 30 }))
    } else {
      this.setState((previous, _props) => ({ minutes: previous.minutes + 1, seconds: previous.seconds - 30}))
    }
  }

  lessHalfSecond() {
    const { seconds, minutes } = this.state;
    if (seconds === 30) {
      this.setState({ seconds: 0 })
    } else if (seconds - 30 > 0) {
      this.setState((previous, _props) => ({ seconds: previous.seconds - 30 }))
    } else if(seconds - 30 < 0 && minutes === 0) {
      this.setState({ minutes: 0, seconds: 0});
    } else {
      this.setState((previous, _props) => ({ minutes: previous.minutes - 1, seconds: previous.seconds + 30}))
    }
  }

  lessMinute() {
    const { minutes, seconds } = this.state;
    if (minutes > 0) {
      this.setState((previous, _props) => ({ minutes: previous.minutes - 1}));
    } else if (minutes === 0 && seconds > 0) {
      this.setState({ seconds: 0});
    }
  }

  render() {
    const { minutes, seconds } = this.state;
    return (
      <div>
        <header>
          <h1>StopWatch</h1>
          <h2>
            Digite ou pressione os botões
          </h2>
        </header>
        <main>
          <div className='clock-container'>
          <Timer name='minutes' value={minutes} onChange={this.onChange} max='99' /> 
          <span>:</span>
          <Timer name='seconds' value={seconds} onChange={this.onChange} max='60' />
          </div>
          <TimerSettings 
            start={this.startCount}
            stop={this.stopCount}
            reset={this.resetCount}
          />
          <MoreMinutes 
            plusOne={this.plusOne}
            plusFive={this.plusFive}
            plusTen={this.plusTen}
          />
          <SecondsAndReduce 
          plusHalf={this.halfSecond}
          minusHalf={this.lessHalfSecond}
          minusOne={this.lessMinute}
          />
          <div>
            <img src={gatoImg} alt="Gif do relogato" className="cat-img" />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
