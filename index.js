// import fs from 'fs';
import EventEmitter from 'events';
import PackageController from './src/package/package-controller';
import NpmInstall from './src/commands/install';
import NpmUninstall from './src/commands/uninstall';
import NpmExec from './src/npm-exec';

class NpmNodeApi extends EventEmitter{
  constructor(path){
    super();
    if(!NpmExec.hasNpm()){
      return null;
    }
    // console.log(__dirname);
    this.npmPackage = new PackageController();
  }
  install(options){
    return new NpmInstall(options);
  }
  uninstall(options){
    if(this.npmPackage.existsPackage(options)){
      return new NpmUninstall(options);
    }
    return null;
  }
}


let test = new NpmNodeApi();
export default NpmNodeApi;