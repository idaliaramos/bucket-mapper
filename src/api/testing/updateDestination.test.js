import updateDestinationCard from '../updateDestinationCard';
import destinationToRecord from '../utils/destinationToRecord';
describe('updateDestinationCard', () => {
  it('Calls fetch and returns updated destination card', () => {
    const changes = { name: 'mexico' };
    const id = '4';
    fetch.mockResponse(
      JSON.stringify({
        id: '4',
        fields: {
          name: 'mexico',
          nid: 1,
          cards: [2]
        }
      })
    );

    return updateDestinationCard(
      '4',
      { name: 'mexico' },
      {
        AIRTABLE_DATABASE_ID: 'env.AIRTABLE_DATABASE_ID',
        AIRTABLE_TOKEN: 'env.AIRTABLE_TOKEN'
      }
    ).then(response => {
      expect(response).toEqual({ id: '4', name: 'mexico' });
    });
  });

  afterAll(() => {
    fetch.mockReset();
  });
});
