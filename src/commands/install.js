import NpmExec from '../npm-exec';

class NpmInstall extends NpmExec{
  constructor(options){
    super();
    let defaultOptions = {
      start: true,
      global: false,
      save: 'dev',
      version: 'latest',
      versionRange: false
    }
    this.action = 'install';
    this.options = Object.assign(defaultOptions,options);
    this.init();
  }

  init(){
    this.setVersion();
    this.setSaveMode();
    if(this.options['start']){
      this.launch();
    }
  }

  setVersion(){
    let version = this.options.version;
    if(typeof version == 'object'){
      version = this.getVersionRange(version);
    }
    this.arguments.push(this.options.name+'@'+version);
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
    console.log('LAUNCH');
    console.log(this.action);
    console.log(this.arguments);
    this.launchExec();
  }
}

export default NpmInstall;