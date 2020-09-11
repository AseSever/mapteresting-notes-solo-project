import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// MATERIAL-UI
import { } from '@material-ui/core';

class Edit extends Component {
    state = {
        heading: 'Edit Page',
    };

    componentDidMount = () => {
        let id = this.props.match.params.id
        // create new reducer specifically for editing details
        // this.props.dispatch({ type: 'FETCH_EDIT_DETAILS', payload: id })
    }

    render() {
        console.log(this.props.store.noteDetails);
        return (
            <div>
                <h2>{this.state.heading}</h2>
                <form>
                    <input
                        value={this.props.store.noteDetails.description}
                    />
                </form>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(Edit);