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
    return new NpmInstall(options);
  }
  uninstall(options){
    if(this.npmPackage.hasPackage(options)){
      return new NpmUninstall(options);
    }
    return null;
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
console.log(test.run({command: 'dsadsa'}));

export default NpmNodeApi;