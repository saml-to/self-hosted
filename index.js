var _getAllFilesFromFolder = function (dir) {
  var filesystem = require("fs");
  var results = [];

  filesystem.readdirSync(dir).forEach(function (file) {
    file = dir + "/" + file;
    var stat = filesystem.statSync(file);

    if (stat && stat.isDirectory()) {
      results = results.concat(_getAllFilesFromFolder(file));
    } else results.push(file);
  });

  return results;
};

module.exports.handler = async (event) => {
  const dir = event.dir || "/";
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: JSON.stringify(_getAllFilesFromFolder(dir)),
        input: event,
      },
      null,
      2
    ),
  };
};
