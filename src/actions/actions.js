// Ginnah Actions
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
// Tao Actions
export function addTao (name, role) {
  return {
    type: 'ADD_TAO',
    name,
    role
  }
}
export function deleteTao (index) {
  return {
    type: 'DELETE_TAO',
    index
  }
}
export function editTao (name, role, index) {
  return {
    type: 'EDIT_TAO',
    name,
    role,
    index
  }
}
// Kakia Actions
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
export function editKakia (name, school, index) {
  return {
    type: 'EDIT_KAKIA',
    name,
    school,
    index
  }
}

export function firebaseAddGinnah (name, school, description) {
  return {
    type: 'ADD_FIREBASEGINNAH',
    name,
    school,
    description
  }
}

export function newGinnahForm (name, school, description) {
  return {
    type: 'NEW_GINNAH',
    name,
    school,
    description
  }
}

export function editGinnahForm (name, school, description, id) {
  return {
    type: 'EDIT_GINNAH',
    name,
    school,
    description,
    id
  }
}
