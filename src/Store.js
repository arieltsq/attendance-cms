import { reducerName } from './Reducers/Reducers.js'
import { createStore } from 'redux'

const store = createStore(reducerName)

export default store