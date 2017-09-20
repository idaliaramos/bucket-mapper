export default function recordToCard(record) {
  return {
    card: record.fields.cards,
    id: record.fields.nid,
    name: record.fields.name
  };
}
