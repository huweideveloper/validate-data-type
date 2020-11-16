const path = require("path");
const typescript = require('@rollup/plugin-typescript');
const buble = require("@rollup/plugin-buble");
import {terser} from 'rollup-plugin-terser';
const resolve = (filePath) => path.resolve(__dirname, filePath);

module.exports = {
  input: resolve("./src/index.ts"),
  output: {
    name: "validate-data-type",
    file: resolve("./index.js"),
    format: "umd",        //amd", "cjs", "system", "es", "iife" or "umd"
  },
  plugins: [
    typescript(),
    buble(),
    terser()
  ],
};
