import NpmExec from '../npm-exec';

class NpmRun extends NpmExec{
  constructor(options){
    super();
    this.required = {
      command: 'string'
    }
    let defaultOptions = {
      start: true,
      command: false,
      arguments: false
    }
    this.options = Object.assign(defaultOptions,options);
    this.requiredOptions(this.options,this.required);
  }

  prepareCommand(){
    this.reset();
    this.action = 'run';
    this.arguments.push(this.options.command);
    if(this.options.arguments && this.options.arguments.length){
      this.arguments = this.arguments.concat(this.options.arguments);
    }
  }

  launch(options){
    // console.log('LAUNCH');
    // console.log('Options: ');
    // console.log(this.options);
    // console.log('Action: ' + this.action);
    // console.log('Arguments: ' + this.arguments);
    if(this.canRun || this.requiredOptions(this.options,this.required)){
      this.prepareCommand();
      return this.launchExec();
    }
  }
}

export default NpmRun;