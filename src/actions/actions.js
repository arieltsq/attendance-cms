export function addGinnah (name, school, description) {
  return {
    type: 'ADD_GINNAH',
    name,
    school,
    description
  }
}
export function deleteGinnah (index) {
  return {
    type: 'DELETE_GINNAH',
    index
  }
}
export function editGinnah (name, school, description, index) {
  return {
    type: 'EDIT_GINNAH',
    name,
    school,
    description,
    index
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

export function editKakia (name, school) {
  return {
    type: 'EDIT_KAKIA',
    name,
    school
  }
}
