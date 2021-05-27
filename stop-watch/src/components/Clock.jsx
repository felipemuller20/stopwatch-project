import React from 'react';

class Clock extends React.Component {
  constructor() {
    super();

  }
  render() {
    const { name, value, onChange, max } = this.props;
    return (
      <div>
        <input type='number' name={name} value={value} onChange={onChange} max={max}/>
      </div>
    );
  }
}

export default Clock;
