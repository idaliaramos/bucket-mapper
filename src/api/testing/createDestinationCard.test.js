import createDestinationCard from '../createDestinationCard';
import destinationToRecord from '../utils/destinationToRecord';
import data from './data';

describe('createDestinationCard', () => {
  it('Calls fetch and returns destinations', () => {
    fetch.mockResponse(
      JSON.stringify({
        records: data.destinationCards.map(destinationToRecord)
      })
    );

    return createDestinationCard({
      AIRTABLE_DATABASE_ID: 'env.AIRTABLE_DATABASE_ID',
      AIRTABLE_TOKEN: 'env.AIRTABLE_TOKEN'
    }).then(destinations => {
      expect(destinations).toEqual(data.destinationCards);
    });
  });

  afterAll(() => {
    fetch.mockReset();
  });
});
