// Higher Order Component - A component(HOC) that renders another component
// Reuse Code
// Render hijacking
// Props manipulation
// Abstract state

import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
)

const withAdminWatning = (WrappedComponent) => {
  return (props) => (
    <div>
      { props.isAdmin && <p>This is private info, please don't share</p>}
      <WrappedComponent {...props} />
    </div>
  )
}

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />) : (<p>Please login to see the info</p>)}
    </div>
  )
}

const AdminInfo = withAdminWatning(Info)
const AuthInfo = requireAuthentication(Info)


// ReactDOM.render(<AdminInfo isAdmin={true} info="There are the details" />, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated={true} info="There are the details" />, document.getElementById('app'))