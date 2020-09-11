import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import EditFormTextField from '../EditFormTextField/EditFormTextField';

// MATERIAL-UI
import {
    Button,
    TextField,
    Radio,
} from '@material-ui/core';


class Edit extends Component {
    state = {
        heading: 'Edit Page',
    };

    componentDidMount = () => {
        let id = this.props.match.params.id
        // create new reducer specifically for editing details
        this.props.dispatch({ type: 'FETCH_EDIT_DETAILS', payload: id })
    }


    handleEditChange = (propertyValue) => {
        console.log(`Handle change of ${propertyValue}`);
        this.props.dispatch({ type: 'SET_EDIT', payload: propertyValue})
    }

    render() {
        // variable for more concise data
        const editFields = this.props.store.edit
        console.log(editFields);

        return (
            <div>
                <h2>{this.state.heading}</h2>
                <form>

                    <EditFormTextField
                        editFields={editFields}
                        newEdit={this.state.newEdit}
                        handleEditChange={this.handleEditChange}
                    />
                </form>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(Edit);