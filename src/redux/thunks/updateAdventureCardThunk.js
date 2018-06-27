import updateAdventureCard from "../../api/updateAdventureCard";

export default function updateAdventureCardThunk(id, changes) {
  return (dispatch, getState, env) => {
    return updateAdventureCard(id, changes).then(adventureCard => {
      console.log(adventureCard, "this is the adventure card in the thunk");
      dispatch({
        type: "UPDATED_ADVENTURE_CARD_COMPLETED",
        adventureCard: adventureCard
      });
      return adventureCard;
    });
  };
}
