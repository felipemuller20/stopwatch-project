import React from 'react';
import Clock from './components/Clock';

class App extends React.Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.state = {
      hour: '00',
      minutes: '00',
      seconds: '00',
    };
  }

  componentDidMount() {
    // setInterval(() => console.log(this.state.seconds), 1000);
  }

  onChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value});
  }

  render() {
    const { hour, minutes, seconds } = this.state;
    return (
      <div>
        <header>
          StopWatch
        </header>
        <main>
          <Clock name='hour' value={hour} onChange={this.onChange} max='60'/> 
          :
          <Clock name='minutes' value={minutes} onChange={this.onChange} /> 
          :
          <Clock name='seconds' value={seconds} onChange={this.onChange} />
        </main>
      </div>
    );
  }
}

export default App;
