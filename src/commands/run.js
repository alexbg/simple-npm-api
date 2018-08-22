import NpmExec from '../npm-exec';

class NpmRun extends NpmExec{
  constructor(options){
    super();
    this.valueTypes = {
      command: {value: 'string', required: true},
      arguments: {value: 'string'}
    }
    let defaultOptions = {
      start: true
    }
    this.options = Object.assign(defaultOptions,options);
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
    if(this.checkErrors(this.options,this.valueTypes)){
      this.prepareCommand();
      return this.launchExec();
    }
    return false;
  }
}

export default NpmRun;