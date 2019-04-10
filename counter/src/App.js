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
    console.log(this.props.count)
    return (
      <div className="App">
        <h1>THE BOSS COUNTER</h1>
        <h1>{this.props.count}</h1>
        <button 
          onClick={( ) => this.props.decrement( this.props.count )}
          className="minusButton">
          -
        </button>
        <button 
          onClick={( ) => this.props.increment( this.props.count )}
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
    count: state.counter
  }
}

export default connect(
  mapStateToProps, 
  { increment, decrement }) 
  ( App );
