import typescript from "rollup-plugin-typescript2";
import linaria from "linaria/rollup";
import css from "rollup-plugin-css-only";

export default {
  input: "./src/index.tsx",
  output: {
    file: "./dist/bundle.js",
    format: "cjs"
  },
  external: ["react"],
  plugins: [
    typescript(),
    linaria({ sourceMap: process.env.NODE_ENV !== "production" }),
    css({
      output: "styles.css"
    })
  ]
};
