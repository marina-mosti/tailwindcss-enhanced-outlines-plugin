module.exports = function ({ addUtilities, theme, variants }) {
  // Flatten fn source: https://github.com/30-seconds/30-seconds-of-code
  const flattenObject = (obj, prefix = '', separator = '-') =>
    Object.keys(obj).reduce((acc, k) => {
      const pre = prefix.length ? prefix + separator : '';
      if (typeof obj[k] === 'object') {
        Object.assign(acc, flattenObject(obj[k], pre + k));
      } else acc[pre + k] = obj[k];
      return acc;
    }, {});

  const widths = theme('outlineWidth', {
    '0': '0',
    '2': '2px',
    '4': '4px',
    '6': '6px',
    '8': '8px'
  });

  const styles = theme('outlineStyle', {
    solid: 'solid'
  });

  const colors = flattenObject(theme('outlineColor', {}), '', '-');

  const utils = {};
  const prefix = '.outline';

  if (widths['default'] || styles['default'] || colors['default']) {
    utils['.outline'] = {};
    if (widths['default']) {
      utils['.outline']['outline-width'] = widths['default'];
    }
    if (styles['default']) {
      utils['.outline']['outline-style'] = styles['default'];
    }
    if (colors['default']) {
      utils['.outline']['outline-color'] = colors['default'];
    }
  }

  for (let width in widths) {
    utils[`${prefix}-${width}`] = {
      'outline-width': widths[width]
    };
  }

  for (let style in styles) {
    utils[`${prefix}-${style}`] = {
      'outline-style': styles[style]
    };
  }

  for (let color in colors) {
    utils[`${prefix}-${color}`] = {
      'outline-color': colors[color]
    };
  }

  addUtilities(utils, variants('outline'));
};
