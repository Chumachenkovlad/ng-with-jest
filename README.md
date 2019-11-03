# ANGULAR WITH JEST

this repo shows how to handle some specific issues
related to the setting jest for angular

## moment

change imports from

```
import \* as moment from 'moment';
```

to

```
import moment from 'moment';
```

add next line to the tsconfig.json

and add next line to tsconfig.json (compilerOptions)

```
"allowSyntheticDefaultImports": true
```

## lodash-es

update jest.config.js with

```
transformIgnorePatterns: ["node_modules/(?!lodash-es)"],
transform: {
  "^.+\\.(ts|html)$": "ts-jest",
  "^.+\\.js$": "babel-jest"
}
```

add babel.config.js with

```
module.exports = function(api) {
  api.cache(true);

  const presets = ["@babel/preset-env"];
  const plugins = [];

  return {
    presets,
    plugins
  };
};
```

install babel preset with

> npm i --save-dev @babel/preset-env
