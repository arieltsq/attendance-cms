export function addGinnah (index, name, school, description) {
  return {
    type: 'ADD_GINNAH', index, name, school, description
  }
}
export function addTao (index, name, school, description) {
  return {
    type: 'ADD_TAO', index, name, school, description
  }
}

// export function addKakia(index, name, school, description) {
//   type: "ADD_KAKIA",
//   index,
//   name,
//   school,
//   description;
// }

export function addKakia (name, school) {
  return {
    type: 'ADD_KAKIA',
    name,
    school
  }
}

export function removeKakia (index) {
  return {
    type: 'REMOVE_KAKIA',
    index
  }
}
