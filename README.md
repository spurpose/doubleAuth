# doubleAuth

## a feature request

The Firebase sdk handles submitting the token from a browser cache if
the client has authenticated before. This is across sessions if the token
is configured to have a sufficient ttl.

This is certainly a good feature.

In react-native there is no browser cache, the solution is for the developer
to manage the caching of the token themselves. This is not an issues since
AsyncLocalStorage is available and token management is just a few lines of 
code.

For react-native, one of the development modes is to work with the javascript
loaded into Chrome. This way one can take advantage of the tooling inside of 
Chrome.

However, when the javascript runs in Chrome the Firebase sdk utilizes it's token
caching code (since it's in the browser now) and any react-native app's code still
runs too. This causes a double onAuth() call with authenticated data. I believe that
it is a typical pattern to setup firebase.on() observers inside of the onAuth() callback.
In a typical react-native dev environment this will now happen twice.

It would be a nice feature to have the option to "turn off" the sdk's token caching and call to
authWithCustomToken() call.

To replicate this, run the app in the simulator. hit CMD-D and Debug-In-Chrome. CMD-R and see the two
auth log messages. [First time through authData should be null and then authenticated. Second time through (since
the token has been cached on succesful auth) it should be authData, authData]. 

Note: this doesn't happen if only debug in XCode. Log messages will be null, authData.
