import babel from 'rollup-plugin-babel';

export default {
  input: 'index.js',
  output: {
    file: './devDist/main.js',
    format: 'cjs'
  },
  watch: {
    exclude: 'node_modules/**',
    include: ['src/**','index.js'],
    clearScreen: false
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