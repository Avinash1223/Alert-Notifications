// Write your code here
import {Component} from 'react'
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notifications from '../Notification'
import './index.css'

class AlertNotifications extends Component {
  renderSuccess = () => (
    <Notifications>
      <AiFillCheckCircle className="success-color icon" />
      <div>
        <h1 className="success-color">Success</h1>
        <p className="description">
          You can access all the files in the folder
        </p>
      </div>
    </Notifications>
  )

  renderError = () => (
    <Notifications>
      <RiErrorWarningFill className="Error-color icon" />
      <div>
        <h1 className="Error-color">Error</h1>
        <p className="description">
          SSorry, you are not authorized to have access to delete the file
        </p>
      </div>
    </Notifications>
  )

  renderMdWarning = () => (
    <Notifications>
      <MdWarning className="warning-color icon" />
      <div>
        <h1 className="warning-color">warning</h1>
        <p className="description">
          Viewers of this file can see comments and suggestions
        </p>
      </div>
    </Notifications>
  )

  renderMdInfo = () => (
    <Notifications>
      <MdInfo className="info-color icon" />
      <div>
        <h1 className="info-color">Info</h1>
        <p className="description">
          Anyone on the internet can view these files
        </p>
      </div>
    </Notifications>
  )

  render() {
    return (
      <div className="app-container">
        <h1>Alert Notifications</h1>
        {this.renderSuccess()}
        {this.renderError()}
        {this.renderMdWarning()}
        {this.renderMdInfo()}
      </div>
    )
  }
}

export default AlertNotifications
