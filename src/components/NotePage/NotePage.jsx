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
        this.props.dispatch(
            { 
                type: 'SEND_NOTE', 
                payload: this.state 
            });
        this.props.dispatch(
            {
                type: 'CLEAR_MAP_LATLNG'
            })
        this.props.history.push('/mynotes');
    }

    // handle change for note state
    handleInputChangeFor = (propertyName) => (event) => {
        
        this.setState({
            ...this.state,
            [propertyName]: event.target.value,
        });
    }


    populateNewRealmInputs = () => {
        this.setState({
            lat: '44.92479783',
            lng: '-93.28636700',
            title: 'Super Cool Front Yard',
            description: 'Saving to show my dad, awesome rocks',
            public: 'true',
        })
    }    

    render() {
        return (
            <div style={{ margin: '0', alignItems: 'center' }}>
                    <form onSubmit={this.handleNoteSubmit}>
                        <NotePageInputs 
                            handleInputChangeFor={this.handleInputChangeFor}
                            populateNewRealmInputs={this.populateNewRealmInputs}
                            state={this.state} 
                        />
                    </form>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(NotePage);