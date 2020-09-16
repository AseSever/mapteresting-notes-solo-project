import React, { useState } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// MATERIAL-UI
import {
    TextField, FormLabel,
} from '@material-ui/core';

function TemplateFunction(props) {
   
    const [heading, setHeading] = useState('Functional Component');


    console.log(props.editFields);
    return (
        <div>
            <div>
                <FormLabel htmlFor="title">
                    Title
                </FormLabel>
                <TextField
                    id="outlined-basic"
                    variant="outlined"
                    value={props.editFields.title}
                    name="title"
                    onChange={(event) => props.handleEditChange(event)}
                />
            </div>
            <div>
                <FormLabel htmlFor="description">
                    Description
                </FormLabel>
                <TextField
                    id="outlined-multiline-static"
                    variant="outlined"
                    multiline
                    rows={2}
                    maxRows={3}
                    value={props.editFields.description}
                    name="description"
                    onChange={(event) => props.handleEditChange(event)}
                />
            </div>
        </div>
    );
}

export default connect(mapStoreToProps)(TemplateFunction);