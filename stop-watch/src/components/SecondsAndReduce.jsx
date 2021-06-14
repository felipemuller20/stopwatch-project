import React from 'react';

class SecondsAndReduce extends React.Component {
  render() {
    const { plusHalf, minusHalf, minusOne } = this.props;
    return (
      <div className='seconds-buttons-container'>
        <button onClick={plusHalf} type='button'>+ 30sec</button>
        <button onClick={minusHalf} type='button'>- 30sec</button>
        <button onClick={minusOne} type='button'>- 1min</button>
      </div>
    );
  }
}

export default SecondsAndReduce;
