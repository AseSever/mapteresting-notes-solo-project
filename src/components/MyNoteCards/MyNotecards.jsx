import React, { useState } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';


function MyNoteCards(props) {
    // Using hooks we're creating local state for a "heading" variable with
    // a default value of 'Functional Component'
    const [heading, setHeading] = useState('My Note Cards');
    const latlng = Number(props.note.lat) + ' ' + Number(props.note.lng)
    console.log(props.note);
    console.log(latlng);

    const handleDelete = (id) => {
        console.log(`clickin ${id}`);
    }

    return (
        <div>

            <p>{props.note.title}</p>
            <p>{latlng}</p>
            <button onClick={() => handleDelete(props.note.id)}>Delete</button>

        </div>
    );
}

export default connect(mapStoreToProps)(MyNoteCards);
