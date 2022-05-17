// Write your code here
import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notifications = props => {
  const {children} = props

  return (
    <div className="list-items">
      {children}
      <GrFormClose className="cross" />
    </div>
  )
}

export default Notifications
