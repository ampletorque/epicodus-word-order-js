describe('wordOrder', function() {
  it("will count words in a short sentence", function() {
    expect(wordOrder("this this is")).to.eql({this: 2, is: 1});
  });
  it("will count words in a sentence", function() {
    expect(wordOrder("this is a sentence and a sentence sentence is this")).to.eql({this: 2, is: 2, a: 2, sentence: 3, and: 1});
  });
  it("will count words in a sentence with a capital letter", function() {
    expect(wordOrder("This is a sentence and a sentence sentence is this")).to.eql({this: 2, is: 2, a: 2, sentence: 3, and: 1});
  });
});
