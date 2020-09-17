import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import MapContainer from '../MapContainer/MapContainer';
import NotePageInputs from './NotePageInputs';



class NotePage extends Component {
    state = {
        lat: '',
        lng: '',
        title: '',
        description: '',
        public: false,
        user_id: this.props.store.user.id
    };

    handleNoteSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: 'SEND_NOTE', payload: this.state });
        this.props.history.push('/mynotes');
    }

    // handle change for note state
    handleInputChangeFor = (propertyName) => (event) => {
        console.log(`In change for ${propertyName}`);
        this.setState({
            ...this.state,
            [propertyName]: event.target.value,
        });
    }

    render() {
        console.log(this.state);
        return (
            <div style={{ margin: '0', alignItems: 'center' }}>
                    <form onSubmit={this.handleNoteSubmit}>
                        <NotePageInputs handleInputChangeFor={this.handleInputChangeFor} />
                    </form>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(NotePage);