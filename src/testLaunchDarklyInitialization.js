require("dotenv").config();
const LaunchDarkly = require("launchdarkly-node-server-sdk");

const testLaunchDarklyInitialization = () => {
  const client = LaunchDarkly.init(process.env.LAUNCHDARKLY_SDK_KEY);
  client.waitForInitialization().then(() => {
    console.log("Finished initializing");
    process.exit(0);
  }).catch((e) => {
    console.error(e);
    process.exit(1);
  })
};

module.exports = testLaunchDarklyInitialization;
