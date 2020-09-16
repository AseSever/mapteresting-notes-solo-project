import React, { useState } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import moment from 'moment';

// MATERIAL-UI
import { makeStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
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
});

function PublicNotes(props) {
    const classes = useStyles();


    return (
        <div>
            <Card className={classes.root}>
                <CardHeader
                    align="center"
                    title={props.note.title}
                    subheader={props.note.username}
                />
                <CardContent>

                </CardContent>
                <CardActions>
                    <IconButton>
                        <FavoriteIcon />
                    </IconButton>
                    <Typography paragraph>
                        {moment(props.note.date_created).format('ll')}
                    </Typography>
                </CardActions>
            </Card>
        </div>
    );
}

export default connect(mapStoreToProps)(PublicNotes);