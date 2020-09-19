import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import PublicNotes from './PublicNotes';

import { 
  Grid,
  Typography,
} from '@material-ui/core';

class UserPage extends Component {

  componentDidMount = () => {
    this.props.dispatch({ type: 'FETCH_PUBLIC_NOTES' });
  }

  render() {
    return (
      <div>
        <Grid container justify="space-around">
          <Grid item>
            <Typography variant="h4" component="h3">
              Welcome, {this.props.store.user.username}! 
            </Typography>
          </Grid>
        </Grid>
        {this.props.store.home.map((note, i) => {
          return (<PublicNotes key={i} note={note} />)
        })}

      </div>
    );
  }
}

export default connect(mapStoreToProps)(UserPage);
