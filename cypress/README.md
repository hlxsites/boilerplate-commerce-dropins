# Running Storefront Cart UI Tests

## Setup Option 1

1. Clone the repo and change directory to storefront-cart/cypress
2. Run `yarn install`

Note - Following command expects local server is running at http://127.0.0.1:3000/. If you need to run cypress on CI deployed url then replace http://127.0.0.1:3000/ to respective CI deployed URL and then run below command.

3. Run `yarn test`
4. Click on E2E Testing in cypress UI window.
5. Click on Start E2E Testing on Chrome button.
5. Now select respective test to Run from Cypress UI.

Note - Following command expects local server is running at http://127.0.0.1:3000/.

5. All tests can also be ran with `yarn test:cli`

## Setup Option 2
1. Clone the repo

Note - Following commands expects local server is not running at http://127.0.0.1:3000/. If its running you can just kill it and then continue with running command.

2. Run `yarn cypress:local`
3. Click on E2E Testing in cypress UI window.
4. Click on Start E2E Testing on Chrome button.
5. Now select respective test to Run from Cypress UI.