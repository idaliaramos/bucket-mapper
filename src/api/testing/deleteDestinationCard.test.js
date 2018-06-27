import deleteCard from '../deleteCard';
// import data from './data';

describe('uses api to delete destination card ', () => {
  it('calls fetch and deletes card', () => {
    fetch.mockResponse(
      JSON.stringify({
        deleted: true,
        id: 15
      })
    );

    return deleteCard(15, {
      AIRTABLE_DATABASE_ID: 'env.AIRTABLE_DATABASE_ID',
      AIRTABLE_TOKEN: 'env.AIRTABLE_TOKEN'
    }).then(destinations => {
      expect(destinations).toEqual({
        deleted: true,
        id: 15
      });
    });
  });
  afterAll(() => {
    fetch.mockReset();
  });
});
