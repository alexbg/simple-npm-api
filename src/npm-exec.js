import { execSync } from "child_process";

// import { exec } from 'child_process';

class NpmExec{
  constructor(){
    this.action;
    this.arguments = [];
  }

  static hasNpm(){
    try{
      return execSync('npm -v');
    }catch(error){
      console.log('npm is not installed');
      return false;
    }
  }

  launchExec(){
    let command = ['npm',this.action].concat(this.arguments);
    console.log('COMMNAD: ' + command.join(' '));
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