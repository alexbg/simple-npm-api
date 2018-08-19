// import fs from 'fs';
import EventEmitter from 'events';
import PackageController from './src/package/package-controller';
import NpmInstall from './src/commands/install';
import NpmExec from './src/npm-exec';

class NpmNodeApi extends EventEmitter{
  constructor(path){
    super();
    if(!NpmExec.hasNpm()){
      return null;
    }
    this.npmPackage = new PackageController();
  }
  install(options){
    return new NpmInstall(options);
  }
  uninstall(options){
    
  }
}


let test = new NpmNodeApi();
// console.log(test.npmPackage.getScripts());
// console.log(test.npmPackage.existsPackage('babel-core'));
// console.log(test.npmPackage.getPackageVersion('babel-core'));
// test.install({
//   name: 'json',
//   version: '0.0.0',
//   global: true
// });
export default NpmNodeApi;