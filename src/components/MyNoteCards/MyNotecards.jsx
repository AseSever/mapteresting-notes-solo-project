import React, { useState } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// MATERIAL-UI
import { makeStyles } from '@material-ui/core/styles';
import {
    Card,
    CardHeader,
    CardActionArea,
    CardActions,
    CardContent,
    Typography,

} from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        minWidth: 345,
        maxWidth: 370,
    },
});

function MyNoteCards(props) {
    // Using hooks we're creating local state for a "heading" variable with
    // a default value of 'Functional Component'
    const [heading, setHeading] = useState('My Note Cards');
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
                <CardActionArea>
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
                    <button onClick={() => handleDelete(props.note.id)}>Delete</button>
                </CardActions>
            </Card>

        </div>
    );
}

export default connect(mapStoreToProps)(MyNoteCards);
