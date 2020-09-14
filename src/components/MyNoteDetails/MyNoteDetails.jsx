import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

//MATERIAL-UI
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    Paper,
    Button,
    Typography,
} from '@material-ui/core';

const apiKey = process.env.REACT_APP_GOOGLE_MAPS_APIKEY
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        maxHeight: 700,
        maxWidth: 380,
        margin: 'auto',
    }

}));


function MyNoteDetails(props) {
    const classes = useStyles();

    // setting a variable to show latitude and longitude for position
    const latlng = Number(props.store.noteDetails.lat) + ' ' + Number(props.store.noteDetails.lng)
    console.log(props.store.noteDetails);
    // details variable for easier labeling
    const details = props.store.noteDetails
    console.log(latlng);

    // on page load, sets data
    useEffect(() => {
        console.log(props.match);
        const id = props.match.params.id
        props.dispatch({ type: 'FETCH_DETAILS', payload: id })
    }, []);



    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <div>
                    <img src={`https://maps.googleapis.com/maps/api/staticmap?size=360x450&scale=2&format=png&markers=size:normal%7Ccolor:blue%7C${details.lat},${details.lng}&key=${apiKey}`} alt="" />
                </div>
                <Grid
                    container
                    justify="space-around"
                    alignItems="center"
                >
                    <Grid item xs={12}>
                        <Typography align="center">
                            {latlng}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography>
                            {details.title}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography align="center">
                            {details.description}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid
                    container
                    justify="center"
                    alignItems="center"
                >
                    <Grid item >
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={() => props.history.push(`/edit-details/${details.id}`)}
                            size="small"
                        >
                            Edit
                        </Button>
                    </Grid>
                        &nbsp;
                        &nbsp;
                    <Grid item >
                        <Button
                            variant="contained"
                            onClick={() => props.history.push('/mynotes')}
                            size="small"
                        >
                            Back
                        </Button>
                    </Grid>
                        &nbsp;
                        &nbsp;
                </Grid>
            </Paper>
        </div >
    );

}

export default connect(mapStoreToProps)(MyNoteDetails);
