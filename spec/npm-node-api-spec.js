import NpmNodeApi from '../index';

describe("npm node api spec", function() {
  let npmNodeApi; 
  beforeEach(()=>{
    npmNodeApi = new NpmNodeApi();
  });
  it("Check instance of NpmNodeApi",function(){
    expect(typeof npmNodeApi).toBe('object');
  });
});