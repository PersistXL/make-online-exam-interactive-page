let fs = require("fs");

describe('main()', () => {

    it('should pass', () => {
      expect(fs.statSync("spec/index.html").isFile()).toBe(true);
    });

});
