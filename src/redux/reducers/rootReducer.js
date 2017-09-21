export default function rootReducer(
  currentState = {
    destinationCards: [],
    adventureCards: []
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
    case 'UPDATED_DESTINATION_CARD_COMPLETED':
      return {
        ...currentState,
        destinationCards: currentState.destinationCards.map(
          destinationCard =>
            destinationCard.id === action.destinationCard.id
              ? action.destinationCard
              : destinationCard
        )
      };
    case 'DELETE_MESSAGE_COMPLETED':
      return {
        ...currentState,
        destinationCards: currentState.destinationCards.filter(
          destinationCard => destinationCard.id !== action.id
        )
      };
    case 'GET_ADVENTURE_CARDS_COMPLETED':
      return {
        ...currentState,
        adventureCards: action.adventureCards
      };
    case 'CREATE_ADVENTURE_CARD_COMPLETED':
      return {
        ...currentState,
        adventureCards: [action.adventureCard, ...currentState.adventureCards]
      };
    default:
      return currentState;
  }
}
