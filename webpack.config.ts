import { Configuration } from "webpack";
import { resolve } from "path";

export default {
  entry: resolve(__dirname, "index.ts"),
  mode: "production",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [{ loader: "ts-loader" }],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    path: resolve(__dirname, "dist"),
    filename: "[name].js",
    libraryTarget: "commonjs2",
  },
  target: "node",
} as Configuration;
