// customer.js
import { v4 } from "uuid";
import { format } from "date-fns";


function createCustomer(name) {
  if (!name) {
    return false;
  }

  const createdAt = format(new Date(), 'MM/dd/yyyy') // Date() vs new Date() do different things

  return {
    name: name.toLowerCase(),
    id: v4(),
    createdAt,
  }
}

export default createCustomer