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
export function addTao (index, name, school, description) {
  return {
    type: 'ADD_TAO', index, name, school, description
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
