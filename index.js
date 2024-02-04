const fs = require("fs");

module.exports.handler = async (event) => {
  const dir = event.dir || "/";
  console.log("listing files in dir: ", dir);
  return fs.readdirSync(dir).join("\n");
};
