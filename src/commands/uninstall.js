import NpmExec from '../npm-exec';

class NpmUninstall extends NpmExec{
  constructor(options){
    super();
    this.valueTypes = {
      save: {value: 'string', required: true},
      name: {value: 'string', required: true},
      version: {value: 'string'},
      versionRange: {value: 'object'},
      scope: {value: 'string'},
      global: {value: 'boolean', required: true}
    }
    let defaultOptions = {
      start: true,
      save: 'dev',
      global: false
    }
    this.options = Object.assign(defaultOptions,options);
  }

  prepareCommand(){
    super.prepareCommand();
    this.action = 'uninstall';
    this.setSaveMode();
    this.setGlobal();
    this.setName();
    this.arguments.push(this.options.command);
    if(this.options.arguments && this.options.arguments.length){
      this.arguments = this.arguments.concat(this.options.arguments);
    }
  }

  setVersion(){
    if(this.options.version){
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
  }

  setName(){
    if(this.options.version){
      this.setVersion();
    }else{
      let name = this.options.name;
      if(this.options.scope){
        name = this.options.scope+'/'+this.options.name;
      }
      this.arguments.push(name);
    }
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

  launch(){
    // console.log('LAUNCH');
    // console.log('Options: ');
    // console.log(this.options);
    // console.log('Action: ' + this.action);
    // console.log('Arguments: ' + this.arguments);
    return new Promise((resolve,reject)=>{
      if(this.checkErrors(this.options,this.valueTypes)){
        this.prepareCommand();
        this.launchExec(resolve);
      }else{
        reject(this.errors);
      }
    });
  }
}

export default NpmUninstall;