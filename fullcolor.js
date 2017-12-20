/*
Copyright 2017 Iris Li

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
'use strict';

let LOWER_HEX_REGEX = /\#[0-9a-f]+/

function fullcolor() {
  let text;
  if (typeof arguments[0] === 'string' || arguments[0] instanceof String) {
    text = arguments[0]
  } else {
    throw new Error('Fullcolor(text, ...) expects text argument to be a string')
  }

  if (arguments.length === 2) {
    let colorString;
    if (typeof arguments[1] === 'string' || arguments[1] instanceof String) {
      colorString = arguments[1];
    } else {
      throw new Error('Fullcolor(text, colorString) expects colorString argument to be a string')
    }

    let rgb = colorToRgb(colorString);
    let r = rgb[0];
    let g = rgb[1];
    let b = rgb[2];

    return '\x1b[38;2;' + r + ';' + g + ';' + b + 'm' + text + '\x1b[0m';
  } else if (arguments.length === 4) {
    let r = arguments[1];
    let g = arguments[2];
    let b = arguments[3];

    if (!Number.isInteger(r) || !Number.isInteger(g) || !Number.isInteger(b)) {
      throw new Error('Fullcolor(text, r, g, b) expects r, g, b values to be integers')
    }

    if ((r < 0 || r > 255) || (g < 0 || g > 255) || (b < 0 || b > 255)) {
      throw new Error('Fullcolor(text, r, g, b) expects r, g, b values to be in range 0-255')
    }

    return '\x1b[38;2;' + r + ';' + g + ';' + b + 'm' + text + '\x1b[0m';
  } else {
    throw new Error('Fullcolor expects either 2 (text, colorString) or 4 (text, r, g, b) arguments')
  }
}

function colorToRgb(colorString) {
  if (colorString[0] === '#') {
    let lowerHex = colorString.toLowerCase();
    if (lowerHex.match(LOWER_HEX_REGEX) === null) {
      throw new Error('Fullcolor expects hex strings to be valid hex (0-9 a-f A-F). Got: ' + colorString)
    }

    if (lowerHex.length === 4) {
      let r = parseInt(lowerHex[1] + lowerHex[1], 16);
      let g = parseInt(lowerHex[2] + lowerHex[2], 16);
      let b = parseInt(lowerHex[3] + lowerHex[3], 16);

      return [r,g,b];
    } else if (lowerHex.length === 7) {
      let r = parseInt(lowerHex[1] + lowerHex[2], 16);
      let g = parseInt(lowerHex[3] + lowerHex[4], 16);
      let b = parseInt(lowerHex[5] + lowerHex[6], 16);

      return [r,g,b];
    } else {
      throw new Error('Fullcolor expects hex strings to be #rgb or #rrggbb.')
    }
  } else {
    throw new Error('Fullcolor doesnt understand the color "' + colorString + '". Expected #rgb or #rrggbb')
  }
}

if (module && module.exports) {
  module.exports = fullcolor;
}
