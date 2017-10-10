import React from 'react'

const Kakia2 = props => {
  console.log('from kakia.js', props.kakia)
  return (
    <div>
      <p>Hello {props.kakia.name}, You are from {props.kakia.school}.</p>
      <button>Edit Kakia</button>
      <button>Delete Kakia</button>
    </div>
  )
}

export default Kakia2
