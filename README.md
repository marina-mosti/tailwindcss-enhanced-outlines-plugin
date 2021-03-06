# Tailwind CSS Enhanced Outlines Plugin (for Tailwind 2.x)

This plugin adds some more outline classes to Tailwind CSS.

- Ability to target colors with `outline-{color}` ex. `outline-red`
- Ability to target width with `outline-{width}` ex. `outline-2`
- Ability to target style with `outline-{style}` ex. `outline-solid`
- Ability to target offset with `outline-offset-{offset}` ex. `outline-offset-2`

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
outlineOffset: {
  '0': '0',
  '1': '1px',
  '2': '2px',
  '4': '4px'
}
```

The plugin also exposes a class `outline` that will try to apply the defaults in all 4 configurations, or as they are found.

For example, if you have a default value `4px` for width, and a default value `solid` for style (as the example configuration above), Tailwind will compile `outline` like so:

`outline` = `outline-width: 4px` + `outline-style: solid`

Now, if you apply `outline` to an element, you will get the width of `4px` and style of `solid` bundled up.

This plugin supports `variants`, add them to your `variants: {}` property.

```js
outline: ['responsive', 'focus', 'focus-within'],
```

Ex:
`focus:outline-2`
`focus-within:outline-blue`
`outline-red md:outline-black lg:outline-yellow`

## Contributions

PRs welcome :)