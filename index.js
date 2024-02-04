const fs = require("fs");

module.exports.handler = async (event) => {
  const dir = event.dir || "/";
  console.log(`[${process.cwd}] listing files in dir: `, dir);
  console.log(fs.readdirSync(dir).join("\n"));
};
