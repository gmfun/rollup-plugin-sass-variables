# rollup-plugin-sass-variables

Rollup plugin for loading sass/scss variables as javascript object

### Installation
```bash
npm install rollup-plugin-sass-variables -D
// or
yarn add rollup-plugin-sass-variables --dev
```

### Usage
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

Import `.scss` or `.sass` file like the following

```js
import variables from 'variable!../../styles/colors.scss'
```
