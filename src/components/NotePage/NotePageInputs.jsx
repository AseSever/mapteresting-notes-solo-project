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
import NotePageButton from './NotePageButton';
import NotePageRadio from './NotePageRadio';


const useStyles = makeStyles((theme) => ({
    root: {
        margin: 'auto'
    },
    textField: {
        minWidth: 300,
        maxWidth: '90%',
    },
    latlngField: {
        width: '11.4em',
    },
    paper: {
        minWidth: '80%',
        maxWidth: '95%',
        margin: 'auto',
    },
}));

function NotePageInputs(props) {
    const classes = useStyles();
    const lng = props.store.map.lng
    const lat = props.store.map.lat
    console.log(lat, lng);
    return (
        <div>
            <Paper className={classes.paper}>
                <Grid
                    container
                    justify="center"
                    alignContent="center"
                >
                    <Grid item>
                        <TextField
                            className={classes.latlngField}
                            type="text"
                            id="outlined-margin-dense"
                            variant="outlined"
                            style={{ margin: 7 }}
                            margin="dense"
                            label="Latitude"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={lat && lat.toFixed(8)}
                            name="lat"
                            onChange={props.handleInputChangeFor('lat')}
                        />
                        <TextField
                            className={classes.latlngField}
                            type="text"
                            id="outlined-margin-dense"
                            variant="outlined"
                            style={{ margin: 7 }}
                            margin="dense"
                            label="Longitude"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={lng && lng.toFixed(8)}
                            name="lng"
                            onChange={props.handleInputChangeFor('lng')}
                        />
                    </Grid>
                    <Grid 
                        container 
                        justify="center" 
                        alignItems="center"
                    >
                        <Grid item xs={12}>
                            <MapContainer />
                        </Grid>
                    </Grid>
                    <Grid item >
                        <TextField
                            className={classes.textField}
                            type="text"
                            id="outlined-full-width"
                            variant="outlined"
                            style={{ margin: 7 }}
                            margin="dense"
                            label="Title"
                            name="title"
                            onChange={props.handleInputChangeFor('title')}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            className={classes.textField}
                            type="text"
                            id="outlined-full-width"
                            variant="outlined"
                            style={{ margin: 7 }}
                            label="Description"
                            name="description"
                            onChange={props.handleInputChangeFor('description')}
                        />
                    </Grid>
                    <NotePageRadio handleInputChangeFor={props.handleInputChangeFor}/>
                   <NotePageButton />
                </Grid>
            </Paper>
        </div>
    );
}

export default connect(mapStoreToProps)(NotePageInputs);