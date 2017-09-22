export default function rootReducer(
  currentState = {
    destinationCards: [],
    adventureCards: [],
    onShow: false
  },
  action
) {
  switch (action.type) {
    case 'GET_DESTINATION_COMPLETED':
      const destination = currentState.destinationCards.find(
        destination => destination.id === action.destination.id
      );
      return destination
        ? currentState // TODO: Replace the existing destination instead of doing nothing!!!!
        : {
            ...currentState,
            destinationCards: [
              ...currentState.destinationCards,
              action.destination
            ]
          };
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
    case 'DELETE_DESTINATION_CARD_COMPLETED':
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
    case 'UPDATED_ADVENTURE_CARD_COMPLETED':
      console.log(action, 'action');
      console.log(currentState.adventureCards, 'ADVENTURE CARDS');
      return {
        ...currentState,
        adventureCards: currentState.adventureCards.map(
          adventureCard =>
            adventureCard.id === action.adventureCard.id
              ? action.adventureCard
              : adventureCard
        )
      };
    case 'SHOW_ADVENTURE_CARD':
      return {
        ...currentState,
        onShow: true
      };
    default:
      return currentState;
  }
}
