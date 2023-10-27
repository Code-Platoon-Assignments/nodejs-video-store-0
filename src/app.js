// app.js
import { validate } from 'uuid'

import createCustomer from './customer.js'
import createStore from './store.js'

console.log('video store is ', createStore())
const customer = createCustomer('alice')
console.log('new customer ', customer);

console.log(validate(customer.id))