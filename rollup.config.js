const path = require("path");
const buble = require('@rollup/plugin-buble'); 
const typescript = require('@rollup/plugin-typescript');

const resolve = (filePath) => path.resolve(__dirname, filePath);

module.exports = {
  input: resolve("./src/index.ts"),
  output: {
    name: "validate-data-type",
    file: resolve("./index.js"),
    format: "umd",
  },
  plugins: [
    typescript(),
      buble(),
  ],
};
