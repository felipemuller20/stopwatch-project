import React from 'react';

class MoreMinutes extends React.Component {
  render() {
    const { plusTen, plusFive, plusOne } = this.props;
    return (
      <div className='minutes-buttons-container'>
        <button onClick={plusOne} type='button'>+ 1min</button>
        <button onClick={plusFive} type='button'>+ 5min</button>
        <button onClick={plusTen} type='button'>+ 10min</button>
      </div>
    );
  }
}

export default MoreMinutes;
