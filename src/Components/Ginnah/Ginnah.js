import React from 'react'

const Ginnah2 = props => {
  console.log('from ginnah.js', props.ginnah)
  return (
    <div>
      <p>Hello {props.ginnah.name}, You are from {props.ginnah.school}.</p>
      <button>Edit Ginnah</button>
      <button>Delete Ginnah</button>
    </div>
  )
}

export default Ginnah2
