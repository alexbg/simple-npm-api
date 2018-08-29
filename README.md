# NPM API

[![Build Status](https://travis-ci.com/alexbg/simple-npm-api.svg?branch=master)](https://travis-ci.com/alexbg/simple-npm-api)
[![devDependencies Status](https://david-dm.org/alexbg/simple-npm-api/dev-status.svg)](https://david-dm.org/alexbg/simple-npm-api?type=dev)
[![NpmVersion](https://img.shields.io/npm/v/simple-npm-api.svg)](https://www.npmjs.com/package/@alexbg/simple-npm-api)
[![GitHub](https://img.shields.io/github/license/alexbg/simple-npm-api.svg)](https://github.com/alexbg/simple-npm-api/blob/master/LICENSE)

Simple Npm Api for nodejs

```sh
  npm install simple-npm-api
```

Example:

```javascript
import SimpleNpmApi from 'simple-npm-api'

let sna = new SimpleNpmApi;

sna.install({
  name: 'package name',
  version: 'version package name',
  global: true
}).then((errors)=>{
  if(errors){
    // The command has runned but something happen
    console.log(errors);
  }
}).catch((valueTypesErrors)=>{
  // The parameters you have passed to the install class
  // are not correct, for example if global is not a boolean;
  console.log(valueTypesErrors);
});
```