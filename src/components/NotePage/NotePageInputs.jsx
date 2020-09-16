import React, { useState } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// MATERIAL-UI
import { makeStyles } from '@material-ui/core/styles'
import {
    TextField,
    Paper,
    Grid,
    Button,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
} from '@material-ui/core';
import MapContainer from '../MapContainer/MapContainer';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: 'auto'
    },
    textField: {
        width: '90%',
        
    },
    latlngField: {
        width: '11.4em',
    },
    paper: {
        minWidth: '80%',
        maxWidth: '95%',
        margin: 'auto',
        paddingLeft: 15,
    },
}));

function NotePageInputs(props) {
    const classes = useStyles();

    return (
        <div>
            <Paper className={classes.paper}>
                <Grid container>
                <Grid item xs={12}>
                        <TextField
                            className={classes.latlngField}
                            type="text"
                            id="outlined-margin-dense"
                            variant="outlined"
                            style={{ margin: 10 }}
                            margin="dense"
                            label="Latitude"
                            name="lat"
                            onChange={props.handleInputChangeFor('lat')}
                        />
                        <TextField
                            className={classes.latlngField}
                            type="text"
                            id="outlined-margin-dense"
                            variant="outlined"
                            style={{ margin: 10 }}
                            margin="dense"
                            label="Longitude"
                            name="lng"
                            onChange={props.handleInputChangeFor('lng')}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <MapContainer />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            className={classes.textField}
                            type="text"
                            id="outlined-full-width"
                            variant="outlined"
                            style={{ margin: 10 }}
                            margin="dense"
                            label="Title"
                            name="title"
                            onChange={props.handleInputChangeFor('title')}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            className={classes.textField}
                            type="text"
                            id="outlined-full-width"
                            variant="outlined"
                            style={{ margin: 10 }}
                            label="Description"
                            name="description"
                            onChange={props.handleInputChangeFor('description')}
                        />
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}

export default connect(mapStoreToProps)(NotePageInputs);