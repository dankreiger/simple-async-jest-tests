const googleSearch = require('./script');

dbMock = ['dog.com', 'cheesepuff.com', 'disney.com', 'dogpictures.com'];

describe('googleSearch', () => {
  it('this is a test', () => {
    expect(googleSearch('dog', dbMock)).toEqual(['dog.com', 'dogpictures.com']);
  });
  it('works with undefined and null input', () => {
    expect(googleSearch(undefined, dbMock)).toEqual([]);
    expect(googleSearch(null, dbMock)).toEqual([]);
  });

  it('does not return more than 3 matches', () => {
    expect(googleSearch('.com', dbMock).length).toEqual(3);
    expect(googleSearch('dog', dbMock).length).toEqual(2);
  });
});
