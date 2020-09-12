import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import EditFormTextField from '../EditFormTextField/EditFormTextField';

// MATERIAL-UI
import {
    Button,
    TextField,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
} from '@material-ui/core';


class Edit extends Component {
    state = {
        heading: 'Edit Page',
    };

    componentDidMount = () => {
        let id = this.props.match.params.id
        // create new reducer specifically for editing details
        this.props.dispatch({ type: 'FETCH_EDIT_DETAILS', payload: id });
    }


    handleEditChange = (event) => {
        console.log(`Handle change of ${event.target.name}`);
        this.props.dispatch(
            {
                type: 'SET_EDIT',
                payload: { key: event.target.name, value: event.target.value }
            });
    }

    handleEditSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch(
            {
                type: 'UPDATE_NOTE',
                payload: this.props.store.edit,
            });
        this.props.history.push('/mynotes');
    }

    handleCancel = (event) => {
        this.props.history.push('/mynotes')
    }

    render() {
        // variable for more concise data
        const editFields = this.props.store.edit
        console.log(editFields);

        return (
            <div>
                <h2>{this.state.heading}</h2>
                <form onSubmit={this.handleEditSubmit}>

                    <FormControl>
                        <RadioGroup row aria-label="position" name="position" defaultValue="top">
                            <FormControlLabel
                                value="true"
                                name="public"
                                onChange={(event) => this.handleEditChange(event)}
                                control={<Radio color="primary" />}
                                label="Public"
                                labelPlacement="start"
                            />
                            <FormControlLabel
                                value="false"
                                name="public"
                                onChange={(event) => this.handleEditChange(event)}
                                control={<Radio color="primary" />}
                                label="Private"
                                labelPlacement="start"
                            />
                        </RadioGroup>
                    </FormControl>

                    <EditFormTextField
                        editFields={editFields}
                        handleEditChange={this.handleEditChange}
                    />
                    <div>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                        >
                            Save
                        </Button>
                    </div>
                    <div>
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={this.handleCancel}
                        >
                            Cancel
                        </Button>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(Edit);