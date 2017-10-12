import React from 'react'

const AddGinnah = props => {
  console.log('Props from AddGinnah', props)
  return (
    <div>
      <form onSubmit={props.addGinnahSubmit} className='AddGinnah-form'>
        <label>
          <p><b>Name:</b></p>
          <input
            name='name'
            value={props.name}
            type='text'
            onChange={props.onChange}
          />
        </label>
        <br />
        <label>
          <p><b>School:</b></p>
          <input
            name='school'
            value={props.schools}
            type='text'
            onChange={props.onChange}
          />
        </label>
        <br />
        <label>
          <p><b>Description:</b></p>
          <input
            name='description'
            value={props.description}
            type='text'
            onChange={props.onChange}
          />
        </label>
        <br />
        <button type='submit' value='Submit'>
          Send
        </button>
      </form>
    </div>
  )
}

export default AddGinnah
