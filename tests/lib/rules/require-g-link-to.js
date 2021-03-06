"use strict";

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------
var rule = require("../../../lib/rules/require-g-link-to");
var RuleTester = require("eslint").RuleTester;

// ------------------------------------------------------------------------------
// Settings
// ------------------------------------------------------------------------------
var tester = new RuleTester({
  parser: require.resolve("vue-eslint-parser"),
  parserOptions: {
    ecmaVersion: 2015
  }
});

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------
tester.run("require-g-link-to", rule, {
  valid: [
    {
      code: `
      <template>
        <g-link
          to="/"
          class="foo"
        >
        link is here
        </g-link>
      </template>`
    },
    {
      code: `
      <template>
        <g-link
          :to="article.path"
          class="foo"
        >
        link is here
        </g-link>
      </template>`
    },
    {
      code: `
      <template>
        <g-link
          :to="{ name: 'about' }"
          class="foo"
        >
        link is here
        </g-link>
      </template>`
    },
    {
      code: `
      <template>
        <g-link
          href="http://www.example.com"
          class="foo"
        >
        link is here
        </g-link>
      </template>`
    },
    {
      code: `
      <template>
        <g-link
          href="https://www.example.com"
          class="foo"
        >
        link is here
        </g-link>
      </template>`
    },
    {
      code: `
      <template>
        <g-link
          :href="absolute.url"
          class="foo"
        >
        link is here
        </g-link>
      </template>`
    }
  ],
  invalid: [
    {
      code: `
      <template>
        <g-link
          class="foo"
        >
        link is here
        </g-link>
      </template>`,
      errors: [
        "Expected '<g-link>' elements to have 'v-bind:to', 'to' or 'v-bind:href', 'href'."
      ]
    }
  ]
});
