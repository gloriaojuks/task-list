import React, { Component } from 'react'

export class App extends Component {
  render() {
    return (
      <div className="container">
      <div className="row">
      {/* <div className="col-lg-6"> */}
      <div className="App">
      <div className="title">Reminder App
      </div>
           <div className="form-inline">
           <div className="form-group">
              <input 
              className="form-control" 
              placeholder="I have to..."
              />
           </div>
           <button type="button" className="btn btn-success">Add reminder</button>
      {/* </div> */}
      </div>
      </div>
      </div>
      </div>
    )
  }
}

export default App
