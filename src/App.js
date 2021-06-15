import React, { Component } from 'react'
import Top from './Top/Top'



class App extends Component {
  render() {
    return (
      <div className="App container">
        <div className="row justify-content-md-center">
          <div className='col12'>
            <Top />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
