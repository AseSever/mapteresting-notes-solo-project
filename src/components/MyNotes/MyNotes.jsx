import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import MyNoteCards from '../MyNoteCards/MyNotecards';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name MyNotes with the name for the new
// component.
class MyNotes extends Component {
  state = {
    heading: 'My Notes',
  };

  componentDidMount = () => {
      this.props.dispatch({ type: 'FETCH_NOTES' })
  }

  render() {
    return (
      <div>
        <h2>{this.state.heading}</h2>
        {this.props.store.notes.map((note, i) => {
            return(<MyNoteCards key={i} note={note}/>)
        })}

      </div>
    );
  }
}

export default connect(mapStoreToProps)(MyNotes);