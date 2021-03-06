import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';
import MyNoteCards from '../MyNoteCards/MyNotecards';

// MATERIAL-UI
import {
  Grid,
  Typography,
  Paper,
} from '@material-ui/core';

class MyNotes extends Component {
  state = {
    heading: 'My Locations',
    info: 'Tap note to see details'
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
      <Grid container justify="center">
        <Paper style={{ width: "85%", padding: "10px", marginBottom: "20px" }}>
          <Grid item>
            <Typography variant="h4" component="h3" align="center">
              {this.state.heading}
            </Typography>
          </Grid>
        </Paper>
        <Grid container justify="center" alignItems="center">
          <Grid item>
            <p>{this.state.info}</p>
          </Grid>
        </Grid>
        <Grid container spacing={4} justify="center" alignItems="center">
          <Grid item xs={12}>
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
      </Grid>
    );
  }
}

export default withRouter(
  connect(mapStoreToProps)(MyNotes)
);