import { PackerSync } from "./PackerSync.js";
import { ParserSync } from "./ParserSync.js";

export function read(buffer, options) {
  return ParserSync(buffer, options || {});
};

export function write(png, options) {
  return PackerSync(png, options);
};
