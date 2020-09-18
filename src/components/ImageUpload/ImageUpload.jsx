import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import DropzoneS3Uploader from 'react-dropzone-s3-uploader';

class ImageUpload extends Component {

    handleFinishedUpload = info => {
        console.log(info);
        // console.log('File uploaded with filename', info.filename)
        console.log('Access it on s3 at', info.fileUrl)

    }

    render() {
        const uploadOptions = {
            server: 'http://localhost:5000',
            // signingUrlQueryParams: { uploadType: 'avatar' },
        }

        const s3Url = 'https://mapterestingbucket.s3.amazonaws.com'

        return (
            <DropzoneS3Uploader
                onFinish={this.handleFinishedUpload}
                s3Url={s3Url}
                maxSize={1024 * 1024 * 5}
                upload={uploadOptions}
            />
        )
    }
}

export default connect(mapStoreToProps)(ImageUpload);