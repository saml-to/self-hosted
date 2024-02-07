module.exports.GH_APP_URL = process.env[`GH_APP_URL`];
module.exports.GH_APP_ID = process.env[`GH_APP_ID`];
module.exports.GH_CLIENT_ID = process.env[`GH_CLIENT_ID`].toUpperCase();

module.exports.SECRETS = JSON.stringify({
  [`GITHUB_${module.exports.GH_CLIENT_ID.replace(".", "_")}`]:
    process.env[`GH_CLIENT_SECRET`],
  [`GITHUB_CLIENT_ID_${process.env[`GH_APP_ID`]}`]: process.env[`GH_CLIENT_ID`],
  [`GITHUB_PRIVATE_KEY_${process.env[`GH_APP_ID`]}`]: Buffer.from(
    process.env[`GH_PRIVATE_KEY`]
  ).toString(`base64`),
  [`GITHUB_WEBHOOK_SECRET_${process.env[`GH_APP_ID`]}`]:
    process.env[`GH_WEBHOOK_SECRET`],
});

module.exports.AUTH_VERSION = 6;
module.exports.GITHUB_VERSION = 22;
