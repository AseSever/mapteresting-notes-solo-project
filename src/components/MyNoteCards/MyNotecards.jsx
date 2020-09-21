import React, { useState, } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import moment from 'moment';

// MATERIAL-UI
import { makeStyles } from '@material-ui/core/styles';
import {
    Card,
    CardHeader,
    CardActionArea,
    CardActions,
    CardContent,
    Typography,
    Button,
    Grid,
} from '@material-ui/core';




const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: '80%',
        maxWidth: '85%',
        margin: 'auto',
        marginTop: 10,
    },
    button: {
        width: 20,
        height: 25,
    }
}));

function MyNoteCards(props) {

    const classes = useStyles();


    const latlng = Number(props.note.lat) + ' ' + Number(props.note.lng)

    const handleDelete = (id) => {
        props.dispatch({
            type: 'DELETE_NOTE',
            payload: id
        })
    }

    return (
        <div>
            <Card className={classes.root}>
            <CardActionArea onClick={() => props.handleDetails(props.note.id)}>
                <CardHeader
                    title={props.note.title}
                    align="center"
                />
                
                    <CardContent>

                        <Typography variant="body2" color="textSecondary" component="p" align="center">
                            {props.note.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Grid
                        container
                        justify="space-between"
                        alignItems="flex-end"
                    >
                        <Grid item>
                            <Typography variant="body2" color="textSecondary" component="p">

                                Created: {moment(props.note.date_created).calendar()}

                            </Typography>
                        </Grid>
                        <Grid item>
                            <Button
                                className={classes.button}
                                variant="contained"
                                color="secondary"
                                size="small"
                                onClick={() => handleDelete(props.note.id)}
                            >
                                Delete
                            </Button>
                        </Grid>
                    </Grid>

                </CardActions>
            </Card>

        </div>
    );
}

export default connect(mapStoreToProps)(MyNoteCards);
