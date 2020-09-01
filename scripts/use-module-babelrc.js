const fs = require('fs')
const path = require('path')

const originalBabelRC = fs
  .readFileSync(path.join(__dirname, '../.babelrc'))
  .toString()

fs.writeFileSync(path.join(__dirname, '../.babelrc_backup'), originalBabelRC)

const esBabelRC = {
  presets: [
    "@babel/env",
    "@babel/react"
  ],
  plugins: [
    "@babel/plugin-proposal-export-default-from",
    "@babel/plugin-proposal-class-properties",
    [
      'transform-rename-import',
      {
        'original': 'lodash',
        'replacement': 'lodash-es',
      },
    ],
  ],
}

fs.writeFileSync(path.join(__dirname, '../.babelrc'), JSON.stringify(esBabelRC))
