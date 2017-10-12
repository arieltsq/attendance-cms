import React from 'react'

const Kakia = props => {
  // console.log('from kakia.js', props.kakia)
  // console.log('index from kakia.js', props.index)
  return (
    <div className='Kakia-Display'>
      <article>
        <h4>Name: {props.kakia.name}</h4>
      </article>
      <article>
        <h4>School: {props.kakia.school}</h4>
      </article>
      <button onClick={props.onEdit}>Edit Kakia</button>
      <button onClick={props.onDelete}>Delete Kakia</button>
    </div>
  )
}

export default Kakia
