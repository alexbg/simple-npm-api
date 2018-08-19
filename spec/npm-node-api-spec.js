import PackageController from '../src/package/package-controller';

describe("npm node api spec", function() {
  it("Create npm node api object",function(){
    expect(new PackageController('')).toBe(true);
  });
});