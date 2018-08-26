import NpmNodeApi from '../dist/main.js';

describe("npm node api spec", function() {
  let npmNodeApi; 
  beforeEach(()=>{
    npmNodeApi = new NpmNodeApi();
  });

  it("Check uninstall without errors",function(){
    let npmUninstall = npmNodeApi.uninstall({
      start: false,
      name: 'jasmine'
    });
    expect(npmUninstall.checkErrors(npmUninstall.options,npmUninstall.valueTypes)).toBe(true);
  });

  it("Check uninstall with errors",function(){
    let npmUninstall = npmNodeApi.uninstall({
      start: false,
      name: 'jasmine',
      global: 1234
    });
    expect(npmUninstall.checkErrors(npmUninstall.options,npmUninstall.valueTypes)).toBe(false);
  });

  it("Check uninstall without real package",function(){
    let npmUninstall = npmNodeApi.uninstall({
      start: false,
      name: 1234
    });
    expect(npmUninstall).toBe(null);
  });
});