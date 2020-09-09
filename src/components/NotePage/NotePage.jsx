import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import FormMap from '../FormMap/FormMap';

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
        event.preventDefault()
        this.props.dispatch({ type: 'SEND_NOTE', payload: this.state})
    }

    // handle change for note state
    handleInputChangeFor = (propertyName) => (event) => {
        console.log(`In change for ${propertyName}`);
        this.setState({
            ...this.state,
            [propertyName]: event.target.value,
        });

    };

    render() {
        console.log(this.state);
        return (
            <div style={{ margin: '0', alignItems: 'center'}}>
                {/* <FormMap /> */}
                <form onSubmit={this.handleNoteSubmit}>
                    <div>
                        <input
                            type="text"
                            name="lat"
                            placeholder="Latitude"
                            value={this.state.lat}

                            onChange={this.handleInputChangeFor('lat')}
                        />
                        
                        <input
                            type="text"
                            name="lng"
                            placeholder="Longitude"
                            value={this.state.lng}

                            onChange={this.handleInputChangeFor('lng')}
                        />
                    </div>
                    
                    <div style={{ marginTop: "4.5in"}}>
                        <input
                            type="text"
                            name="title"
                            placeholder="Title"
                            value={this.state.title}

                            onChange={this.handleInputChangeFor('title')}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="description"
                            placeholder="Description"
                            value={this.state.description}

                            onChange={this.handleInputChangeFor('description')}
                        />
                    </div>
                    <div>
                        <label htmlFor="public">
                            Public:
                        <input
                                type="radio"
                                name="public"
                                value="true"
                                // checked={this.state.public === true}
                                onChange={this.handleInputChangeFor('public')}
                            />
                        </label>
                        <label htmlFor="public">
                            Private:
                        <input
                                type="radio"
                                name="public"
                                value="false"
                                onChange={this.handleInputChangeFor('public')}
                            />
                        </label>
                    </div>
                    <div>
                        <input className="btn" type="submit" name="submit" value="Save" />
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(NotePage);