import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import EditFormTextField from '../EditFormTextField/EditFormTextField';

// MATERIAL-UI
import {
    Button,
    Paper,
    Radio,
    Grid,
    RadioGroup,
    FormControlLabel,
    FormControl, 
    Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 10,
    },
    
}));

function Edit(props) {
    const classes = useStyles();

    useEffect(() => {
        let id = props.match.params.id
        // created new reducer specifically for editing details
        props.dispatch(
            {
                type: 'FETCH_EDIT_DETAILS', payload: id
            });
    }, [])

    const handleEditChange = (event) => {
        console.log(`Handle change of ${event.target.name}`);
        props.dispatch(
            {
                type: 'SET_EDIT',
                payload: { key: event.target.name, value: event.target.value }
            });
    }

    const handleEditSubmit = (event) => {
        event.preventDefault();
        props.dispatch(
            {
                type: 'UPDATE_NOTE',
                payload: props.store.edit,
            });
        props.history.push('/mynotes');
    }

    const handleCancel = (event) => {
        event.preventDefault();
        props.dispatch(
            {
                type: 'CANCEL_EDIT'
            });
        props.history.push('/mynotes');
    }


    // variable for more concise data
    const editFields = props.store.edit
    console.log(editFields);

    return (
        <div>
            <Paper className={classes.root}>
                <form onSubmit={handleEditSubmit}>
                    <Grid 
                        container
                        justify="center"
                        alignItems="center"
                    >
                        <Grid item>
                            <FormControl>
                                <RadioGroup row aria-label="position" name="position" defaultValue="top">
                                    <FormControlLabel
                                        value="true"
                                        name="public"
                                        onChange={(event) => handleEditChange(event)}
                                        control={<Radio color="primary" />}
                                        label="Public"
                                        labelPlacement="start"
                                    />
                                    <FormControlLabel
                                        value="false"
                                        name="public"
                                        onChange={(event) => handleEditChange(event)}
                                        control={<Radio color="primary" />}
                                        label="Private"
                                        labelPlacement="start"
                                    />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <EditFormTextField
                            editFields={editFields}
                            handleEditChange={handleEditChange}
                        />
                        <Grid
                            container
                            justify="space-evenly"
                            alignItems="center"
                        >
                            <Grid item>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                >
                                    Save
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    onClick={handleCancel}
                                >
                                    Cancel
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </div >
    );

}

export default connect(mapStoreToProps)(Edit);