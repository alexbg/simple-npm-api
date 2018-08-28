import SimpleNpmApi from '../dist/main.js';

describe("npm node api spec", function() {
  let snp; 
  beforeEach(()=>{
    snp = new SimpleNpmApi();
  });
  it("Check instance of SimpleNpmApi",function(){
    expect(typeof snp).toBe('object');
  });
});