import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import { search_Channel } from './Actions/actions';

import SearchChannel from './Presentational/SearchChannel';
import SearchResults from './Presentational/SearchResults';
import Header from './Presentational/Header';

/*
    App is the main container component, that contains all the other components for this example.
    onClickSearch={ this.searchChannel } is a method that we are passing down to SearchChannel,
    so SearchChannel is still a presentational or dumb component.

    SearchResults is also a presentational component that gets the results object, which contains isSearching, channelData and channelError.
    Depending on those values, it renders different parts of UI.
 */

class App extends Component {

  constructor(props) {
    super(props);

    this.searchChannel = this.searchChannel.bind(this);
  }

  searchChannel(text) {
    let input = document.getElementById('myInput') ; 
    input.value !== '' ? this.props.dispatch(search_Channel(input.value)) : alert('Enter a channel name pretty please.');
    input.value = "";
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <SearchChannel onClickSearch={ this.searchChannel } />
          <SearchResults results={ this.props.results } />
        </div>
      </div>
    );
  }
}

// Let's make sure we get the correct types in our props
App.propTypes = {
  isSearching: React.PropTypes.bool
}

function mapStateToProps(state) {
    return {
        results: state
    }
}

export default connect(mapStateToProps)(App);
