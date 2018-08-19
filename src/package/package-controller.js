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
    return this.npmPackage.version;
  }

  getAuthor(){
    return this.npmPackage.author;
  }

  getScripts(){
    return this.npmPackage.scripts;
  }

  getDependencies(){
    return this.npmPackage.depedencies;
  }

  getMain(){
    return this.npmPackage.main;
  }

  getLicense(){
    return this.npmPackage.license;
  }

  getDescription(){
    return this.npmPackage.description;
  }
  /**
   * @param {string} name 
   * @returns array 
   */
  getPackageVersion(name){
    let version = [];
    if(name){
      if(this.existsPackage(name,'dependencies')){
        version.push(this.npmPackage.depedencies[name]) 
      }
      if(this.existsPackage(name,'devDependencies')){
        version.push(this.npmPackage.devDependencies[name]);
      }
      if(this.existsPackage(name,'optionalDependencies')){
        version.push(this.npmPackage.optionalDependencies[name]);
      }
    }
    return version;
  }
  /**
   * 
   * @param {string} name
   * @param {string} where
   * @returns boolean
   */
  existsPackage(name,where){
    let exists = false;
    if(where){
      if(this.npmPackage[where] && this.npmPackage[where].hasOwnProperty(name)){
        exists = true;
      }
    }else{
      if(this.npmPackage.depedencies && this.npmPackage.depedencies.hasOwnProperty(name) ||
        this.npmPackage.devDependencies && this.npmPackage.devDependencies.hasOwnProperty(name) ||
        this.npmPackage.optionalDependencies && this.npmPackage.optionalDependencies.hasOwnProperty(name)
      ){
        exists = true;
      }
    }
    return exists;
  }
}

export default PackageController;