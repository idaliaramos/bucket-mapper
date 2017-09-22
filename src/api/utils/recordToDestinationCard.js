export default function recordToDestination(record) {
  return {
    id: record.id,
    nid: record.fields.nid,
    name: record.fields.name,
    cards: record.fields.cards,
    createdTime: record.createdTime
  };
}
