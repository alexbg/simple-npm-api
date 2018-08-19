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

export default NpmNodeApi;

let test = new NpmNodeApi();
// console.log(new NpmNodeApi())
// test.on('loaded',(package)=>{
//   // console.log(package);
//   test.install({
//     'name': 'json',
//     'version': '0.0.0'
//   });
// });
test.install({
      'name': 'json',
      'version': '0.0.0'
    });
// setTimeout(()=>{},3000);
