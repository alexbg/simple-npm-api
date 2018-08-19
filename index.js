// import fs from 'fs';
import EventEmitter from 'events';
import PackageController from './src/package/package-controller';
import NpmInstall from './src/commands/install';

class NpmNodeApi extends EventEmitter{
  constructor(path){
    super();
    this.npmPackage = new PackageController();
    console.log(this.npmPackage);
  }
  install(options){
    return new NpmInstall(options);
  }
  uninstall(options){
    
  }
}


let test = new NpmNodeApi();
test.install({
  name: 'json',
  version: '0.0.0',
  global: true
});
export default NpmNodeApi;