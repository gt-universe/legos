import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import image from '@rollup/plugin-image';
import json from '@rollup/plugin-json';
//import { terser } from "rollup-plugin-terser";

const packageJson = require("./package.json");

const configuration = {
  input: "./index.ts",
  output: [ // we need to ensure the output in both format to enure the library can be extended across both esm and common js projects
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(), // to ensure not peer dependency is added in the package and taken from the parent project only
    resolve(), // to resolve the dependencies taken from node module
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }), // to ensure the TS config is taken from the config file only
    postcss(), // to use SCSS in the project
    image(), // enable the importing of image
    json() // support importing the JSON
    //  terser(), // to ensure the tree shaking
  ],
};

export default configuration;
