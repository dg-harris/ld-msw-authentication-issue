const { setupServer } = require('msw/node');
const testLaunchDarklyInitialization = require('./src/testLaunchDarklyInitialization')

// Start MSW
setupServer().listen();

// Start Launch Darkly client
testLaunchDarklyInitialization();
