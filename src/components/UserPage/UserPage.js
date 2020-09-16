import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';
import PublicNotes from './PublicNotes';

class UserPage extends Component {
  // this component doesn't do much to start, just renders some user info to the DOM

  componentDidMount = () => {
    this.props.dispatch({type: 'FETCH_PUBLIC_NOTES'})
  } 

  render() {
    return (
      <div>
        <h1 id="welcome">Welcome, {this.props.store.user.username}!</h1>
        {/* <p>Your ID is: {this.props.store.user.id}</p> */}
        {/* {JSON.stringify(this.props.store.home)} */}
        {this.props.store.home.map((note, i) => {
          return(<PublicNotes key={i} note={note} />)
        })}
        
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(UserPage);
