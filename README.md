# Fullcolor: A minimalist 24-bit color module for Node.js

Use full [24-bit colors](https://en.wikipedia.org/wiki/Color_depth#True_color_(24-bit)) in Node.js! This module makes it simple to use and has zero dependencies.

![image](https://user-images.githubusercontent.com/5728307/34231573-71ff3666-e591-11e7-97d9-d3cb3bb4adcd.png)

## Installation
```sh
npm install fullcolor
# Alternatively:
# yarn install fullcolor
```

### In your node.js file, include the module
```js
const fullcolor = require('fullcolor');
```

## API
The `fullcolor` function simply adds escape sequences and returns the text as a string. The first argument is always the text you want to color. This also only changes the text color and not the background.

## Install

### fullcolor(text, colorString)
As of right now, only hex values are accepted for colorString.
```js
const fullcolor = require('fullcolor');

console.log(fullcolor('Let there be colors!', '#66ccff'));
console.log(fullcolor('Let there be colors!', '#6cf'));
```

### fullcolor(text, r, g, b)
The values r,g,b must be integers from 0 to 255.

```js
const fullcolor = require('fullcolor');

console.log(fullcolor('Let there be colors!', 102, 204, 255));
```

## So simple, you might not even need to use it!
If you simply want to print a few different colors to the terminal, you might not even need this module! Just copy and paste this snippet:

```js
// Settings in this example:
// text = 'TEXT GOES HERE'
// r = 102
// g = 204
// b = 255
console.log('\x1b[38;2;102;204;255mTEXT GOES HERE\x1b[0m')

// If you use fullcolor, it becomes:
console.log(fullcolor('TEXT GOES HERE', 102, 204, 255))

// If you don't use fullcolor, I'm still happy that you read this.
// I hope this was helpful and hope that I helped you avoid adding a dependency.
// Also, a GitHub star is appreciated ;)
```

But if you do want a lightweight abstraction, then this module might be for you!

## Simple and clean
No side effects. No state. No singletons. Does not monkeypatch or mutate anything.

## No dependencies. Ever.
No dependencies. Never will have dependencies. Except of course JavaScript. This might even work in the browser as-is (this doesn't even use Node.js standard libraries), but I'm not sure how useful that'll be.

Why? This is a simple tool that adds a few characters to a string. That's it. Dependencies shouldn't be needed for something this simple. Each dependency is a potential security liability and another thing to maintain.

## Versioning
Will follow semver. Major version every time a breaking change is introduced. Minor version on new features. Changes within a major version (e.g. `2.x` and `2.y`; `y > x`) will be backward compatible.

## License
Licensed under Apache-2.0. Written and copyright by Iris Li.

## Further information
I learned most my truecolor stuff from this awesome gist: [https://gist.github.com/XVilka/8346728](https://gist.github.com/XVilka/8346728)

