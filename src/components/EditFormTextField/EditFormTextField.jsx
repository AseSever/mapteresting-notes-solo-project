import React, { useState } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// MATERIAL-UI
import {
    TextField,
    Grid,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: 'auto'
    },
    textField: {
        minWidth: 300,
        maxWidth: '90%',
        margin: 10,
    },
    
}));


function TemplateFunction(props) {
    const classes = useStyles();


    console.log(props.editFields);
    return (
        <div>
            <Grid 
                container
                space
                justify="center"
                alignItems="center"
            >
                <Grid item>
                    <TextField
                        className={classes.textField}
                        id="outlined-basic"
                        variant="outlined"
                        value={props.editFields.title}
                        label="Title"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        name="title"
                        onChange={(event) => props.handleEditChange(event)}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        className={classes.textField}
                        id="outlined-multiline-static"
                        variant="outlined"
                        multiline
                        rows={3}
                        maxRows={4}
                        value={props.editFields.description}
                        label="Description"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        name="description"
                        onChange={(event) => props.handleEditChange(event)}
                    />
                </Grid>
            </Grid>
        </div>
    );
}

export default connect(mapStoreToProps)(TemplateFunction);