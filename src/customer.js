// customer.js
import { v4 } from "uuid";
import { format, isValid, toDate } from "date-fns";


function createCustomer(name) {
    return {
      name: name.toLowerCase(),
      id: v4(),
      createdAt: format(new Date(), 'MM/dd/yyyy'), // Date() vs new Date() do different things
    }
}

console.log(isValid(new Date(c.createdAt)))

export default createCustomer