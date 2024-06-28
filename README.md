# The joke show

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Dependencies

### Frontend

- Typescript
- React-query
- React-simply-carousel
- React-spinners
- React-error-boundary
- React-Helmet
- Prettier
- Jest

### APIs

https://github.com/15Dkatz/official_joke_api/tree/master

https://icanhazdadjoke.com/

## Known issues

Sometimes a FOUC apperears when loading the carousel component ( https://en.wikipedia.org/wiki/Flash_of_unstyled_content).

## Questions

#### What's a closure? Where in the code is there a closure?

Closure is a programming concept where a function has access to its own scope, including variables, functions, and parameters, as well as the scope in which it was created (its lexical environment). This allows the function to retain access to those variables and values even after the outer function has finished executing. In essence, a closure "closes" over its surrounding state, making it available to inner functions or when the outer function returns.

The function extendResponseValue captures the randomIntFromInterval function from the ../utils module and uses it to generate random votes for each joke in the response data. This makes extendResponseValue a closure because it uses variables (randomIntFromInterval) from its surrounding lexical scope (../utils module) that are not passed in as arguments.

#### Which are the potential side-effects in any function? Could you point out any of these cases in your code? Are they expected? Can they be avoided?

In programming, side-effects refer to observable changes that a function or expression causes outside of its scope, beyond returning a value. These effects can impact the program's state, environment, or other parts of the system. Some common potential side-effects are: Modifying State, Console Output, Network Calls, DOM Manipulation, Error or Event Handling.

The extendResponseValue function modifies each joke object by adding a votes property with a randomly generated value (randomIntFromInterval(1, 100)). This modification alters the state of the joke objects in the response.data array. I think this is expected.

The error logs are expected and can't be avoided in order to debug.
