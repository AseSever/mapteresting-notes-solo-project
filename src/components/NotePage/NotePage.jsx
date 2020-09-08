import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';


class NotePage extends Component {
    state = {
        lat: '',
        lng: '',
        title: '',
        description: '',
    };



    // handle change for note state
    handleInputChangeFor = (propertyName) => (event) => {
        this.setState({
            [propertyName]: event.target.value,
        });
    };

    render() {
        return (
            <div>
                <form>
                    <div>
                        <input
                            type="text"
                            name="lat"
                            placeholder="Latitude"
                            value={this.state.lat}
                            required
                            onChange={this.handleInputChangeFor('lat')}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="lng"
                            placeholder="Longitude"
                            value={this.state.lng}
                            required
                            onChange={this.handleInputChangeFor('lng')}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="title"
                            placeholder="Title"
                            value={this.state.title}
                            required
                            onChange={this.handleInputChangeFor('title')}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="description"
                            placeholder="Description"
                            value={this.state.description}
                            required
                            onChange={this.handleInputChangeFor('description')}
                        />
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