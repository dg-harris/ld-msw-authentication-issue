const { setupServer } = require("msw/node");
const { rest } = require("msw");
const testLaunchDarklyInitialization = require("./src/testLaunchDarklyInitialization");

// Start MSW
setupServer(
  ...[
    rest.post(
      "https://events.launchdarkly.com/diagnostic",
      async (req, res, ctx) => {
        // Uncomment to reference the original response inside the mock
        // const originalResponse = await ctx.fetch(req)

        // intentionally not returning anything here so MSW uses the original response
        return
      }
    ),
    rest.get("https://stream.launchdarkly.com/all", async (req, res, ctx) => {
      // Uncomment to reference the original response inside the mock
      // const originalResponse = await ctx.fetch(req)

      // intentionally Not returning anything here so MSW uses the original response
      return
    }),
  ]
).listen();

// Start Launch Darkly client
testLaunchDarklyInitialization();
