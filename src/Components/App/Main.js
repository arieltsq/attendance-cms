import React, { Component } from 'react';

import './App.css';

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <header className="Main-header">
          
          <h1 className="Main-title">Welcome to Attendance CMS System</h1>
          {React.cloneElement(this.props.children, this.props)}
        </header>
      </div>
    );
  }
}

export default Main;
