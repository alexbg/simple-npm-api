import { execSync, exec } from "child_process";

class NpmExec{
  constructor(){
    this.action;
    this.arguments = [];
    this.required = {}
    this.errors = {}
  }

  static hasNpm(){
    try{
      return execSync('npm -v');
    }catch(error){
      console.log('npm is not installed');
      return false;
    }
  }

  checkErrors(options,valueTypes){
    let isValid = true;
    Object.keys(valueTypes).forEach((key)=>{
      if(!options.hasOwnProperty(key) && valueTypes[key].required){
        isValid = false;
        this.errors[key] = 'required';
      }else if((options.hasOwnProperty(key) && typeof options[key] != valueTypes[key].value)){
        isValid = false;
        this.errors[key] = 'must be ' + valueTypes[key].value;
      }
    });
    return isValid;
  }

  reset(){
    this.arguments = [];
  }
  /**
   * @returns boolean
   */
  launchExec(resolve){
    // console.log(resolve);
    this.errors = false;
    let command = ['npm',this.action].concat(this.arguments);
    console.log('COMMNAD: ' + command.join(' '));
    exec(command.join(' '),(error,stdout,stderr)=>{
      if(error){
        resolve(stderr);
      }
    });
  }
}

export default NpmExec; 