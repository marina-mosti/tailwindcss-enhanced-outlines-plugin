# Tailwind CSS Enhanced Outlines Plugin

This plugin adds some more outline classes to Tailwind CSS.
Ability to target colors with `outline-{color}` ie. `outline-red`
Ability to target width with `outline-{width}` ie. `outline-2`
Ability to target style with `outline-{style}` ie. `outline-solid`

## Installation

NPM
`npm install tailwindcss-enhanced-outlines-plugin`

Yarn
`yarn add tailwindcss-enhanced-outlines-plugin`

Add the following code to your `tailwind.config.js` file

```javascript
plugins: [
  ...,
  require('tailwindcss-enhanced-outlines-plugin')
]
```

## Usage

The plugin has some defaults, but to better control your options set the following properties inside your `tailwind.config.js` theme options.

```js
outlineColor: theme => ({
  ...theme('colors')
}),
outlineStyle: {
  default: 'solid',
  solid: 'solid',
  dotted: 'dotted'
},
outlineWidth: {
  default: '4px',
  '0': '0',
  '2': '2px',
  '4': '4px',
  '6': '6px',
  '8': '8px'
},
```

The plugin also exposes a class `outline` that will try to apply the defaults in all 3 configurations, or as they are found.

For example, for this last example.
`outline` = `outline-width: 4px` + `outline-style: solid`

Now apply the classes to the element you're animating.
This plugin supports `variants`, add them to your `variants: {}` property.

```js
outline: ['responsive', 'focus', 'focus-within'],
```

Ex:
`focus-within: outline-blue`
`outline-red md:outline-black lg:outline-yellow`

## Contributions

PRs welcome :)