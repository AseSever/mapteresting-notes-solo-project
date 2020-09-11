import React, { useState } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// MATERIAL-UI
import {
    TextField,
} from '@material-ui/core';

function TemplateFunction(props) {
    // Using hooks we're creating local state for a "heading" variable with
    // a default value of 'Functional Component'
    const [heading, setHeading] = useState('Functional Component');



    return (
        <div>
            <div>
                <TextField
                    id="outlined-basic"
                    variant="outlined"
                    value={props.editFields.title}
                    onChange={() => props.handleEditChange(props.editFields.title)}
                />
            </div>
            <div>
                <TextField
                    id="outlined-multiline-flexible"
                    multiline
                    rows={2}
                    // value={props.editFields.descripton}
                    // onChange={handleChange}
                    variant="outlined"
                />
            </div>
        </div>
    );
}

export default connect(mapStoreToProps)(TemplateFunction);