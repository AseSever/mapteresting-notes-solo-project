import React, { useState } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// MATERIAL-UI
import {
    Grid,
    Button,
} from '@material-ui/core';


function NotePageButton(props) {


    return (
        <div>
            <Grid
                container
                justify="center"
                alignContent="center"
            >
                <Grid item>
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        name="submit"
                    >
                        Save
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}

export default connect(mapStoreToProps)(NotePageButton);