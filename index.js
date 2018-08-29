import EventEmitter from 'events';
import PackageController from './src/package/package-controller';
import NpmInstall from './src/commands/install';
import NpmUninstall from './src/commands/uninstall';
import NpmRun from './src/commands/run';
import NpmExec from './src/npm-exec';

class SimpleNpmApi extends EventEmitter{
  constructor(path){
    super();
    if(!NpmExec.hasNpm()){
      return null;
    }
    this.npmPackage = new PackageController();
  }
  /**
   * 
   * @param {object} options
   * @returns promise || installObject Object 
   */
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
   * Return null if you doesn't have that package.
   * @param {object} options
   * @returns null || promise || NpmUninstall Object 
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
    return null;
  }
  /**
   * 
   * @param {object} options
   * @returns promise || runObject Object 
   */
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

export default SimpleNpmApi;