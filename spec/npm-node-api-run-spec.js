import SimpleNpmApi from '../dist/main.js';

describe("npm node api spec", function() {
  let snp; 
  beforeEach(()=>{
    snp = new SimpleNpmApi();
  });

  it("Check run without errors",function(){
    let npmRun = snp.run({
      start: false,
      command: 'npm',
      arguments: '-v'
    });
    expect(npmRun.checkErrors(npmRun.options,npmRun.valueTypes)).toBe(true);
  });

  it("Check run with errors",function(){
    let npmRun = snp.run({
      start: false,
      command: 123
    });
    expect(npmRun.checkErrors(npmRun.options,npmRun.valueTypes)).toBe(false);
  });
});