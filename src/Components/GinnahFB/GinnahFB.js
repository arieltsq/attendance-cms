import React from 'react'

const GinnahFB = props => {
  console.log('props from GinnahFB.js', props.ginnahFB)
  return (
    <div className='Ginnah-Display'>
      <article>
        <p><b>Student's Name: </b>{props.ginnahFB.name}</p>
      </article>
      <article>
        <p><b>Student's School: </b>{props.ginnahFB.school}</p>
      </article>
      <article>
        <p><b>Student's Description: </b>{props.ginnahFB.desription}</p>
        <p>
          {props.ginnahFB.description}.
        </p>
      </article>
      <button onClick={props.onEdit}>Edit Ginnah</button>
      <button onClick={props.onDelete}>Delete Ginnah</button>
    </div>
  )
}

export default GinnahFB
