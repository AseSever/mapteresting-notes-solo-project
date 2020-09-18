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
} from '@material-ui/core';




const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: '80%',
        maxWidth: '85%',
        margin: 'auto',
        marginTop: 10,
    },
    button: {
        marginLeft: theme.spacing(4), 
    }
}));

function MyNoteCards(props) {
   
    const classes = useStyles();


    const latlng = Number(props.note.lat) + ' ' + Number(props.note.lng)
    console.log(props.note);
    console.log(latlng);

    const handleDelete = (id) => {
        console.log(`clickin ${id}`);
        props.dispatch({
            type: 'DELETE_NOTE',
            payload: id
        })
    }

    return (
        <div>
            <Card className={classes.root}>
                <CardHeader
                    title={props.note.title}
                />
                <CardActionArea onClick={() => props.handleDetails(props.note.id)}>
                    <CardContent>
                        
                        <Typography variant="body2" color="textSecondary" component="p">
                            {props.note.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {latlng}
                    </Typography>
                    <Button
                        className={classes.button}
                        variant="contained" 
                        color="secondary"
                        size="small"
                        onClick={() => handleDelete(props.note.id)}
                    >
                        Delete
                    </Button>
                    
                </CardActions>
            </Card>

        </div>
    );
}

export default connect(mapStoreToProps)(MyNoteCards);
