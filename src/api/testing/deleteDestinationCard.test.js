import deleteCard from '../deleteCard';
// import data from './data';

describe('uses api to delete destination card ', () => {
  it('calls fetch and deletes card', () => {
    fetch.mockResponse(
      JSON.stringify({
        deleted: true,
        id: 23
      })
    );

    return deleteCard({
      AIRTABLE_DATABASE_ID: 'env.AIRTABLE_DATABASE_ID',
      AIRTABLE_TOKEN: 'env.AIRTABLE_TOKEN'
    }).then(destinations => {
      expect(destinations).toEqual({
        deleted: true,
        id: 23
      });
    });
  });
  afterAll(() => {
    fetch.mockReset();
  });
});
