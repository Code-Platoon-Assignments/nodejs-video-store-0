// customer.test.js
import { isValid, parseISO } from "date-fns";
import createCustomer from "../src/customer";

test('createCustomer() returns customer with `name` and `id` proeprties', () => {
    const newCustomer = createCustomer('alice');
    expect(newCustomer.hasOwnProperty('id')).toBe(true);
    expect(newCustomer.hasOwnProperty('name')).toBe(true);
})

test('createCustomer() returns false if name arg is an empty string', () => {
    const newCustomer = createCustomer();
    expect(newCustomer).toBe(false);
})

test('createCustomer() returns customer with `createdAt` property', () => {
    const newCustomer = createCustomer('alice');
    expect(newCustomer.hasOwnProperty('createdAt')).toBe(true);
})

test('createCustomer() `createdAt` is a valid date', () => {
    const customer = createCustomer('alice');
    expect(isValid(parseISO(customer.createdAt))).toBe(true);
})