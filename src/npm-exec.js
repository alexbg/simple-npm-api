import { execSync } from "child_process";

// import { exec } from 'child_process';

class NpmExec{
  constructor(){
    this.action;
    this.arguments = [];
    this.required = {}
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
      }
      if((options.hasOwnProperty(key) && typeof options[key] != valueTypes[key].value)){
        isValid = false;
      }
    });
    return isValid;
  }

  reset(){
    this.arguments = [];
  }

  launchExec(){
    let command = ['npm',this.action].concat(this.arguments);
    console.log('COMMNAD: ' + command.join(' '));
    return true;
    // exec(command.join(' '),(error,stdout,stderr)=>{
    //   if(error){
    //     // console.log(error);
    //     console.log(stderr);
    //   }
    //   // console.log(stdout);
    // });
  }
}

export default NpmExec; 