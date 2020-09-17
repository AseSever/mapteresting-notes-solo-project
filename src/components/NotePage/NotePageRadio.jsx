import React, { useState } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

//MATERIAL-UI
import {
    Grid,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
} from '@material-ui/core';


function TemplateFunction(props) {


    return (
        <div>
            <Grid
                container
                justify="center"
                alignContent="center"
            >
                <Grid item>
                    <FormControl>
                        <RadioGroup row aria-label="position" name="position" defaultValue="top">
                            <FormControlLabel
                                value="true"
                                name="public"
                                onChange={props.handleInputChangeFor('public')}
                                control={<Radio color="primary" />}
                                style={{ margin: 10 }}
                                label="Public"
                                labelPlacement="start"
                            />
                            <FormControlLabel
                                value="false"
                                name="public"
                                onChange={props.handleInputChangeFor('public')}
                                control={<Radio color="primary" />}
                                style={{ margin: 10 }}
                                label="Private"
                                labelPlacement="start"
                            />
                        </RadioGroup>
                    </FormControl>
                </Grid>

            </Grid>
        </div>
    );
}

export default connect(mapStoreToProps)(TemplateFunction);