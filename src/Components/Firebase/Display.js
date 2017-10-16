import React from 'react'

const Display = props => {
  console.log(props.name, props.school, props.description)
  return (
    <div>
      <p>
        Name:{props.ginnah.name}
      </p>
      <p>
        School:{props.ginnah.school}
      </p>
      <p>
        description:{props.ginnah.description}
      </p>
      <button onClick={props.deleteGinnah}>Delete</button>
      <button onClick={props.editGinnah}>Edit</button>
    </div>
  )
}
export default Display
