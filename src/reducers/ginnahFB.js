function ginnahFBReducer (state = {}, action) {
  switch (action.type) {
    case 'FETCH_GINNAHS_FB':
      return action.payload

    default:
      return state
  }
}

export default ginnahFBReducer
