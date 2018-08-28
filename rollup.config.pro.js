import babel from 'rollup-plugin-babel';

export default {
  input: 'index.js',
  output: {
    file: './dist/main.js',
    format: 'esm'
  },
  plugins: [babel({
    exclude: 'node_modules/**' // only transpile our source code
  })],
  external: [
    'child_process',
    'events',
    'fs'
  ]
}