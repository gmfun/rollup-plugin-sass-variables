# rollup-plugin-sass-variables

### Rollup plugin for loading sass/scss variables as javascript object

<a href="LICENSE">
  <img src="https://img.shields.io/badge/license-MIT-brightgreen.svg" alt="Software License" />
</a>
<a href="https://github.com/gmfun/rollup-plugin-sass-variables/issues">
  <img src="https://img.shields.io/github/issues/gmfun/rollup-plugin-sass-variables.svg" alt="Issues" />
</a>
<a href="http://standardjs.com/">
  <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg" alt="JavaScript Style Guide" />
</a>
<a href="https://npmjs.org/package/rollup-plugin-sass-variables">
  <img src="https://img.shields.io/npm/v/rollup-plugin-sass-variables.svg?style=flat-squar" alt="NPM" />
</a>

## Installation
```bash
npm install rollup-plugin-sass-variables -D
// or
yarn add rollup-plugin-sass-variables --dev
```

## Usage
Call the pluglin inside `plugins` array

```js
import scssVariable from 'rollup-plugin-sass-variables'

export default {
  ...
  plugings: [
    ...
    scssVariable()
  ]
}
```

Import `.scss` or `.sass` file like any of the following

```js
import variables from 'variables!../../styles/colors.scss'

import variables from 'sass-variable-loader!../../styles/colors.scss'

import variables from '!!sass-variable-loader!../../styles/colors.scss'

import variables from '!!sass-variable-loader?preserveVariableNames!../../styles/colors.scss'
```
