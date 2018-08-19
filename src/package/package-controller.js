import { access, readFileSync } from 'fs';
import EventEmitter from 'events';

class PackageController extends EventEmitter{
  constructor(path){
    super();
    // this.npmPackage;
    if(!path){
      path = './';
    }
    this.npmPackage = JSON.parse(readFileSync(path+'package.json'));
  }
  getDevDependencies(){
    return this.npmPackage.devDependencies;
  }

  getVersionPackage(){

  }
}

export default PackageController;