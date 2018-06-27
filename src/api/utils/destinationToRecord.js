export default function destinationToRecord(destinationObj) {
  const record = { fields: {} };
  if (destinationObj.id) record.id = destinationObj.id;
  if (destinationObj.name) record.fields.name = destinationObj.name;
  if (destinationObj.nid) record.fields.nid = destinationObj.nid;
  if (destinationObj.cards) record.fields.cards = destinationObj.cards;

  return record;
}
