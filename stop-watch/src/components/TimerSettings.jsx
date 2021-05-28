import React from 'react';

class TimerSettings extends React.Component {
  render() {
    const { start, stop, reset } = this.props
    return (
      <div className='main-buttons-container'>
        <button type='button' onClick={start} id='start'>COMEÇAR!</button>
        <button type='button' onClick={stop} id='stop'>PARAR!!</button>
        <button type='button' onClick={reset} id='reset'>RESETAR</button>
      </div>
    );
  }
}

export default TimerSettings;
