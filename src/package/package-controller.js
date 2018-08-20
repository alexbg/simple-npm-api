import { access, readFileSync } from 'fs';
import EventEmitter from 'events';
const path = require('path');

class PackageController extends EventEmitter{
  constructor(path){
    super();
    if(!path){
      path = './';
    }
    this.npmPackage = JSON.parse(readFileSync(path+'package.json'));
  }

  getPackage(){
    return this.npmPackage;  
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
    return this.npmPackage.dependencies;
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
        version.push(this.npmPackage.dependencies[name]) 
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
  existsPackage(packageInfo){
    console.log(packageInfo);
    let exists = false;

    if(this.npmPackage.dependencies && this.npmPackage.dependencies.hasOwnProperty(packageInfo.name) ||
      this.npmPackage.devDependencies && this.npmPackage.devDependencies.hasOwnProperty(packageInfo.name) ||
      this.npmPackage.optionalDependencies && this.npmPackage.optionalDependencies.hasOwnProperty(packageInfo.name)
    ){
      exists = true;
    }

    if(packageInfo.version && (
      (this.npmPackage.dependencies && this.npmPackage.dependencies.hasOwnProperty(packageInfo.name) && this.npmPackage.dependencies[packageInfo.name] != packageInfo.version) ||
      (this.npmPackage.devDependencies && this.npmPackage.devDependencies.hasOwnProperty(packageInfo.name) && this.npmPackage.devDependencies[packageInfo.name] != packageInfo.version) ||
      (this.npmPackage.optionalDependencies && this.npmPackage.optionalDependencies.hasOwnProperty(packageInfo.name && this.npmPackage.optionalDependencies[packageInfo.name] != packageInfo.version))
    )){
     exists = false;
    }
    return exists;
  }

  existsPackageInDependencies(name){
    if(this.npmPackage.dependencies.hasOwnProperty(name)){
      return true;
    }
    return false;
  }

  existsPackageInDevDependencies(name){
    if(this.npmPackage.devDependencies.hasOwnProperty(name)){
      return true;
    }
    return false;
  }

  existspackageInOptionalDependencies(name){
    if(this.npmPackage.optionalDependencies.hasOwnProperty(name)){
      return true;
    }
    return false;
  }
}

export default PackageController;