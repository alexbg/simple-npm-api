import NpmNodeApi from '../index';

describe("npm node api spec", function() {
  let npmNodeApi; 
  beforeEach(()=>{
    npmNodeApi = new NpmNodeApi();
  });

  it("Check install without errors",function(){
    let npmInstall = npmNodeApi.install({
      start: false,
      name: 'json'
    });
    expect(npmInstall.checkErrors(npmInstall.options,npmInstall.valueTypes)).toBe(true);
  });

  it("Check install with errors",function(){
    let npmInstall = npmNodeApi.install({
      start: false,
      name: 123
    });
    expect(npmInstall.checkErrors(npmInstall.options,npmInstall.valueTypes)).toBe(false);
  });
});