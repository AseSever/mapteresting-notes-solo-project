import React, { useState } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import moment from 'moment';

// MATERIAL-UI
import { makeStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ToggleButton from '@material-ui/lab/ToggleButton';
import {
    Card,
    CardHeader,
    CardActionArea,
    CardMedia,
    CardActions,
    CardContent,
    Typography,
    IconButton,

} from '@material-ui/core';


const useStyles = makeStyles({
    root: {
        minWidth: '80%',
        maxWidth: '85%',
        margin: 'auto',
        marginTop: 10,

    },
    card: {
        backgroundColor: '#2E294E',
    }
});

function PublicNotes(props) {
    const classes = useStyles();
    const [selected, setSelected] = useState(false);


    return (
        <div>
            <Card className={classes.root}>
                <CardHeader
                    align="center"
                    title={props.note.title}
                    subheader={props.note.username}
                />
                <CardActions>

                    <IconButton
                        onClick={() => props.dispatch({ type: 'TOGGLE_LIKE', payload: props.note.id })}
                    >
                        <FavoriteIcon variant="outlined" color="primary" fontSize="default" />
                    </IconButton>

                    <Typography paragraph>
                        {moment(props.note.date_created).format('ll')}
                    </Typography>
                </CardActions>
            </Card>
            <div style={{ marginLeft: "50px" }}>
                <Typography color="textSecondary" component="p">
                    {props.note.count} Likes
                </Typography>
            </div>
        </div>
    );
}

export default connect(mapStoreToProps)(PublicNotes);