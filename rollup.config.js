const { resolve } = require("path");
const buble = require("@rollup/plugin-buble");
import { terser } from "rollup-plugin-terser";

module.exports = {
  input: resolve(__dirname, "./src/index.js"),
  output: {
    name: "dataType",
    file: resolve("./index.js"),
    format: "umd",
  },
  plugins: [
    buble(),
    terser(),
  ],
};
