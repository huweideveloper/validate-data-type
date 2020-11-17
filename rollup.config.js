const { resolve } = require("path");
const commonjs =  require("@rollup/plugin-commonjs");
const buble = require("@rollup/plugin-buble");
const { terser } =  require("rollup-plugin-terser");


module.exports = {
  input: resolve(__dirname, "./src/index.js"),
  output: {
    name: "dataType",
    file: resolve(__dirname, "./index.js"),
    format: "umd",
  },
  plugins: [
    commonjs(),
    buble(),
    terser(),
  ],
};
