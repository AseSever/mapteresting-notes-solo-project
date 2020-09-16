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
                            value={lat && lat.toFixed(7)}
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
                            value={lng && lng.toFixed(7)}
                            name="lng"
                            onChange={props.handleInputChangeFor('lng')}
                        />
                    </Grid>
                    <Grid container justify="space-around" alignContent="center">
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
                    <Grid
                        container
                        justify="center"
                        alignContent="center"
                    >
                        <Grid item >
                            <FormControl>
                                <RadioGroup row aria-label="position" name="position" defaultValue="top">
                                    <FormControlLabel
                                        value="true"
                                        name="public"
                                        onChange={props.handleInputChangeFor('public')}
                                        control={<Radio color="primary" />}
                                        style={{ margin: 10 }}
                                        label="Public"
                                        labelPlacement="start"
                                    />
                                    <FormControlLabel
                                        value="false"
                                        name="public"
                                        onChange={props.handleInputChangeFor('public')}
                                        control={<Radio color="primary" />}
                                        style={{ margin: 10 }}
                                        label="Private"
                                        labelPlacement="start"
                                    />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid
                            container
                            justify="center"
                            alignContent="center"
                        >
                            <Grid item>
                                <Button
                                    variant="contained"
                                    type="submit"
                                    name="submit"
                                >
                                    Save
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}

export default connect(mapStoreToProps)(NotePageInputs);