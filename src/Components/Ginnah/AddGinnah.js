import React from 'react'

const AddGinnah = props => {
  console.log('Props from AddGinnah', props)
  return (
    <div>
      <form onSubmit={props.addGinnahSubmit}>
        <label>
          Name:
          <input
            name='name'
            value={props.name}
            type='text'
            onChange={props.onChange}
          />
        </label>
        <br />
        <label>
          School:
          <input
            name='school'
            value={props.schools}
            type='text'
            onChange={props.onChange}
          />
        </label>
        <br />
        <label>
          Description:
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
