import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import DropzoneS3Uploader from 'react-dropzone-s3-uploader';
import CloudUploadRoundedIcon from '@material-ui/icons/CloudUploadRounded';

const dropStyles = {
    width: '200px',
    height: '50px',
    border: '1px solid black',
}



class ImageUpload extends Component {

    handleFinishedUpload = info => {
        console.log(info);
        // console.log('File uploaded with filename', info.filename)
        console.log('Access it on s3 at', info.fileUrl)
        this.props.dispatch({ type: 'POST_IMAGE_URL', payload: info.fileUrl })

    }

    render() {
        const uploadOptions = {
            server: 'http://localhost:5000',
            // signingUrlQueryParams: { uploadType: 'avatar' },
        }
        const innerDropElement = (
            <div>
                <p>Upload Image</p>
            </div>
        )

        const s3Url = 'https://mapterestingbucket.s3.amazonaws.com'

        return (
            
            <DropzoneS3Uploader
                children={innerDropElement}
                onFinish={this.handleFinishedUpload}
                style={dropStyles}
                s3Url={s3Url}
                maxSize={1024 * 1024 * 5}
                upload={uploadOptions}
            />
        )
    }
}

export default connect(mapStoreToProps)(ImageUpload);