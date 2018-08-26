import NpmNodeApi from '../dist/main.js';

describe("npm node api spec", function() {
  let npmNodeApi; 
  beforeEach(()=>{
    npmNodeApi = new NpmNodeApi();
  });

  it("Check run without errors",function(){
    let npmRun = npmNodeApi.run({
      start: false,
      command: 'npm',
      arguments: '-v'
    });
    expect(npmRun.checkErrors(npmRun.options,npmRun.valueTypes)).toBe(true);
  });

  it("Check run with errors",function(){
    let npmRun = npmNodeApi.run({
      start: false,
      command: 123
    });
    expect(npmRun.checkErrors(npmRun.options,npmRun.valueTypes)).toBe(false);
  });
});