import React from 'react';

class Timer extends React.Component {
  render() {
    const { name, value, onChange, max } = this.props;
    return (
      <div>
        <input type='number' name={name} value={value} onChange={onChange} max={max} min='0' />
      </div>
    );
  }
}

export default Timer;
