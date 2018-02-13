import React from 'react'

class User extends React.Component {
  constructor () {
    super()
    this.uploadWidget.bind(this)
  }

  uploadWidget () {
    window.cloudinary.openUploadWidget(
      {cloud_name: 'timstales', upload_preset: 'p2uuetqy', sources: ['local', 'url', 'camera', 'dropbox', 'instagram'], dropbox_app_key: '9m2w4mqs6qhftz2', theme: 'minimal'},
      function (error, result) {
        console.log(error, result)
      })
  }
  render () {
    return (
      <div>
        <h1>ImageUploads</h1>
        <div className="upload">
          <button onClick={this.uploadWidget} className="upload-button">
              Upload Image
          </button>
        </div>
      </div>
    )
  }
}

export default User
