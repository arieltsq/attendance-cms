import React from 'react'

const Tao = props => {
  console.log('props from Tao.js', props.index)
  return (
    <div className='Tao-Display'>
      <article>
        <h4>Admin's Name: {props.tao.name}</h4>
      </article>
      <article>
        <p><b>Admin's Role: </b>{props.tao.role}</p>
      </article>
      <button onClick={props.onEdit}>Edit Tao</button>
      <button onClick={props.onDelete}>Delete Tao</button>
    </div>
  )
}

export default Tao
