const chai = window.chai;
const expect = chai.expect;

describe("test", () => {
  it("should test properly", () => {
    expect(testFunc(3)).to.deep.equal(6);
  });
});

// mocha chai tests
