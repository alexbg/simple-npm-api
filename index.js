// import fs from 'fs';
import EventEmitter from 'events';
import PackageController from './src/package/package-controller';
import NpmInstall from './src/commands/install';
import NpmUninstall from './src/commands/uninstall';
import NpmRun from './src/commands/run';
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
    let installObject = new NpmInstall(options);
    if(installObject.options.start){
      return installObject.launch();
    }
    return installObject;
  }
  uninstall(options){
    if(this.npmPackage.hasPackage(options)){
      let uninstallObject = new NpmUninstall(options);
      if(uninstallObject.options.start){
        return uninstallObject.launch();
      }
      return uninstallObject;
    }
    return false;
  }
  run(options){
    let runObject = new NpmRun(options);
    if(runObject.options.start){
      return runObject.launch();
    }
    return runObject;
  }
}


let test = new NpmNodeApi();
export default NpmNodeApi;