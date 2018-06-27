import createDestinationCard from '../createDestinationCard';
import destinationToRecord from '../utils/destinationToRecord';
import data from './data';

describe('createDestinationCard', () => {
  it('Calls fetch and returns destinations', () => {
    fetch.mockResponse(
      JSON.stringify({
        id: 4,
        fields: {
          nid: 4,
          name: 'kii'
        }
      })
    );

    return createDestinationCard('kii', {
      AIRTABLE_DATABASE_ID: 'env.AIRTABLE_DATABASE_ID',
      AIRTABLE_TOKEN: 'env.AIRTABLE_TOKEN'
    }).then(destinations => {
      expect(destinations).toEqual({ id: 4, name: 'kii' });
    });
  });

  afterAll(() => {
    fetch.mockReset();
  });
});
