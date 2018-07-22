import { main, module, dependencies } from './package.json'

export default {
  input: 'src/index.js',
  output: [{ file: main, format: 'cjs' }, { file: module, format: 'es' }]
}