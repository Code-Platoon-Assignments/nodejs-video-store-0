# Using ES Modules and importing / exporting

## Assignment Description

You will refactor this codebase to use ES Modules. You will also practice writing some tests, installing an npm module, and adding a small feature to your project, to get more practice with importing/exporting.

## Instructions

### Prerequesites

You must have node.js and npm installed.

### Tasks

#### Use ES Modules in your project

1. Update your `package.json` so that your [node.js project uses ES Modules](https://nodejs.org/api/esm.html). **Do not use the `.mjs` file extension for any files.**

2. Refactor the exising code to use ES Module imports / exports instead of the CommonJS imports / exports they are currently using.

#### Write tests for `createCustomer()`

1. Add a test in a file named `customer.test.js` that tests `createCustomer` to confirm it returns an object with a `name` property and an `id` property which is not an empty string and contains a valid UUID. Read the [UUID github README](https://github.com/uuidjs/uuid#readme) docs to see how to do this.

> Stretch goal: Update `createCustomer()` so it returns `false` if `name` is an empty string. Add a test for this.

#### Add a `createdAt` property to the customer

1. Install the [date-fns](https://github.com/date-fns/date-fns) npm module.

2. Add a test for `createCustomer` that confirms it returns an object which has the property `createdAt`. *We haven't implemented the feature yet so this test will fail.*

3. Update `createCustomer()` so it returns an object with a `createdAt` property. For now, just hardcode this to "hello". `createCustomer()` should return something like this:

```json
{
  name: 'alice',
  id: 'f623c358-ec00-445d-adc3-28aa74029991',
  createdAt: 'hello'
}
```

Your tests should now pass.

4. Update the test to check if `customer.createdAt` is a valid date. See [this article](https://geekflare.com/javascript-date-fns/) and [the date-fns isValid function docs](https://date-fns.org/v2.30.0/docs/isValid). 

5. Update `createCustomer()` so that `createdAt` is now today's date in mm/DD/yyy format. See [the date-fns format function docs](https://date-fns.org/v2.30.0/docs/format). `createCustomer()` should return something like this:

```json
{
  name: 'alice',
  id: 'f623c358-ec00-445d-adc3-28aa74029991',
  createdAt: '10/27/2023'
}
```

Your tests should now pass.
