import NpmExec from '../npm-exec';

class NpmRun extends NpmExec{
  constructor(options){
    super();
    let defaultOptions = {
      start: true,
      command: false,
      arguments: false
    }
    this.action = 'run';
    this.options = Object.assign(defaultOptions,options);
    this.init();
  }

  init(){
    this.arguments.push(this.options.command);
    if(this.options.arguments && this.options.arguments.length){
      this.arguments = this.arguments.concat(this.options.arguments);
    }
    if(this.options['start']){
      this.launch();
    }
  }

  launch(options){
    console.log('LAUNCH');
    console.log('Options: ');
    console.log(this.options);
    console.log('Action: ' + this.action);
    console.log('Arguments: ' + this.arguments);
    this.launchExec();
  }
}

export default NpmRun;