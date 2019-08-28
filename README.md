# Tailwind CSS Enhanced Outlines Plugin

This plugin adds some more outline classes to Tailwind CSS.
Ability to target colors with `outline-{color}` ie. `outline-red`
Ability to target width with `outline-{width}` ie. `outline-2`
Ability to target style with `outline-{style}` ie. `outline-solid`

## Installation

`npm install tailwindcss-enhanced-outlines-plugin`

or 

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
  solid: 'solid'
},
outlineWidth: {
  '0': '0',
  '2': '2px',
  '4': '4px',
  '6': '6px',
  '8': '8px'
},
```

Now apply the classes to the element you're animating.
This plugin supports `variants`, and will use the same set as the regular `outline` variants:

```js
outline: ['responsive', 'focus', 'focus-within'],
```

## Contributions

PRs welcome