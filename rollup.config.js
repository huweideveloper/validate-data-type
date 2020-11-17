const { resolve } = require("path");
import commonjs from "@rollup/plugin-commonjs";
const buble = require("@rollup/plugin-buble");
import { terser } from "rollup-plugin-terser";


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
