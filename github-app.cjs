module.exports.GH_APP_URL = process.env[`GH_APP_URL`];
module.exports.GH_APP_ID = process.env[`GH_APP_ID`];
module.exports.GH_CLIENT_ID = process.env[`GH_CLIENT_ID`];
module.exports.GH_APP_SECRETS = JSON.stringify({
  [`GITHUB_${process.env[`GH_CLIENT_ID`]}`]: process.env[`GH_CLIENT_SECRET`],
  [`GITHUB_PRIVATE_KEY_${process.env[`GH_APP_ID`]}`]: Buffer.from(
    process.env[`GH_PRIVATE_KEY`]
  ).toString(`base64`),
  [`GITHUB_WEBHOOK_SECRET_${process.env[`GH_APP_ID`]}`]:
    process.env[`GH_WEBHOOK_SECRET`],
});
