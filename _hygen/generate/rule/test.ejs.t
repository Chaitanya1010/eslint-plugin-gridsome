---
to: tests/lib/rules/<%= name %>.js
---
"use strict";

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------
var rule = require("../../../lib/rules/<%= name %>");
var RuleTester = require("eslint").RuleTester;

// ------------------------------------------------------------------------------
// Settings
// ------------------------------------------------------------------------------
var tester = new RuleTester({
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: 2015
  }
});

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------
tester.run("<%= name %>", rule, {
  valid: [
    {
      code: ``
    }
  ],
  invalid: [
    {
      code: ``,
      output: ``,
      errors: [""]
    }
  ]
});
