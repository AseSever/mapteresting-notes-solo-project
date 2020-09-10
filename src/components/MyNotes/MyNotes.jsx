import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
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

  handleDetails = (id) => {
    console.log(`clicked note id: ${id}`);
    this.props.dispatch
        ({ 
            type: 'FETCH_DETAILS', 
            payload: id
        })
    this.props.history.push(`/details/${id}`)
  }

  

  render() {
    return (
      <div>
        <h2>{this.state.heading}</h2>
        {this.props.store.notes.map((note, i) => {
            return(
                <MyNoteCards 
                    key={i} 
                    note={note} 
                    handleDetails={this.handleDetails}
                />
            )
        })}

      </div>
    );
  }
}

export default withRouter(
    connect(mapStoreToProps)(MyNotes)
);