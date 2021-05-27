import React from 'react';
 
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      time: '00:00',
    };
  }
  render() {
    return (
      <div>
        {this.state.time}
      </div>
    );
  }
}

export default App;
