// import { exec } from 'child_process';

class NpmExec{
  constructor(){
    this.action;
    this.arguments = [];
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