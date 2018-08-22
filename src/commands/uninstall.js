import NpmExec from '../npm-exec';

class NpmUninstall extends NpmExec{
  constructor(options){
    super();
    this.valueTypes = {
      save: {value: 'string', required: true},
      name: {value: 'string', required: true},
      version: {value: 'string', required: true},
      versionRange: {value: 'object'},
      scope: {value: 'string'},
      global: {value: 'boolean', required: true}
    }
    let defaultOptions = {
      start: true,
      global: false,
      save: 'dev',
      version: 'latest'
    }
    this.options = Object.assign(defaultOptions,options);
  }

  prepareCommand(){
    this.reset();
    this.action = 'uninstall';
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
    if(this.checkErrors(this.options,this.valueTypes)){
      this.prepareCommand();
      return this.launchExec();
    }
    return false;
  }
}

export default NpmUninstall;