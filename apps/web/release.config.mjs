import sharedConfig from "release-config";
import { name } from "./package.json";

export default {
  ...sharedConfig,
  tagFormat: `${name}@\${version}`,
};
