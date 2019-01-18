import fs from "fs";

let result: any;
const configFile = `config/${process.env.NODE_ENV || ""}.env`;
if (fs.existsSync(configFile)) {
  result = require("dotenv").config({ path: configFile });
  if (result.error) {
    throw result.error;
  }
}

export default { result };
