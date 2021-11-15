# LaunchDarkly node SDK x Mock Service Worker authentication issues
This project is a bare bones reproduction of an authentication issue that happens when using the Mock Service worker node library at the same time as the LauchDarkly node library
## Setup
* Aquire a LaunchDarkly sdk key
* Copy the `.env.template` file into a file named `.env`
* Replace the indicated line in the new `.env` file with a LaunchDarkly sdk key
* use the command `npm run testWithoutMSW` to verify that the LaunchDarkly sdk is able to initilize successfully before using MSW

## Tests
There are 3 top level scripts to test different scenarios
* testWithoutMSW - this script intializes the LaunchDarkly SDK without MSW to verify that the Launch Darkly sdk is working before adding MSW
* testWithMSW - this script starts MSW with no handlers which should result in forwarding all requests then attempts to initialize the Launch Darkly SDK
* testWithFullMSWMocks - this scripts starts MSW with handlers for the events and stream endpoints used by the LaunchDarkly SDK when initializing

## Outcomes
when provided with a valid LaunchDarkly sdk key here are the outcomes from running the test scripts
### testWithoutMSW
```
info: [LaunchDarkly] Initializing stream processor to receive feature flag updates
info: [LaunchDarkly] Opened LaunchDarkly stream connection
Finished initializing
```
### testWithMSW
```
info: [LaunchDarkly] Initializing stream processor to receive feature flag updates
[MSW] Warning: captured a request without a matching request handler:

  • POST https://events.launchdarkly.com/diagnostic

If you still wish to intercept this unhandled request, please create a request handler for it.
Read more: https://mswjs.io/docs/getting-started/mocks
[MSW] Warning: captured a request without a matching request handler:

  • GET https://stream.launchdarkly.com/all

If you still wish to intercept this unhandled request, please create a request handler for it.
Read more: https://mswjs.io/docs/getting-started/mocks
error: [LaunchDarkly] Received error 401 (invalid SDK key) for streaming request - giving up permanently
error: [LaunchDarkly] Authentication failed. Double check your SDK key.
Error: Authentication failed. Double check your SDK key.
```