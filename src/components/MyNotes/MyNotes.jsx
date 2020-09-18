import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';
import MyNoteCards from '../MyNoteCards/MyNotecards';

// MATERIAL-UI
import {
  Grid,
} from '@material-ui/core';

class MyNotes extends Component {
  state = {
    heading: 'My Notes',
    info: 'Click note to edit'
  };

  componentDidMount = () => {
    this.props.dispatch({ type: 'FETCH_NOTES' })
  }

  handleDetails = (id) => {
    this.props.dispatch
      ({
        type: 'FETCH_DETAILS',
        payload: id
      })
    this.props.history.push(`/details/${id}`)
  }



  render() {
    return (
      <Grid container justify="center" alignItems="flex-start">
        <Grid item>
          <h1>{this.state.heading}</h1>
        </Grid>
        <Grid container justify="center" alignItems="center">
          <Grid item>
            <p>{this.state.info}</p>
          </Grid>
        </Grid>
        <Grid item>
        {this.props.store.notes.map((note, i) => {
          return (
            <MyNoteCards
              key={i}
              note={note}
              handleDetails={this.handleDetails}
            />
          )
        })}
        </Grid>

      </Grid>
    );
  }
}

export default withRouter(
  connect(mapStoreToProps)(MyNotes)
);