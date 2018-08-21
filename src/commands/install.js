import NpmExec from '../npm-exec';

class NpmInstall extends NpmExec{
  constructor(options){
    super();
    this.required = {
      save: 'string',
      name: 'string'
    }
    let defaultOptions = {
      start: true,
      global: false,
      save: 'dev',
      version: 'latest',
      versionRange: false,
      scope: false
    }
    this.action = 'install';
    this.options = Object.assign(defaultOptions,options);
  }

  prepareCommand(){
    this.reset();
    this.action = 'install';
    this.setVersion();
    this.setSaveMode();
    this.setGlobal();
    this.arguments.push(this.options.command);
    if(this.options.arguments && this.options.arguments.length){
      this.arguments = this.arguments.concat(this.options.arguments);
    }
  }

  setVersion(){
    let version = this.options.version;
    let name = this.options.name;
    if(typeof version == 'object'){
      version = this.getVersionRange(version);
    }
    if(this.options.scope){
      name = this.options.scope+'/'+this.options.name;
    }
    this.arguments.push(name+'@'+version);
  }

  setGlobal(){
    if(this.options.global){
      this.arguments.push('--global');
    }
  }

  getVersionRange(version){
    let finalVersion;
    finalVersion = '>='+version.minor+' ';
    finalVersion += '<='+version.mayor;
    return '"'+finalVersion+'"';
  }

  setSaveMode(){
    if(this.options.save){
      this.arguments.push('--save-'+this.options.save);
    }else{
      this.arguments.push('--no-save');
    }
  }

  launch(options){
    // console.log('LAUNCH');
    // console.log('Options: ');
    // console.log(this.options);
    // console.log('Action: ' + this.action);
    // console.log('Arguments: ' + this.arguments);
    if(this.requiredOptions(this.options,this.required)){
      this.prepareCommand();
      return this.launchExec();
    }
    return false;
  }
}

export default NpmInstall;