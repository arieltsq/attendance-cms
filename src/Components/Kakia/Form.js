import React from 'react'

const AddKakia = (props) => {
  return (
    <div>
      <form onSubmit={props.submitBtn} className='AddKakia-form'>
        <label>
          <p><b>Name:</b></p>
          <input type='text' name='name' placeholder="Kakia's name" onChange={props.onChange} value={props.name} />
        </label>
        <br />
        <label>
          <p><b>School:</b></p>
          <input type='text' name='school' value={props.school} placeholder="Kakia's School" onChange={props.onChange} />
        </label>
        <br />
        <button>Submit</button>
      </form>
    </div>
  )
}
export default AddKakia
