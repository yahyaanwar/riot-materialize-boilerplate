import riot from 'rollup-plugin-riot'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import scss from 'rollup-plugin-scss'
import copy from 'rollup-plugin-copy'

export default {
  input: 'main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife'
  },
  plugins: [
    riot(),
    nodeResolve(),
    commonjs(),
    scss(),
    copy({
      targets: [
        { src: 'index.html', dest: 'dist' },
        { src: 'src/static/**/*', dest: 'dist/static' },
        {
          src: [
            'node_modules/material-icons/iconfont/MaterialIcons-Regular.woff',
            'node_modules/material-icons/iconfont/MaterialIcons-Regular.woff2'
          ], dest: 'dist'
        },
      ]
    })
  ]
}