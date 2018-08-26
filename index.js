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
      return new Promise((resolve,reject)=>{
        installObject.launch().then((errors)=>{
          resolve(errors);
        }).catch((valueTypesErrors)=>{
          reject(valueTypesErrors);
        });
      });
    }else{
      return installObject;
    }
  }
  /**
   * if it can create and launch the command, then it returns true
   * if it can launch the command but it doesn't have start to true, it returns a NpmUninstall Object
   * @param {object} options
   * @returns boolean || NpmUninstall Object 
   */
  uninstall(options){
    if(this.npmPackage.hasPackage(options)){
      let uninstallObject = new NpmUninstall(options);
      if(uninstallObject.options.start){
        return new Promise((resolve,reject)=>{
          uninstallObject.launch().then((errors)=>{
            resolve(errors);
          }).catch((valueTypesErrors)=>{
            reject(valueTypesErrors);
          });
        });
      }else{
        return uninstallObject;
      }
    }
    return false;
  }
  run(options){
    let runObject = new NpmRun(options);
    if(runObject.options.start){
      return new Promise((resolve,reject)=>{
        runObject.launch().then((errors)=>{
          resolve(errors);
        }).catch((valueTypesErrors)=>{
          reject(valueTypesErrors);
        });
      });
    }else{
      return runObject;
    }
  }
}


let test = new NpmNodeApi();

export default NpmNodeApi;