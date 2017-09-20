export default function rootReducer(
  currentState = {
    destinationCards: [],
    name: null
  },
  action
) {
  switch (action.type) {
    case 'GET_DESTINATION_CARDS_COMPLETED':
      return {
        ...currentState,
        destinationCards: action.destinationCards
      };
    case 'CREATE_DESTINATION_CARD_COMPLETED':
      return {
        ...currentState,
        destinationCards: [
          action.destinationCard,
          ...currentState.destinationCards
        ]
      };
    default:
      return currentState;
  }
}
