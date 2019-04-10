import React, { Component } from 'react';
import './App.css';
import bossBaby from './images/bossBaby.png';
//IMPORT ACTIONS 
import { increment } from './actions';
import { decrement } from './actions';
//IMPORT CONNECT 
import { connect } from 'react-redux';

class App extends Component {
  render() {
    console.log(this.props.state);
    return (
      <div className="App">
        <h1>THE BOSS COUNTER</h1>
        <h1>0</h1>
        <button 
          className="minusButton">
          -
        </button>
        <button 
          className="plusButton">
          +
        </button>
        <button className="playButton">
          play
        </button>
        <img className="bossBaby" src={ bossBaby }/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    number: state.number
  }
}

export default connect(
  mapStateToProps, 
  {increment, decrement}
)(App);
