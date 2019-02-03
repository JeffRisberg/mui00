import React, { Component } from 'react';
import NavBar from './components/NavBar';
import CourseList from './components/CourseList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <CourseList />
      </div>
    );
  }
}

export default App;
