## javascript-module-template

.

## Installation

- win

```console
git clone https://github.com/shinich39/javascript-module-template.git && cd ./javascript-module-template && rm -r -Force .git
```

- osx

```console
git clone https://github.com/shinich39/javascript-module-template.git && cd ./javascript-module-template && rm -rf .git
```

```console
npm init
```

## Packaging

```js
// package.json
{
	// include module while "npm pack"
	"bundleDependencies": [
		"path",
		"moment"
	]
}
```

```console
npm pack
```

## Usage

Change filename.
- Browser: index-browser.js => index.js
- esm: index-esm.js => index.js
- cjs: index-cjs.js => index.js

```console
npm install my-module-1.0.0.tgz
```

```js
const myModule = require('my-module'); // cjs
import myModule from 'my-module'; // esm
<script type="module" src="index-browser.js"></script> // browser
```

```js
const { sum, test } = myModule;

sum(1, 2);
// 3

test(sum).exec(1, 2);
// function: sum
// arguments[0]: 1
// arguments[1]: 2
// result: 3 [0.00s]
```