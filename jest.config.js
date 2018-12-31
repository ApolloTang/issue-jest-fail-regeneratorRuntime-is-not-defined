const {defaults} = require('jest-config');

module.exports = {
  "testEnvironment": 'node',
  "setupFiles": [
    "<rootDir>/jest.init.js"
  ]
}
