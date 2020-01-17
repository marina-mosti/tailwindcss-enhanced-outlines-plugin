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

  const offsets = theme('outlineOffset', {
    '0': '0',
    '1': '1px',
    '2': '2px',
    '4': '4px'
  });

  const utils = {};
  const prefix = '.outline';

  if (widths['default'] || styles['default'] || colors['default'] || offsets['default']) {
    utils[prefix] = {};
    if (widths['default']) {
      utils[prefix]['outline-width'] = widths['default'];
    }
    if (styles['default']) {
      utils[prefix]['outline-style'] = styles['default'];
    }
    if (colors['default']) {
      utils[prefix]['outline-color'] = colors['default'];
    }
    if (offsets['default']) {
      utils[prefix]['outline-offset'] = offsets['default'];
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

  for (let offset in offsets) {
    utils[`${prefix}-offset-${offset}`] = {
      'outline-offset': offsets[offset]
    };
  }

  addUtilities(utils, variants('outline'));
};
