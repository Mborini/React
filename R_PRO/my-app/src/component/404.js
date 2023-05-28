import React from 'react'
import Alert from 'react-bootstrap/Alert';
 const Notfound = (props) => {
  return (
    <div>
        <Alert variant={props.color}>
      {props.messege}
      
    </Alert>
    </div>
  )
}
export default Notfound;