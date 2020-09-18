import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import PublicNotes from './PublicNotes';

class UserPage extends Component {

  componentDidMount = () => {
    this.props.dispatch({ type: 'FETCH_PUBLIC_NOTES' });
  }

  render() {
    return (
      <div>
        <h1 id="welcome">Welcome, {this.props.store.user.username}!</h1>

        {this.props.store.home.map((note, i) => {
          return (<PublicNotes key={i} note={note} />)
        })}

      </div>
    );
  }
}

export default connect(mapStoreToProps)(UserPage);
