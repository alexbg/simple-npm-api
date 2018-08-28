import SimpleNpmApi from '../dist/main.js';

describe("npm node api spec", function() {
  let snp; 
  beforeEach(()=>{
    snp = new SimpleNpmApi();
  });

  it("Check install without errors",function(){
    let npmInstall = snp.install({
      start: false,
      name: 'json'
    });
    expect(npmInstall.checkErrors(npmInstall.options,npmInstall.valueTypes)).toBe(true);
  });

  it("Check install with errors",function(){
    let npmInstall = snp.install({
      start: false,
      name: 123
    });
    expect(npmInstall.checkErrors(npmInstall.options,npmInstall.valueTypes)).toBe(false);
  });
});